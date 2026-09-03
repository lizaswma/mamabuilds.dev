// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Used to generate absolute URLs (sitemap, canonical links, RSS, etc).
  // We're serving from the mamabuilds.dev custom domain (via public/CNAME)
  // rather than the default username.github.io/repo-name path, so `base`
  // stays "/" — no repo-name prefix needed.
  site: 'https://mamabuilds.dev',
  // Keep old project URLs working after a rename. Astro emits a static
  // meta-refresh page for each entry, which is all GitHub Pages needs.
  redirects: {
    '/projects/little-names': '/projects/namesake',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
