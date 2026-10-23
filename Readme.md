# Setup Guide: At Campfire (Hack the Web)

At Campfire is a podcast and mystery-stories site built with React, Vite and Tailwind CSS. This guide gets the frontend running on your machine.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or newer (check with `node -v`)
- [Git](https://git-scm.com/)
- A GitHub account

## 1. Fork and clone

1. Fork the repo: https://github.com/programming-club-knit/atcampfire
2. Clone your fork:

```bash
git clone https://github.com/<your-username>/atcampfire.git
cd atcampfire/frontend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Run the dev server

```bash
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## 4. Useful commands

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint (must pass with zero warnings) |

## Project layout

```
frontend/
  src/
    App.jsx            routes
    components/        Navbar, Footer, CommentSection, ...
    screens/           pages (Home, Podcast, Login, ...)
    screens/admin/     admin pages
    screens/auth/      signup
    widgets/           small reusable cards
  public/images/       static images
```

## Backend note

Login and signup call an API at `http://localhost:3000/auth/...`. The backend is not part of this repo, so those requests will fail unless you run a compatible server yourself. You can still work on most issues without it.

## 5. Pick an issue and work on it

1. Browse the open issues: https://github.com/programming-club-knit/atcampfire/issues
2. Comment on the issue you want and wait to be assigned.
3. Create a branch:

```bash
git checkout -b fix/<issue-number>-short-description
```

4. Make your fix, then check it:

```bash
npm run lint
npm run build
```

5. Commit and push:

```bash
git add .
git commit -m "fix: short description (closes #<issue-number>)"
git push origin fix/<issue-number>-short-description
```

6. Open a pull request against `main` and mention the issue number. Add the `Review Ready` label if you can.

## Rules

- Fix the bug manually. Keep each PR focused on one issue.
- Do not reformat unrelated files.
- Explain in the PR description what was wrong and how you fixed it.
- Points are awarded per issue (see the `points-*` label) once the PR is merged.

## Troubleshooting

- **`npm install` fails:** delete `node_modules` and `package-lock.json`, then run it again.
- **Port 5173 in use:** Vite will pick the next free port, or run `npm run dev -- --port 3001`.
- **Blank page:** open the browser console (F12) and check for errors.
