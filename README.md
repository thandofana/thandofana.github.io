# Thando F. Dlamini — Data Portfolio

A responsive data-analyst portfolio built with React and Vite. It presents verified professional background, demonstrated technical capabilities, and a recruiter-friendly featured case study focused on question, evidence, delivery, and responsible interpretation.

## Live site

[thandofana.github.io](https://thandofana.github.io)

## Featured project

**FinAccess Eswatini** is an explainable machine-learning application for analysing financial inclusion and mobile-money adoption in Eswatini.

- [Live application](https://finaccess-eswatini.vercel.app)
- [Source repository](https://github.com/thandofana/finaccess-eswatini)

## Technology stack

- React 19 and Vite 8
- JavaScript, semantic HTML, and responsive CSS
- GitHub Actions and GitHub Pages
- Oxlint and rendered React quality checks

## Local development

```bash
npm install
npm run dev
```

Production and quality checks:

```bash
npm run qa:render
npm run lint
npm run build
npm run preview
```

## Deployment

The workflow in `.github/workflows/deploy.yml` validates and builds the portfolio before deploying the `dist` artifact to GitHub Pages. A push to `main` triggers deployment automatically.

## Structure

```text
public/                  # Favicon, social card, robots, and sitemap
scripts/                 # Repeatable rendered-page QA
src/
├── assets/finaccess/    # Verified FinAccess media
├── components/          # Reusable portfolio and project components
├── data/                # Profile, background, skills, and project facts
├── pages/               # Page-level composition
├── styles/              # Tokens, reset, and responsive global styles
├── App.jsx
└── main.jsx
```

## Updating portfolio information

- Edit personal and contact details in `src/data/profile.js`.
- Edit education, experience, and certifications in `src/data/background.js`.
- Edit skill groups in `src/data/skills.js`.
- Edit project summaries and verified evidence in `src/data/projects.js`.

## Adding future projects

Add a verified project object to `src/data/projects.js` only after it is complete and demonstrable. Do not add placeholder or unverified projects.
