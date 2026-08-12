# Thando F. Dlamini — Data Portfolio

A responsive React and Vite portfolio presenting Thando F. Dlamini's data-analysis and data-science work. The featured FinAccess Eswatini case study covers the full path from survey analysis and machine learning to explainability, API integration, testing, and deployment.

## Current status

Phases 1–8 are complete: the portfolio has been implemented, populated with verified project evidence, polished responsively, and validated for accessibility, metadata, production output, links, and rendered-page structure. GitHub Pages deployment is intentionally reserved for Phase 9.

## Local development

```bash
npm install
npm run dev
```

Create a production build with `npm run build` and inspect it with `npm run preview`.

Run the rendered-page quality checks with:

```bash
npm run qa:render
```

## Structure

```text
public/                  # Favicon, social card, robots, and sitemap
scripts/                 # Repeatable rendered-page QA
src/
├── assets/finaccess/    # Verified FinAccess media
├── components/          # Reusable interface and case-study components
├── data/                # Profile, skills, project, and case-study facts
├── pages/               # Page-level composition
├── styles/              # Tokens, reset, and responsive global styles
├── App.jsx
└── main.jsx
```

Personal links are maintained in `src/data/profile.js`. Project entries are maintained in `src/data/projects.js`.
