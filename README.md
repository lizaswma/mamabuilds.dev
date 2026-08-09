# mamabuilds.dev

Source for [mamabuilds.dev](https://mamabuilds.dev) — built with [Astro](https://astro.build)
+ [Tailwind CSS](https://tailwindcss.com), deployed to GitHub Pages.

## Project structure

```text
/
├── public/
│   └── CNAME                  ← keep this = mamabuilds.dev (custom domain)
├── src/
│   ├── content/
│   │   ├── projects/          ← one .md file per project
│   │   └── blog/               ← one .md file per post
│   ├── content.config.ts      ← frontmatter schema for both collections
│   ├── components/            ← Header, Footer, ProjectCard, PostCard
│   ├── layouts/BaseLayout.astro
│   └── pages/
│       ├── index.astro        ← home page
│       ├── projects/          ← /projects list + /projects/[slug] detail
│       └── blog/               ← /blog list + /blog/[slug] post
└── .github/workflows/deploy.yml   ← auto-deploys on push to main
```

## Local development

```sh
npm install
npm run dev       # http://localhost:4321
```

```sh
npm run build     # production build to ./dist
npm run preview   # preview that build locally
```

## Adding a new project

Create a new file in `src/content/projects/`, e.g. `src/content/projects/my-new-app.md`:

```md
---
title: "My New App"
category: "Apps for Product Managers"
summary: "One or two sentences describing what it does."
status: "Beta"
accessLabel: "Try it out"
accessUrl: "https://example.com"
icon: "📊"
order: 1
---

Full write-up goes here in Markdown — as long as you want.
```

- `category` is free text. Type a category that doesn't exist yet (e.g. a brand-new one
  beyond "Apps for Product Managers" / "Apps for Families & Kids") and it automatically gets
  its own section on `/projects` — no other file needs to change. New categories are sorted
  alphabetically after the pinned ones (see below).
- `order` controls sort position *within* a category (lower = first). Optional — defaults to 100.
- `accessLabel` / `accessUrl` are optional — omit both if there's nowhere to send people yet.
- Set `draft: true` to hide a project without deleting the file.
- `icon` is an emoji shown on the card — no image assets required. If you'd rather use real
  artwork (like an app icon), drop the image in `public/images/<project-slug>/` and set
  `iconImage` to its path (e.g. `/images/my-new-app/icon.jpg`) — it replaces the emoji on both
  the card and the detail page, and also gets shown larger on the detail page itself.
- `favicon` is optional and only affects that project's own detail page — set it to an image
  path to show custom art in the browser tab while someone's reading about that project.

See [`src/content/projects/tiny-tongues.md`](src/content/projects/tiny-tongues.md) for a real
example using `iconImage` and `favicon`.

**Category order:** which category section appears first on `/projects` is controlled by the
`CATEGORY_ORDER` list at the top of
[`src/pages/projects/index.astro`](src/pages/projects/index.astro). Reorder that array to
change it, or add a new category name to it to pin where a new section shows up.

## Adding a new blog post

Create a new file in `src/content/blog/`, e.g. `src/content/blog/my-new-post.md`:

```md
---
title: "My New Post"
description: "One-sentence summary shown in the list view."
pubDate: 2026-08-15
tags: ["ai-building"]
---

Full post content in Markdown.
```

Posts are sorted newest-first automatically by `pubDate`. Set `draft: true` to hide a post
without deleting it.

## Deploying (GitHub Pages)

This repo auto-deploys via `.github/workflows/deploy.yml` on every push to `main`.

**One-time setup:**

1. Push this repo to GitHub (see below).
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source** → select
   **GitHub Actions**.
3. In **Settings → Pages → Custom domain**, enter `mamabuilds.dev` and save (this matches the
   `public/CNAME` file already in the repo, so GitHub keeps serving the custom domain on every
   deploy).
4. At your domain registrar, point `mamabuilds.dev` at GitHub Pages:
   - Add four **A** records for `@` pointing to:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (Optional) Add a **CNAME** record for `www` pointing to `<your-github-username>.github.io`
     if you also want `www.mamabuilds.dev` to work.
5. Back in **Settings → Pages**, check **Enforce HTTPS** once the certificate is issued
   (can take up to a few hours after DNS propagates).

**First push:**

```sh
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

Every subsequent `git push` to `main` — including just adding a new project or blog post file
— triggers a rebuild and redeploy automatically.

## Before you launch

- Replace the placeholder social links in [`src/components/Footer.astro`](src/components/Footer.astro)
  (email, LinkedIn, GitHub, Instagram) with your real ones.
- Replace the placeholder `accessUrl` in
  [`src/content/projects/tiny-tongues.md`](src/content/projects/tiny-tongues.md)
  with your real TestFlight link.
- Swap the draft bio copy on the home page ([`src/pages/index.astro`](src/pages/index.astro))
  for your own voice whenever you're ready — it's just a starting point.
