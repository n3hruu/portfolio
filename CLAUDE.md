@AGENTS.md

# Portfolio — Nehru Madan

Personal portfolio site covering Film, Photography, and miscellaneous projects. Built and maintained by Nehru Madan (GitHub: `n3hruu`).

## Stack & deployment
- Next.js 16 + React 19 + Tailwind v4, TypeScript, App Router.
- Static export (`output: 'export'`) deployed to GitHub Pages.
- Production: https://n3hruu.github.io/portfolio/ (until custom domain is configured)
- Repo: https://github.com/n3hruu/portfolio
- Auto-deploys on push to `main` via `.github/workflows/deploy.yml`.

## Critical constraints — do not break these
- **No server features.** No API routes, no Server Actions, no `next/image` optimization. Anything that needs a Node runtime at request time is unsupported.
- **Plain `<img>` tags** are used throughout instead of `next/image` (`images.unoptimized: true`). Resize source images to ~2400px wide before committing.
- **Subpath deploy.** The site serves at `/portfolio/`, not the root, until a custom domain lands. `lib/asset.ts` exposes an `asset(path)` helper that prefixes `NEXT_PUBLIC_BASE_PATH`. **Always wrap image `src` values with `asset()`** in components; the data files in `lib/*.ts` store unprefixed paths like `/images/...`.
- **`public/.nojekyll`** must stay in place — without it, GitHub Pages strips the `_next/` directory and the whole site 404s.
- **`public/CNAME`** is not in the repo yet. When a custom domain is configured: add the file, and remove the `NEXT_PUBLIC_BASE_PATH` env block from `.github/workflows/deploy.yml`.

## Where content lives
| Section | Data file | Images folder |
|---|---|---|
| Film | `lib/films.ts` (`FilmProject[]`) | `public/images/film/<slug>/` |
| Photography | `lib/photos.ts` (`PhotoSeries[]`) | `public/images/photography/<slug>/` |
| Projects | `lib/projects.ts` (`MiscProject[]`) | `public/images/projects/<slug>/` |
| About / contact | `app/about/page.tsx` | n/a |
| Site title / metadata | `app/layout.tsx` | n/a |

Placeholder images live in `public/images/placeholders/` — delete them once real content replaces them.

## Layout & styling
- Dark/cinematic palette defined in `app/globals.css` via Tailwind v4's `@theme` block. Custom CSS variables: `--color-bg`, `--color-surface`, `--color-fg`, `--color-muted`, `--color-accent`, `--color-border`.
- Fonts loaded with `next/font/google` in `app/layout.tsx`: **Cormorant Garamond** (serif, headings) and **Inter** (sans, body).
- Accent: warm amber `#c9a36b` — used for hover states, hero italics, selection highlight.
- Forced dark only; no light-mode toggle.

## Common commands
```
npm install                                  # one-time after clone, or after deleting node_modules
npm run dev                                  # local preview at http://localhost:3000
npm run build                                # produces out/
NEXT_PUBLIC_BASE_PATH=/portfolio npm run build  # build with prod-like subpath URLs
npx serve out                                # serve the static export at http://localhost:3000
```

## Adding new content
1. Drop images into `public/images/<section>/<slug>/`.
2. Append a new entry to the relevant `lib/*.ts` file (paths written as `/images/<section>/<slug>/<file>` — no basePath prefix).
3. `git add -A && git commit -m "Add <slug>" && git push` — site redeploys in ~30s.

Dynamic routes (`app/<section>/[slug]/page.tsx`) pre-render one HTML file per entry at build time via `generateStaticParams`. Adding entries does not require touching route files.

## Indexing / SEO
The root metadata in `app/layout.tsx` currently sets `robots: { index: false, follow: false }` to keep the site hidden from search engines while content is still placeholder-heavy. Remove that field when ready to be indexed.

## Things future Claude might be tempted to do — don't
- Don't switch `<img>` to `next/image` — the optimizer is off, and `next/image` is heavier without buying anything here.
- Don't commit large source images without resizing. ~2400px max width, web-optimized JPEG/WebP.
- Don't add server-only features (API routes, Server Actions, middleware that needs runtime, etc.) — they silently break the static export.
- Don't remove `public/.nojekyll`.
- Don't hardcode `/portfolio/` into source paths — use `asset()` so the custom-domain switch is a one-line change.
