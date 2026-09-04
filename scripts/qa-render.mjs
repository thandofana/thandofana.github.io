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
  const { default: ProjectCaseStudy } = await server.ssrLoadModule('/src/pages/ProjectCaseStudy.jsx')
  const { default: projects } = await server.ssrLoadModule('/src/data/projects.js')
  const { parseHashRoute } = await server.ssrLoadModule('/src/routing/useHashRoute.js')
  const { getProjectPresentation } = await server.ssrLoadModule(
    '/src/utils/projectPresentation.js',
  )
  const html = renderToStaticMarkup(React.createElement(App))
  const caseStudyHtml = renderToStaticMarkup(
    React.createElement(ProjectCaseStudy, { project: projects[0], nextProject: null }),
  )
  const caseStudyImages = [...caseStudyHtml.matchAll(/<img\b[^>]*>/g)].map((match) => match[0])
  const anchorTargets = [...html.matchAll(/href="#(?!\/)([^"]+)"/g)].map((match) => match[1])
  const projectRoutes = [...html.matchAll(/href="#\/project\/([^"]+)"/g)].map(
    (match) => match[1],
  )
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
  }

  assert.deepEqual(
    landmarks,
    { header: 1, main: 1, nav: 2, footer: 1 },
    'The gallery must render one header, main and footer with header and footer navigation.',
  )
  assert.equal(headings.h1, 1, 'The gallery must contain exactly one h1.')
  assert.equal(headings.h2, 1, 'The gallery must contain exactly one section heading.')
  assert.equal(headings.h3, projects.length, 'Every project must render one card heading.')
  assert.deepEqual(missingAnchorTargets, [], 'Every same-page link must resolve to an element ID.')

  assert.ok(
    html.includes('<h1 id="gallery-title">Data Analytics · Machine Learning · Data Science</h1>'),
    'The discipline line must render as the homepage title.',
  )
  assert.ok(
    html.includes('>Thando F. Dlamini</a>'),
    'The full verified name must render in the header.',
  )
  assert.ok(html.includes('<h2 id="projects-title">Projects.</h2>'), 'The project heading must render.')
  assert.ok(
    html.includes('A focused collection of practical analytics, data science and machine-learning'),
    'The approved gallery introduction must render.',
  )

  assert.equal(images.length, projects.length, 'Every project must render one dominant visual.')
  assert.ok(
    images.every((image) => /\balt="[^"]+"/.test(image)),
    'Every project image must have descriptive alternative text.',
  )
  assert.ok(
    images.every((image) => /\bwidth="\d+"/.test(image) && /\bheight="\d+"/.test(image)),
    'Every project image must reserve its dimensions.',
  )
  assert.ok(
    images.every((image) => /\bdecoding="async"/.test(image)),
    'Every project image must use asynchronous decoding.',
  )
  assert.ok(
    newTabLinks.every((link) => /\brel="noreferrer"/.test(link)),
    'Every new-tab link must use a safe relationship attribute.',
  )

  assert.deepEqual(
    projectRoutes,
    projects.map((project) => project.slug),
    'Every project card must link to its GitHub-Pages-safe case-study route.',
  )
  assert.ok(html.includes('01 / Machine Learning'), 'The first project number and category must render.')
  assert.ok(html.includes('FinAccess Eswatini'), 'The verified FinAccess project must render.')
  assert.ok(
    html.includes('Predicting and explaining financial inclusion using Global Findex microdata.'),
    'The concise FinAccess card summary must render.',
  )
  assert.ok(html.includes('View Project'), 'Every card must expose the internal project action.')

  assert.ok(!html.includes('id="about"'), 'The homepage must not render an About section.')
  assert.ok(!html.includes('id="skills"'), 'The homepage must not render a Skills section.')
  assert.ok(!html.includes('id="background"'), 'The homepage must not render background sections.')
  assert.ok(!html.includes('id="contact"'), 'The homepage must not render a large Contact section.')
  assert.ok(!html.includes('View CV'), 'The project-first homepage must not render a CV action.')
  assert.ok(!html.includes('Live project'), 'External project actions belong in the case-study view.')
  assert.ok(!html.includes('View case study / GitHub'), 'Cards must open internal project views.')
  assert.ok(
    !/Trade Intelligence|UN Comtrade|Work in progress|Data acquisition/i.test(html),
    'The discontinued trade project must not render.',
  )

  assert.ok(
    html.includes('href="mailto:dlaminithandofana@gmail.com"'),
    'The verified email address must remain available in the footer.',
  )
  assert.ok(
    !html.includes('href="https://github.com/thandofana"'),
    'The personal GitHub profile must remain absent.',
  )
  assert.ok(!html.includes('LinkedIn'), 'LinkedIn must remain hidden until its URL is provided.')
  assert.ok(!html.includes('href="tel:'), 'Phone numbers must not render publicly.')

  assert.deepEqual(parseHashRoute(''), { type: 'gallery' }, 'An empty hash must open the gallery.')
  assert.deepEqual(parseHashRoute('#/'), { type: 'gallery' }, 'The root hash must open the gallery.')
  assert.deepEqual(
    parseHashRoute('#/project/finaccess-eswatini'),
    { type: 'project', slug: 'finaccess-eswatini' },
    'The FinAccess hash must resolve to its project view.',
  )
  assert.deepEqual(
    parseHashRoute('#/unknown'),
    { type: 'not-found' },
    'Unknown routed hashes must resolve to the not-found view.',
  )

  const caseStudySectionTitles = [
    'Executive Summary',
    'Business Problem',
    'Methodology',
    'Skills &amp; Tools',
    'Results',
    'Business Recommendations',
    'Next Steps',
    'Limitations',
    'Explore the Project',
  ]
  let previousSectionIndex = -1
  for (const title of caseStudySectionTitles) {
    const sectionIndex = caseStudyHtml.indexOf(`>${title}</h2>`)
    assert.ok(sectionIndex > previousSectionIndex, `${title} must render in the approved case-study order.`)
    previousSectionIndex = sectionIndex
  }

  assert.ok(
    caseStudyHtml.includes('<h1>FinAccess Eswatini</h1>'),
    'The project view must render the verified project title.',
  )
  assert.ok(
    caseStudyHtml.includes('01 / Machine Learning · 2025'),
    'The project number, category and year must render.',
  )
  assert.ok(
    caseStudyHtml.includes('href="https://finaccess-eswatini.vercel.app"'),
    'The live application must be available from the project view.',
  )
  assert.ok(
    caseStudyHtml.includes('href="https://github.com/thandofana/finaccess-eswatini"'),
    'The project repository must be available from the project view.',
  )
  assert.ok(
    caseStudyHtml.includes('43.1%') &&
      caseStudyHtml.includes('50.4%') &&
      caseStudyHtml.includes('36.8% → 82.4%') &&
      caseStudyHtml.includes('34.1% → 65.0%'),
    'The project view must retain all verified headline findings.',
  )
  assert.ok(
    caseStudyHtml.includes('0.745') && caseStudyHtml.includes('0.726'),
    'The project view must retain the verified model evaluation results.',
  )
  assert.ok(
    caseStudyHtml.includes('do not establish causation'),
    'The project view must preserve the non-causal limitation.',
  )
  assert.ok(
    !caseStudyHtml.includes('Development placeholder'),
    'The completed FinAccess case study must not contain development placeholders.',
  )
  assert.ok(
    caseStudyHtml.includes('60.5% vs 39.7%') && caseStudyHtml.includes('55.2% vs 20.4%'),
    'The verified digital-access comparisons must render.',
  )
  assert.ok(
    caseStudyHtml.includes('7 of 8') && caseStudyHtml.includes('0.270 / 0.236'),
    'The verified adjusted-association findings must render.',
  )
  assert.ok(
    caseStudyHtml.includes('101') && caseStudyHtml.includes('15 / 15'),
    'The verified project and public-release checks must render.',
  )
  assert.ok(
    caseStudyHtml.includes('Validate both pipelines on independent or newer Eswatini data'),
    'The evidence-led next steps must render.',
  )
  assert.ok(
    caseStudyHtml.includes('The protected holdouts contain 211 and 210 respondents'),
    'The documented holdout limitation must render.',
  )
  assert.equal(caseStudyImages.length, 9, 'The case study must render one hero and eight evidence visuals.')
  assert.ok(
    caseStudyImages.every((image) => /\balt="[^"]+"/.test(image)),
    'Every case-study visual must have descriptive alternative text.',
  )
  assert.ok(
    caseStudyImages.every(
      (image) => /\bwidth="\d+"/.test(image) && /\bheight="\d+"/.test(image),
    ),
    'Every case-study visual must reserve its dimensions.',
  )
  assert.ok(
    [...caseStudyHtml.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)].every((match) =>
      /\brel="noreferrer"/.test(match[0]),
    ),
    'Every external case-study link must use a safe relationship attribute.',
  )

  const powerBiStaticProject = {
    ...projects[0],
    title: 'Power BI support fixture',
    slug: 'power-bi-support-fixture',
    category: 'Power BI',
    liveUrl: null,
    repositoryUrl: null,
    presentation: { kind: 'power-bi' },
  }
  const powerBiStaticPresentation = getProjectPresentation(powerBiStaticProject)
  const powerBiStaticHtml = renderToStaticMarkup(
    React.createElement(ProjectCaseStudy, { project: powerBiStaticProject, nextProject: null }),
  )

  assert.deepEqual(
    powerBiStaticPresentation,
    {
      kind: 'power-bi',
      heroActionLabel: 'Open Interactive Dashboard',
      exploreActionLabel: 'Open Interactive Dashboard',
      liveUrl: null,
      repositoryUrl: null,
    },
    'Power BI projects without a verified public URL must use static presentation only.',
  )
  assert.ok(
    powerBiStaticHtml.includes('project-page--power-bi'),
    'Power BI case studies must expose their presentation type.',
  )
  assert.ok(
    !powerBiStaticHtml.includes('Open Interactive Dashboard'),
    'A Power BI project without a public URL must not render an interactive-dashboard link.',
  )
  assert.ok(
    powerBiStaticHtml.includes('>Results</h2>') &&
      [...powerBiStaticHtml.matchAll(/<img\b[^>]*>/g)].length === 9,
    'Static Power BI presentation must remain complete without an interactive dashboard.',
  )

  const publicDashboardUrl = 'https://app.powerbi.com/view?r=verified-public-report'
  const powerBiPublicProject = {
    ...powerBiStaticProject,
    presentation: { kind: 'power-bi', publicDashboardUrl },
  }
  const powerBiPublicHtml = renderToStaticMarkup(
    React.createElement(ProjectCaseStudy, { project: powerBiPublicProject, nextProject: null }),
  )

  assert.ok(
    powerBiPublicHtml.includes(`href="${publicDashboardUrl}"`),
    'A verified public Power BI URL must render as the dashboard action.',
  )
  assert.ok(
    powerBiPublicHtml.includes('Open Interactive Dashboard'),
    'Power BI projects must use dashboard-specific action text.',
  )

  console.log(
    JSON.stringify(
      {
        renderedCharacters: html.length,
        landmarks,
        headings,
        internalLinks: anchorTargets.length,
        missingAnchorTargets,
        projectRoutes,
        images: images.length,
        featuredProjects: projects.length,
        caseStudySections: caseStudySectionTitles.length,
        caseStudyRouteVerified: true,
        caseStudyImages: caseStudyImages.length,
        developmentPlaceholders: 0,
        powerBiStaticFallbackVerified: true,
        powerBiPublicActionVerified: true,
      },
      null,
      2,
    ),
  )
} finally {
  await server.close()
}
