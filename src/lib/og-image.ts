// Renders the 1200×630 social preview cards (og:image) shown when a page is
// shared on LinkedIn, Slack, iMessage, etc. Used by src/pages/og/[...slug].png.ts
// at build time, so every page gets a branded card with no hand-made assets.
import { readFileSync } from 'node:fs';
import { extname, join } from 'node:path';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';

const font = (pkg: string, file: string) =>
  readFileSync(join(process.cwd(), 'node_modules/@fontsource', pkg, 'files', file));

const fonts = [
  { name: 'Fraunces', data: font('fraunces', 'fraunces-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
  { name: 'Inter', data: font('inter', 'inter-latin-500-normal.woff'), weight: 500 as const, style: 'normal' as const },
  { name: 'Inter', data: font('inter', 'inter-latin-600-normal.woff'), weight: 600 as const, style: 'normal' as const },
];

// Brand colors, mirrored from src/styles/global.css.
const color = {
  cream: '#fdf6ee',
  sand: '#f2e2cb',
  ink: '#2b2622',
  inkSoft: '#5a5148',
  terracotta: '#e2724a',
};

// Reads an image from public/ (e.g. a project's iconImage) as a data URI.
function publicImage(path: string): string {
  const mime = extname(path).toLowerCase() === '.png' ? 'image/png' : 'image/jpeg';
  const data = readFileSync(join(process.cwd(), 'public', path)).toString('base64');
  return `data:${mime};base64,${data}`;
}

export interface OgCard {
  // Small uppercase label above the title, e.g. "Blog" or "Project".
  eyebrow: string;
  title: string;
  subtitle?: string;
  // Optional square artwork (path in public/), e.g. a project's app icon.
  icon?: string;
}

// Satori takes a React-element-shaped tree; this keeps it readable without JSX.
const el = (type: string, style: Record<string, unknown>, children?: unknown) => ({
  type,
  props: { style, children },
});

export async function renderOgImage({ eyebrow, title, subtitle, icon }: OgCard): Promise<Buffer> {
  const titleSize = title.length > 60 ? 56 : title.length > 36 ? 64 : 76;

  // Satori doesn't shrink flex children to fit, so the text column gets an
  // explicit width: the full content width, minus the icon when there is one.
  const textWidth = icon ? 1040 - 220 - 56 : 1040;
  const text = el(
    'div',
    { display: 'flex', flexDirection: 'column', width: textWidth },
    [
      el('div', { fontFamily: 'Inter', fontWeight: 600, fontSize: 24, letterSpacing: 5, color: color.terracotta, textTransform: 'uppercase' }, `mamabuilds.dev · ${eyebrow}`),
      el('div', { fontFamily: 'Fraunces', fontWeight: 600, fontSize: titleSize, lineHeight: 1.12, color: color.ink, marginTop: 28 }, title),
      subtitle
        ? el('div', { fontFamily: 'Inter', fontWeight: 500, fontSize: 28, lineHeight: 1.4, color: color.inkSoft, marginTop: 28, display: 'block', lineClamp: 3 }, subtitle)
        : null,
    ].filter(Boolean),
  );

  const art = icon
    ? el('img', { width: 220, height: 220, borderRadius: 48, marginLeft: 56, boxShadow: '0 8px 24px rgba(43,38,34,0.15)' })
    : null;
  if (art) (art.props as Record<string, unknown>).src = publicImage(icon!);

  const footer = el(
    'div',
    { display: 'flex', alignItems: 'center', fontFamily: 'Inter', fontWeight: 500, fontSize: 24, color: color.inkSoft },
    [
      el('div', { width: 14, height: 14, borderRadius: 7, background: color.terracotta, marginRight: 14 }),
      'Liza Ma · a PM who builds apps with AI',
    ],
  );

  const body = el(
    'div',
    { display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: 1200, height: 614, padding: '72px 80px 56px' },
    [el('div', { display: 'flex', alignItems: 'center', width: 1040 }, [text, art].filter(Boolean)), footer],
  );
  const bar = el('div', { width: 1200, height: 16, background: color.terracotta });
  const root = el('div', { display: 'flex', flexDirection: 'column', width: 1200, height: 630, background: color.cream }, [body, bar]);

  const svg = await satori(root as never, { width: 1200, height: 630, fonts });
  return new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } }).render().asPng();
}
