import assert from 'node:assert/strict'
import { spawn, spawnSync } from 'node:child_process'
import { once } from 'node:events'
import { existsSync } from 'node:fs'
import { mkdtemp, rm } from 'node:fs/promises'
import { createServer } from 'node:net'
import { platform, tmpdir } from 'node:os'
import { join } from 'node:path'

const baseUrl = process.env.PORTFOLIO_QA_URL ?? 'http://127.0.0.1:4173'
const browserCandidates = [
  process.env.CHROME_PATH,
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean)
const browserPath = browserCandidates.find(existsSync)

assert.ok(browserPath, 'Chrome, Chromium, or Edge is required for browser QA.')

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = createServer()
    server.once('error', reject)
    server.listen(0, '127.0.0.1', () => {
      const address = server.address()
      server.close(() => resolve(address.port))
    })
  })
}

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds))

async function waitForBrowser(port) {
  const endpoint = `http://127.0.0.1:${port}/json/version`

  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(endpoint)
      if (response.ok) return
    } catch {
      // Chrome has not opened the debugging port yet.
    }

    await delay(100)
  }

  throw new Error('Timed out while starting the browser for QA.')
}

function connectToPage(webSocketUrl) {
  return new Promise((resolve, reject) => {
    const socket = new WebSocket(webSocketUrl)
    const pending = new Map()
    const events = new Map()
    let commandId = 0

    socket.addEventListener('error', reject, { once: true })
    socket.addEventListener('open', () => {
      socket.addEventListener('message', (event) => {
        const message = JSON.parse(event.data)

        if (message.id) {
          const request = pending.get(message.id)
          if (!request) return

          pending.delete(message.id)
          if (message.error) request.reject(new Error(message.error.message))
          else request.resolve(message.result)
          return
        }

        const listeners = events.get(message.method) ?? []
        for (const listener of listeners) listener(message.params)
      })

      resolve({
        close: () => socket.close(),
        on(method, listener) {
          events.set(method, [...(events.get(method) ?? []), listener])
        },
        once(method) {
          return new Promise((eventResolve) => {
            const listener = (params) => {
              events.set(method, (events.get(method) ?? []).filter((entry) => entry !== listener))
              eventResolve(params)
            }
            events.set(method, [...(events.get(method) ?? []), listener])
          })
        },
        send(method, params = {}) {
          commandId += 1
          return new Promise((commandResolve, commandReject) => {
            pending.set(commandId, { resolve: commandResolve, reject: commandReject })
            socket.send(JSON.stringify({ id: commandId, method, params }))
          })
        },
      })
    }, { once: true })
  })
}

async function createPage(port, url) {
  const endpoint = `http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`
  const response = await fetch(endpoint, { method: 'PUT' })
  assert.ok(response.ok, `Unable to open browser QA page: ${url}`)
  return response.json()
}

async function inspectPage(port, route, viewport) {
  const url = new URL(route, baseUrl).href
  const target = await createPage(port, 'about:blank')
  const cdp = await connectToPage(target.webSocketDebuggerUrl)
  const runtimeErrors = []

  try {
    await cdp.send('Page.enable')
    await cdp.send('Runtime.enable')
    await cdp.send('Log.enable')
    cdp.on('Runtime.exceptionThrown', ({ exceptionDetails }) => {
      runtimeErrors.push(exceptionDetails.text)
    })
    cdp.on('Log.entryAdded', ({ entry }) => {
      if (entry.level === 'error') runtimeErrors.push(entry.text)
    })
    await cdp.send('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.width <= 430,
    })
    const loaded = Promise.race([
      cdp.once('Page.loadEventFired'),
      delay(10000).then(() => {
        throw new Error(`Timed out while loading ${url}`)
      }),
    ])
    await cdp.send('Page.navigate', { url })
    await loaded

    await cdp.send('Runtime.evaluate', {
      expression: `
        (async () => {
          await document.fonts.ready
          const images = [...document.images]
          for (const image of images) image.loading = 'eager'
          const step = Math.max(window.innerHeight * 0.8, 320)
          for (let y = 0; y < document.documentElement.scrollHeight; y += step) {
            window.scrollTo(0, y)
            await new Promise((resolve) => setTimeout(resolve, 20))
          }
          await Promise.all(images.map((image) => (
            image.complete
              ? Promise.resolve()
              : Promise.race([
                new Promise((resolve) => {
                  image.addEventListener('load', resolve, { once: true })
                  image.addEventListener('error', resolve, { once: true })
                }),
                new Promise((resolve) => setTimeout(resolve, 3000)),
              ])
          )))
          await new Promise((resolve) => setTimeout(resolve, 150))
          window.scrollTo(0, 0)
        })()
      `,
      awaitPromise: true,
    })

    await cdp.send('Input.dispatchKeyEvent', {
      type: 'keyDown',
      key: 'Tab',
      code: 'Tab',
      windowsVirtualKeyCode: 9,
    })
    await cdp.send('Input.dispatchKeyEvent', {
      type: 'keyUp',
      key: 'Tab',
      code: 'Tab',
      windowsVirtualKeyCode: 9,
    })

    const evaluation = await cdp.send('Runtime.evaluate', {
      expression: `
        (() => {
          const visible = (element) => {
            const style = getComputedStyle(element)
            const rect = element.getBoundingClientRect()
            return style.display !== 'none' && style.visibility !== 'hidden' && rect.width > 0 && rect.height > 0
          }
          const elements = [...document.body.querySelectorAll('*')].filter(visible)
          const overflowingElements = elements
            .filter((element) => {
              const rect = element.getBoundingClientRect()
              return rect.left < -1 || rect.right > window.innerWidth + 1
            })
            .slice(0, 10)
            .map((element) => ({
              className: typeof element.className === 'string' ? element.className : '',
              tagName: element.tagName,
              text: element.textContent.trim().slice(0, 60),
            }))
          const images = [...document.images]
          const links = [...document.querySelectorAll('a')]
          const focusedStyle = getComputedStyle(document.activeElement)
          const projectGrid = document.querySelector('.project-grid')
          const firstProjectCard = document.querySelector('.project-card')
          const methodologyGrid = document.querySelector('.methodology-flow')
          const executiveGrid = document.querySelector('.executive-summary')
          const skillsGrid = document.querySelector('.skills-tools-grid')
          const firstResult = document.querySelector('.result-entry')
          const heroVisual = document.querySelector('.project-hero__visual')
          const heroContainer = heroVisual?.closest('.container')
          const heroVisualRect = heroVisual?.getBoundingClientRect()
          const heroContainerRect = heroContainer?.getBoundingClientRect()

          return {
            title: document.title,
            description: document.querySelector('meta[name="description"]')?.content ?? '',
            landmarks: {
              header: document.querySelectorAll('header.site-header').length,
              main: document.querySelectorAll('main').length,
              footer: document.querySelectorAll('footer').length,
              h1: document.querySelectorAll('h1').length,
            },
            dimensions: {
              viewportWidth: window.innerWidth,
              clientWidth: document.documentElement.clientWidth,
              scrollWidth: document.documentElement.scrollWidth,
              scrollHeight: document.documentElement.scrollHeight,
            },
            overflowingElements,
            brokenImages: images
              .filter((image) => !image.complete || image.naturalWidth === 0)
              .map((image) => image.currentSrc || image.src),
            imagesWithoutAlt: images.filter((image) => !image.hasAttribute('alt')).length,
            emptyLinks: links.filter((link) => !link.getAttribute('href')).length,
            unsafeNewTabs: links.filter((link) => (
              link.target === '_blank' && !link.rel.split(/\\s+/).includes('noreferrer')
            )).length,
            focus: {
              className: document.activeElement?.className ?? '',
              tagName: document.activeElement?.tagName ?? '',
              outlineStyle: focusedStyle.outlineStyle,
              outlineWidth: focusedStyle.outlineWidth,
            },
            layout: {
              projectGridColumns: projectGrid ? getComputedStyle(projectGrid).gridTemplateColumns : null,
              firstProjectCardTop: firstProjectCard?.getBoundingClientRect().top ?? null,
              methodologyGridColumns: methodologyGrid
                ? getComputedStyle(methodologyGrid).gridTemplateColumns
                : null,
              executiveGridColumns: executiveGrid
                ? getComputedStyle(executiveGrid).gridTemplateColumns
                : null,
              skillsGridColumns: skillsGrid ? getComputedStyle(skillsGrid).gridTemplateColumns : null,
              resultGridColumns: firstResult ? getComputedStyle(firstResult).gridTemplateColumns : null,
              heroVisual: heroVisualRect && heroContainerRect ? {
                width: heroVisualRect.width,
                leftInset: heroVisualRect.left - heroContainerRect.left,
                rightInset: heroContainerRect.right - heroVisualRect.right,
                containerWidth: heroContainerRect.width,
              } : null,
            },
          }
        })()
      `,
      returnByValue: true,
    })
    const result = evaluation.result.value

    assert.equal(result.landmarks.header, 1, `${url} must contain one site header.`)
    assert.equal(result.landmarks.main, 1, `${url} must contain one main landmark.`)
    assert.equal(result.landmarks.footer, 1, `${url} must contain one footer.`)
    assert.equal(result.landmarks.h1, 1, `${url} must contain one h1.`)
    assert.ok(result.title.includes('Thando F. Dlamini'), `${url} has an unexpected page title.`)
    assert.ok(result.description.length > 50, `${url} is missing a useful meta description.`)
    assert.ok(
      result.dimensions.scrollWidth <= result.dimensions.clientWidth,
      `${url} overflows horizontally at ${viewport.width}px.`,
    )
    assert.deepEqual(result.overflowingElements, [], `${url} has elements outside the viewport.`)
    assert.deepEqual(result.brokenImages, [], `${url} has broken or unloaded images.`)
    assert.equal(result.imagesWithoutAlt, 0, `${url} has images without alt text.`)
    assert.equal(result.emptyLinks, 0, `${url} has links without destinations.`)
    assert.equal(result.unsafeNewTabs, 0, `${url} has unsafe new-tab links.`)
    assert.deepEqual(runtimeErrors, [], `${url} raised browser runtime errors.`)
    assert.notEqual(result.focus.tagName, 'BODY', `${url} did not expose keyboard focus after Tab.`)
    assert.notEqual(result.focus.outlineStyle, 'none', `${url} does not show a focus outline.`)

    const countGridTracks = (columns) => columns?.trim().split(/\s+/).length ?? 0
    if (route === '/#/') {
      const expectedColumns = viewport.width <= 768 ? 1 : 2
      assert.equal(
        countGridTracks(result.layout.projectGridColumns),
        expectedColumns,
        `${url} has an unexpected project-card layout at ${viewport.width}px.`,
      )
      assert.ok(
        result.layout.firstProjectCardTop < viewport.height,
        `${url} does not introduce the first project within the initial viewport at ${viewport.width}px.`,
      )
    }

    if (route === '/#/project/finaccess-eswatini') {
      const expectedSkillsColumns = viewport.width <= 768 ? 1 : 3
      const expectedHeroWidth = viewport.width <= 768
        ? result.layout.heroVisual.containerWidth
        : (result.layout.heroVisual.containerWidth - Math.min(64, Math.max(32, viewport.width * 0.04))) / 2

      assert.ok(
        Math.abs(result.layout.heroVisual.leftInset - result.layout.heroVisual.rightInset) < 1,
        `${url} project preview is not centred at ${viewport.width}px.`,
      )
      assert.ok(
        Math.abs(result.layout.heroVisual.width - expectedHeroWidth) < 1,
        `${url} project preview does not match the homepage card width at ${viewport.width}px.`,
      )
      assert.equal(
        countGridTracks(result.layout.methodologyGridColumns),
        1,
        `${url} has an unexpected methodology layout at ${viewport.width}px.`,
      )
      assert.equal(
        countGridTracks(result.layout.executiveGridColumns),
        1,
        `${url} has an unexpected executive-summary layout at ${viewport.width}px.`,
      )
      assert.equal(
        countGridTracks(result.layout.skillsGridColumns),
        expectedSkillsColumns,
        `${url} has an unexpected skills layout at ${viewport.width}px.`,
      )
      assert.equal(
        countGridTracks(result.layout.resultGridColumns),
        1,
        `${url} results do not follow one reading column at ${viewport.width}px.`,
      )
    }

    return {
      route,
      viewport: `${viewport.width}×${viewport.height}`,
      ...result,
      runtimeErrors,
    }
  } finally {
    cdp.close()
    await fetch(`http://127.0.0.1:${port}/json/close/${target.id}`, { method: 'PUT' }).catch(() => {})
  }
}

const port = await getFreePort()
const profileDirectory = await mkdtemp(join(tmpdir(), 'portfolio-browser-qa-'))
const browser = spawn(browserPath, [
  '--headless=new',
  '--disable-gpu',
  '--disable-breakpad',
  '--disable-crash-reporter',
  '--hide-scrollbars',
  '--no-first-run',
  '--no-default-browser-check',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profileDirectory}`,
  'about:blank',
], { stdio: 'ignore' })

const viewports = [
  { width: 320, height: 720 },
  { width: 375, height: 812 },
  { width: 430, height: 932 },
  { width: 768, height: 1024 },
  { width: 1024, height: 768 },
  { width: 1440, height: 900 },
]
const routes = ['/#/', '/#/project/finaccess-eswatini']

try {
  await waitForBrowser(port)
  const results = []

  for (const viewport of viewports) {
    for (const route of routes) {
      console.log(`Checking ${route} at ${viewport.width}×${viewport.height}...`)
      results.push(await inspectPage(port, route, viewport))
    }
  }

  console.log('Checking the project not-found route...')
  results.push(await inspectPage(port, '/#/project/not-a-project', viewports[1]))
  console.log(JSON.stringify(results, null, 2))
} finally {
  if (platform() === 'win32' && browser.pid) {
    spawnSync('taskkill', ['/PID', String(browser.pid), '/T', '/F'], { stdio: 'ignore' })
  } else {
    browser.kill()
  }
  if (browser.exitCode === null) {
    await Promise.race([once(browser, 'exit'), delay(3000)])
  }

  for (let attempt = 0; attempt < 5; attempt += 1) {
    try {
      await rm(profileDirectory, { recursive: true, force: true })
      break
    } catch (error) {
      if (attempt === 4) {
        console.warn(`Browser QA profile cleanup skipped: ${error.message}`)
        break
      }
      await delay(250)
    }
  }
}
