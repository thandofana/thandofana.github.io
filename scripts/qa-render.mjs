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
  assert.ok(
    html.indexOf('id="projects"') < html.indexOf('id="about"') &&
      html.indexOf('id="about"') < html.indexOf('id="skills"') &&
      html.indexOf('id="skills"') < html.indexOf('id="background"') &&
      html.indexOf('id="background"') < html.indexOf('id="contact"'),
    'Homepage sections must follow the approved recruiter-first order.',
  )

  assert.equal(images.length, 1, 'The featured case study must render one preview image.')
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
    'The featured project image must use the approved loading strategy.',
  )
  assert.ok(
    newTabLinks.every((link) => /\brel="noreferrer"/.test(link)),
    'Every new-tab link must use the approved relationship attribute.',
  )

  assert.ok(html.includes('Download résumé'), 'The verified résumé download must render.')
  assert.ok(
    html.includes('href="/resume/Thando_Fana_Dlamini_Resume.pdf"'),
    'The résumé download must link to the verified local PDF.',
  )
  assert.ok(
    html.includes('download="Thando_Fana_Dlamini_Resume.pdf"'),
    'The résumé link must download with a clear filename.',
  )
  await access('public/resume/Thando_Fana_Dlamini_Resume.pdf')

  assert.ok(
    html.includes('DATA ANALYST | APPLIED MACHINE LEARNING'),
    'The unified professional title must render.',
  )
  assert.ok(
    html.includes('Turning complex data into decision-ready insight.'),
    'The approved hero heading must render.',
  )
  assert.ok(
    html.includes('I am a data analyst focused on transforming complex datasets'),
    'The approved About introduction must render.',
  )
  assert.ok(!html.toLowerCase().includes('junior data scientist'), 'The outdated title must not render.')

  assert.ok(html.includes('Featured case study'), 'The featured case study heading must render.')
  assert.ok(html.includes('FinAccess Eswatini'), 'The completed FinAccess case study must render.')
  assert.ok(
    html.includes('How do financial access and mobile-money adoption vary across demographic'),
    'The verified business question must render.',
  )
  assert.ok(html.includes('43.1%'), 'The financial-institution estimate must render.')
  assert.ok(html.includes('50.4%'), 'The mobile-money estimate must render.')
  assert.ok(html.includes('36.8% → 82.4%'), 'The education finding must render.')
  assert.ok(html.includes('34.1% → 65.0%'), 'The income finding must render.')
  assert.ok(
    html.includes('should not be interpreted as causal effects'),
    'The non-causal decision-relevance statement must render.',
  )
  assert.ok(html.includes('Technical details'), 'Technical model details must remain available.')
  assert.ok(html.includes('ROC-AUC 0.745'), 'The financial model performance must remain available.')
  assert.ok(html.includes('ROC-AUC 0.726'), 'The mobile-money performance must remain available.')
  assert.ok(html.includes('View live application'), 'The live application link must render.')
  assert.ok(html.includes('Read case study on GitHub'), 'The GitHub case-study link must render.')
  assert.ok(
    html.includes('https://github.com/thandofana/finaccess-eswatini/blob/main/README.md'),
    'The project link must use the verified direct README URL.',
  )
  assert.ok(
    !/Trade Intelligence|UN Comtrade|Work in progress|Data acquisition/i.test(html),
    'The discontinued trade project must not render.',
  )

  assert.ok(html.includes('Demonstrated in featured work'), 'Demonstrated skills must be labelled.')
  assert.ok(
    html.includes('Additional tools and professional training'),
    'Additional tools and training must be labelled.',
  )
  assert.ok(html.includes('Testing'), 'Testing must appear in demonstrated capabilities.')
  assert.ok(html.includes('Power BI'), 'Power BI must remain in additional tools and training.')

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

  assert.ok(
    html.includes('href="mailto:dlaminithandofana@gmail.com"'),
    'The verified email address must render as a contact link.',
  )
  assert.ok(
    html.includes('href="https://github.com/thandofana"'),
    'The verified GitHub profile must render as a contact link.',
  )
  assert.ok(!html.includes('Start a conversation.'), 'The old contact headline must not render.')
  assert.ok(
    !html.includes('Open to data-analysis opportunities'),
    'The old contact description must not render.',
  )
  assert.ok(!html.includes('href="tel:'), 'Phone numbers must not render on the public homepage.')
  assert.ok(!html.includes('LinkedIn'), 'LinkedIn must remain hidden until its URL is provided.')

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
        featuredProjects: 1,
        verifiedResumeDetailsPresent: true,
      },
      null,
      2,
    ),
  )
} finally {
  await server.close()
}
