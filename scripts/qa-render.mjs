import assert from 'node:assert/strict'
import { access } from 'node:fs/promises'
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

  assert.equal(landmarks.main, 1, 'The page must contain exactly one main landmark.')
  assert.equal(landmarks.footer, 1, 'The page must contain exactly one footer landmark.')
  assert.ok(landmarks.header >= 1, 'The page must contain a header landmark.')
  assert.ok(landmarks.nav >= 1, 'The page must contain a navigation landmark.')
  assert.equal((html.match(/<h1\b/g) || []).length, 1, 'The page must contain exactly one h1.')
  assert.deepEqual(missingAnchorTargets, [], 'Every same-page link must resolve to an element ID.')
  assert.ok(
    html.indexOf('id="work"') < html.indexOf('id="about"') &&
      html.indexOf('id="about"') < html.indexOf('id="background"') &&
      html.indexOf('id="background"') < html.indexOf('id="contact"'),
    'Homepage sections must follow the recruiter-first order.',
  )

  assert.equal(images.length, 1, 'The featured case study must render one preview image.')
  assert.ok(images.every((image) => /\balt="[^"]+"/.test(image)), 'Every image needs alt text.')
  assert.ok(
    images.every((image) => /\bwidth="\d+"/.test(image) && /\bheight="\d+"/.test(image)),
    'Every image must reserve its layout dimensions.',
  )
  assert.ok(
    images.every((image) => /\bloading="lazy"/.test(image) && /\bdecoding="async"/.test(image)),
    'The project image must use the approved loading strategy.',
  )
  assert.ok(
    newTabLinks.every((link) => /\brel="noreferrer"/.test(link)),
    'Every new-tab link must use the approved relationship attribute.',
  )

  assert.ok(html.includes('decision-ready insight.'), 'The professional positioning must render.')
  assert.ok(html.includes('Data Analyst based in Eswatini'), 'The role and location must render.')
  assert.ok(html.includes('View CV'), 'The primary CV action must render.')
  assert.ok(html.includes('Download CV'), 'The downloadable CV action must render.')
  assert.ok(
    html.includes('download="Thando_Fana_Dlamini_Resume.pdf"'),
    'The résumé must download with a clear filename.',
  )
  await access('public/resume/Thando_Fana_Dlamini_Resume.pdf')

  assert.ok(html.includes('FinAccess Eswatini'), 'The completed case study must render.')
  assert.ok(html.includes('Executive summary'), 'The project must start with an executive summary.')
  assert.ok(html.includes('The business question'), 'The business question must be labelled.')
  assert.ok(
    html.includes('How do financial access and mobile-money adoption vary across demographic'),
    'The verified business question must render.',
  )
  assert.ok(html.includes('Audit and prepare'), 'The analytical method must render.')
  assert.ok(html.includes('43.1%'), 'The financial-institution estimate must render.')
  assert.ok(html.includes('50.4%'), 'The mobile-money estimate must render.')
  assert.ok(html.includes('36.8% to 82.4%'), 'The education finding must render.')
  assert.ok(html.includes('34.1% to 65.0%'), 'The income finding must render.')
  assert.ok(html.includes('Recommendations and next steps'), 'Business recommendations must render.')
  assert.ok(
    html.includes('should not be interpreted as causal effects'),
    'The non-causal interpretation statement must render.',
  )
  assert.ok(html.includes('ROC-AUC 0.745'), 'The financial model performance must render.')
  assert.ok(html.includes('ROC-AUC 0.726'), 'The mobile-money model performance must render.')
  assert.ok(
    html.includes('https://github.com/thandofana/finaccess-eswatini/blob/main/README.md'),
    'The verified GitHub case-study link must render.',
  )

  assert.ok(html.includes('Technical depth with a clear business point of view.'))
  assert.ok(html.includes('Datamatics Eswatini'), 'Verified internship experience must render.')
  assert.ok(html.includes('University of Eswatini'), 'Verified education must render.')
  assert.ok(html.includes('Google Data Analytics Professional Certificate'))
  assert.ok(html.includes('href="mailto:dlaminithandofana@gmail.com"'))
  assert.ok(!html.includes('LinkedIn'), 'LinkedIn must remain hidden until its URL is provided.')

  console.log(
    JSON.stringify(
      {
        renderedCharacters: html.length,
        landmarks,
        internalLinks: anchorTargets.length,
        missingAnchorTargets,
        images: images.length,
        newTabLinks: newTabLinks.length,
        featuredProjects: 1,
      },
      null,
      2,
    ),
  )
} finally {
  await server.close()
}
