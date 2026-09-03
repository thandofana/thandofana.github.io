import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const templateUrl = new URL('../docs/project-readme-template.md', import.meta.url)
const portfolioReadmeUrl = new URL('../README.md', import.meta.url)

const [template, portfolioReadme] = await Promise.all([
  readFile(templateUrl, 'utf8'),
  readFile(portfolioReadmeUrl, 'utf8'),
])
const templateLines = template.split(/\r?\n/)

const requiredHeadings = [
  '# [Project Title]',
  '## Executive Summary',
  '### Business Problem',
  '### Headline Result',
  '### Recommendation',
  '## Business Problem',
  '## Methodology',
  '## Skills & Tools',
  '## Results',
  '## Business Recommendations',
  '## Next Steps',
  '## Limitations',
  '## Project Links',
]

let previousIndex = -1

for (const heading of requiredHeadings) {
  const headingIndex = templateLines.indexOf(heading, previousIndex + 1)
  assert.notEqual(headingIndex, -1, `Missing or out-of-order heading: ${heading}`)
  previousIndex = headingIndex
}

for (const technicalSection of [
  '## Data',
  '## Technical Implementation',
  '## Reproducibility',
  '## Repository Structure',
  '## Testing & Validation',
]) {
  assert.ok(templateLines.includes(technicalSection), `Missing technical section: ${technicalSection}`)
}

assert.match(template, /\[Live Project\]\(.+\) · \[Portfolio Case Study\]\(.+\)/)
assert.match(template, /Never invent results/i)
assert.match(template, /Avoid claiming that an association proves causation/i)
assert.match(
  portfolioReadme,
  /\[the project README template\]\(docs\/project-readme-template\.md\)/,
  'The portfolio README must link to the reusable template.',
)

console.log('README presentation standard validated.')
