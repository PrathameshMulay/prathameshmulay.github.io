# AGENTS.md

## What this is

A static single-page portfolio site for Prathamesh Mulay, built with plain React + Vite (no
router, no SSR framework). Deployed to Netlify as a static site (`netlify.toml` builds to `dist/`
with an SPA fallback redirect, though the app has no client-side routing today — all navigation is
same-page anchor scrolling).

## Architecture

- `index.html` / `src/main.jsx` — standard Vite React entry point.
- `src/App.jsx` — composes the page from section components in order: Navbar, Hero, About,
  Experience, Projects, Skills, Education, Contact, Footer.
- `src/components/*.jsx` — one component per section. Each section component has a co-located
  CSS file (e.g. `Hero.jsx` + `Hero.css`) imported directly into the component. There is no
  CSS-in-JS or utility framework — just plain CSS with custom properties defined in `src/index.css`.
- `src/data/*.js` — all editable content (experience history, project list + case studies, skills
  matrix, education, "how I approach problems" cards, and placeholder contact links). Components
  import from here rather than hardcoding copy, so content updates never require touching JSX.
- `src/components/ProjectModal.jsx` — case-study detail view opened when a project card is
  clicked. Each project in `src/data/projects.js` carries a `caseStudy` object consumed by the
  modal (problem, solution, architecture, technicalApproach, governance, results, technology).

## Conventions

- Design tokens (colors, spacing, radii, shadows, transitions) are CSS custom properties in
  `src/index.css` under `:root`. Reuse these instead of hardcoding new values.
- Section components are wrapped in `<section id="...">` with matching anchors in
  `Navbar.jsx`'s `NAV_ITEMS` — keep the two in sync if sections are renamed or reordered.
- Content is intentionally conservative: no fabricated metrics, employers, or results were added
  beyond what was explicitly provided. When adding new projects/experience, do not invent
  numbers — leave them out if not supplied.
- Placeholder links (`github`, `linkedin`, `email`, `resume`) live in `src/data/skills.js` as
  `links`, each marked with a `// TODO` comment. Replace with real URLs; do not remove the
  placeholders silently.

## Local development

`npm run dev` runs Vite on port 3000. `npm run build` produces the static `dist/` bundle that
Netlify serves.
