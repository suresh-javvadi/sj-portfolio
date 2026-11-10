# Suresh Javvadi — Portfolio

Single-page portfolio built with React 19, Vite, Tailwind CSS v4, Motion and Lucide.

```bash
npm install
npm run dev      # local development
npm run build    # production build → dist/
npm run preview  # serve the production build
```

## Editing content

All copy lives in `src/data/` — no component changes needed for content updates.

| File | Contents |
| --- | --- |
| `profile.js` | Name, contact links, hero/about copy, education |
| `experience.js` | Professional experience timeline |
| `skills.js` | Skill categories |
| `projects.js` | Featured projects (links are `null` when not public) |
| `github.js` | Repos hidden from the live GitHub feed |

- **Resume:** replace `public/resume.pdf`.
- **Project images:** projects currently use abstract CSS/SVG compositions (`src/components/common/ProjectVisual.jsx`), not screenshots. To add real screenshots, put optimized WebP files in `src/assets/` and render them in `src/sections/Projects.jsx`.
- **Theme colors:** CSS variables in `src/styles/index.css` (dark default, light override under `[data-theme="light"]`).

## Structure

```text
src/
  components/{layout,common,animations}/
  sections/     Hero, About, Experience, Skills, Projects, GithubFeed, Contact
  data/         content
  hooks/        useTheme, useActiveSection, useGithubRepos
  services/     GitHub API client (30-min localStorage cache)
  styles/       global CSS + theme tokens
```
