// Build-time social preview images: /og/default.png for the site, plus
// /og/blog/<post>.png and /og/projects/<project>.png for each page.
// BaseLayout points og:image at these; see src/lib/og-image.ts for the design.
import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { renderOgImage, type OgCard } from '../../lib/og-image';

export const getStaticPaths = (async () => {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const projects = await getCollection('projects', ({ data }) => !data.draft);
  const iconFor = (slug?: string) => projects.find((p) => p.id === slug)?.data.iconImage;

  const cards: { slug: string; card: OgCard }[] = [
    {
      slug: 'default',
      card: {
        eyebrow: 'Hello',
        title: "Hi, I'm Liza. I'm a PM who builds apps with AI.",
        subtitle: 'The apps I build for work and family, and what I learn building them.',
      },
    },
    ...posts.map((post) => ({
      slug: `blog/${post.id}`,
      card: {
        eyebrow: 'Blog',
        title: post.data.title,
        subtitle: post.data.description,
        icon: iconFor(post.data.project),
      },
    })),
    ...projects.map((project) => ({
      slug: `projects/${project.id}`,
      card: {
        eyebrow: 'Project',
        title: project.data.title,
        subtitle: project.data.summary,
        icon: project.data.iconImage,
      },
    })),
  ];

  return cards.map(({ slug, card }) => ({ params: { slug }, props: { card } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const png = await renderOgImage(props.card as OgCard);
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
