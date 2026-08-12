import assert from 'node:assert/strict'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { createServer } from 'vite'

const server = await createServer({
  appType: 'custom',
  logLevel: 'silent',
  server: { middlewareMode: true },
})

try {
  const { default: App } = await server.ssrLoadModule('/src/App.jsx')
  const html = renderToStaticMarkup(React.createElement(App))
  const anchorTargets = [...html.matchAll(/href="#([^"]+)"/g)].map((match) => match[1])
  const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map((match) => match[1]))
  const missingAnchorTargets = [...new Set(anchorTargets.filter((target) => !ids.has(target)))]
  const images = [...html.matchAll(/<img\b[^>]*>/g)].map((match) => match[0])
  const newTabLinks = [...html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)].map(
    (match) => match[0],
  )

  const landmarks = {
    header: (html.match(/<header\b/g) || []).length,
    main: (html.match(/<main\b/g) || []).length,
    nav: (html.match(/<nav\b/g) || []).length,
    footer: (html.match(/<footer\b/g) || []).length,
  }
  const headings = {
    h1: (html.match(/<h1\b/g) || []).length,
    h2: (html.match(/<h2\b/g) || []).length,
    h3: (html.match(/<h3\b/g) || []).length,
    h4: (html.match(/<h4\b/g) || []).length,
  }

  assert.equal(landmarks.main, 1, 'The page must contain exactly one main landmark.')
  assert.equal(landmarks.footer, 1, 'The page must contain exactly one footer landmark.')
  assert.ok(landmarks.header >= 1, 'The page must contain a header landmark.')
  assert.ok(landmarks.nav >= 1, 'The page must contain a navigation landmark.')
  assert.equal(headings.h1, 1, 'The page must contain exactly one h1.')
  assert.deepEqual(missingAnchorTargets, [], 'Every same-page link must resolve to an element ID.')
  assert.equal(images.length, 1, 'The concise project presentation must render one preview image.')
  assert.ok(
    images.every((image) => /\balt="[^"]+"/.test(image)),
    'Every rendered image must have descriptive alternative text.',
  )
  assert.ok(
    images.every((image) => /\bwidth="\d+"/.test(image) && /\bheight="\d+"/.test(image)),
    'Every rendered image must reserve its layout dimensions.',
  )
  assert.ok(
    images.every(
      (image) => /\bloading="lazy"/.test(image) && /\bdecoding="async"/.test(image),
    ),
    'Every rendered project image must use the approved loading strategy.',
  )
  assert.ok(
    newTabLinks.every((link) => /\brel="noreferrer"/.test(link)),
    'Every new-tab link must use the approved relationship attribute.',
  )
  assert.ok(!html.includes('Download CV'), 'The unverified CV placeholder must remain hidden.')
  assert.ok(
    html.includes('href="mailto:dlaminithandofana@gmail.com"'),
    'The verified email address must render as a contact link.',
  )
  assert.ok(!html.includes('LinkedIn'), 'The unverified LinkedIn placeholder must remain hidden.')
  assert.ok(html.includes('Junior Data Scientist'), 'The current professional title must render.')
  assert.ok(
    !html.includes('Final-year BSc Information Technology student'),
    'The outdated student introduction must not render.',
  )
  assert.ok(
    !html.includes('href="https://github.com/thandofana"'),
    'Standalone GitHub links must not render in the hero or footer.',
  )
  assert.ok(html.includes('href="tel:+26879711996"'), 'The first phone number must render.')
  assert.ok(html.includes('href="tel:+26878700044"'), 'The second phone number must render.')
  assert.ok(
    html.includes('class="contact__label">Email</span>'),
    'The email address must have a visible label.',
  )
  assert.ok(
    html.includes('class="contact__label">Phone</span>'),
    'The phone numbers must have a visible label.',
  )
  assert.ok(!html.includes('End-to-end workflow'), 'The previous hero graphic must not render.')
  assert.ok(!html.includes('Core workflow capabilities'), 'The old capability strip must not render.')
  assert.ok(html.includes('Datamatics Eswatini'), 'Verified internship experience must render.')
  assert.ok(html.includes('University of Eswatini'), 'Verified education must render.')
  assert.ok(
    html.includes('Google Data Analytics Professional Certificate'),
    'Verified professional learning must render.',
  )
  assert.ok(
    html.includes('href="/certificates/google-data-analytics.pdf"'),
    'The Google Data Analytics certificate PDF must be linked.',
  )
  assert.ok(
    html.includes('href="/certificates/excel-data-analysis.pdf"'),
    'The Excel Data Analysis certificate PDF must be linked.',
  )
  assert.ok(html.includes('Projects, briefly.'), 'The concise projects section must render.')
  assert.ok(
    !html.includes('A portfolio proof of concept'),
    'The completed project summary must not use portfolio framing.',
  )
  assert.ok(html.includes('GitHub README'), 'The completed project must link to its README.')
  assert.ok(
    html.includes('https://github.com/thandofana/finaccess-eswatini/blob/main/README.md'),
    'The project README link must bypass the repository file listing.',
  )
  assert.ok(
    html.includes('Eswatini Trade Intelligence Platform'),
    'The Trade Intelligence work-in-progress project must render.',
  )
  assert.ok(html.includes('Work in progress'), 'The in-progress project status must render.')
  assert.ok(
    html.includes('Data acquisition &amp; audit'),
    'The current Trade Intelligence phase must render.',
  )
  assert.ok(!html.includes('Product architecture'), 'Repository structure must not render.')
  assert.ok(!html.includes('From raw evidence to a deployed application.'), 'The long case study must not render.')

  console.log(
    JSON.stringify(
      {
        renderedCharacters: html.length,
        landmarks,
        headings,
        internalLinks: anchorTargets.length,
        missingAnchorTargets,
        images: images.length,
        newTabLinks: newTabLinks.length,
        verifiedResumeDetailsPresent: true,
      },
      null,
      2,
    ),
  )
} finally {
  await server.close()
}
