# Thando F. Dlamini — Project Gallery

A minimal, project-first portfolio for analytics and applied machine-learning work. Each case study connects the business question, methodology, evidence, recommendations, and technical implementation without overstating what the data can support.

## Live portfolio

[thandofana.github.io](https://thandofana.github.io)

## Portfolio approach

The home page is a focused project gallery. Each project opens as a dedicated case study at `/#/project/[project-slug]`, designed for quick recruiter scanning while preserving the reasoning behind the work.

The portfolio and its project repositories have complementary roles:

- The portfolio emphasizes the problem, strongest findings, visuals, and business value.
- Each GitHub README explains methodology, implementation, reproducibility, setup, validation, and code navigation.

## Featured case studies

**FinAccess Eswatini** is an explainable machine-learning application for analysing financial inclusion and mobile-money adoption in Eswatini.

- [Live application](https://finaccess-eswatini.vercel.app)
- [Portfolio case study](https://thandofana.github.io/#/project/finaccess-eswatini)

**Eswatini Banking Sector Analytics** is a PostgreSQL analytics and reporting project built from official Central Bank statistical releases.

- [Project repository](https://github.com/thandofana/eswatini-banking-sql-analysis)
- [Portfolio case study](https://thandofana.github.io/#/project/eswatini-banking-sql-analysis)

## Technology stack

- React 19 and Vite 8
- JavaScript, semantic HTML, and responsive CSS
- Hash-based client-side routing for GitHub Pages compatibility
- GitHub Actions and GitHub Pages
- Oxlint, rendered React QA, and README-standard validation

## Local development

```bash
npm install
npm run dev
```

Production and quality checks:

```bash
npm run qa:readme
npm run qa:render
npm run lint
npm run build
npm run preview
```

With the production preview running on port `4173`, responsive browser QA is available through:

```bash
npm run qa:browser
```

## Project data

`src/data/projects.js` is the source of truth for project summaries, case-study sections, links, and verified evidence. Add a project only when it is complete and demonstrable; do not add placeholder or unverified work.

## Reusable README standard

Use [the project README template](docs/project-readme-template.md) when documenting a project repository. It preserves the same core story as the portfolio case study, then adds the technical detail needed to understand, reproduce, and navigate the work.

## Repository structure

```text
public/                       # Favicon, social card, robots, and sitemap
scripts/                      # Rendered-page and README validation
src/
├── assets/finaccess/         # Verified FinAccess media
├── components/               # Shared site components
│   └── projects/             # Reusable gallery and case-study components
├── data/                     # Profile and verified project facts
├── pages/                    # Gallery, case study, and not-found views
├── routing/                  # Lightweight hash-route handling
├── styles/                   # Tokens, reset, and responsive global styles
├── utils/                    # Project presentation helpers
├── App.jsx
└── main.jsx
```

## Deployment

The workflow in `.github/workflows/deploy.yml` validates and builds the portfolio before deploying the `dist` artifact to the public GitHub Pages site. A push to `main` triggers deployment automatically.
