# Prathamesh Mulay — Portfolio

A personal portfolio website for Prathamesh Mulay, a Data Scientist working across Machine
Learning, AI, Analytics, and Product. Built as a fast, single-page React application.

## Tech stack

- React 18
- Vite
- Plain modern CSS (CSS custom properties, no framework)
- [lucide-react](https://lucide.dev/) for icons

## Project structure

```
src/
  components/   UI sections (Navbar, Hero, About, Experience, Projects, Skills, Education, Contact, Footer)
  data/         Content as plain JS objects (experience.js, projects.js, skills.js)
```

Content lives in `src/data/` so experience entries, projects, and skills can be updated without
touching component code. Placeholder links (GitHub, LinkedIn, email, resume) live in
`src/data/skills.js` under `links` — replace them with real URLs before publishing.

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Building for production

```bash
npm run build
```

Output is written to `dist/`, ready to deploy as a static site (this project deploys to Netlify).
