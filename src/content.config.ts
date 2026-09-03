import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// --- Projects ---------------------------------------------------------
// To add a new project: drop a new .md file in src/content/projects/
// The `category` field is free text — a brand new category value
// automatically gets its own section on the /projects page. No other
// file needs to change.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: () => z.object({
    title: z.string(),
    category: z.string(),
    // One or two sentence summary shown on the project card.
    summary: z.string(),
    // Short status pill, e.g. "Beta", "Live", "In progress", "Coming soon".
    status: z.string().default('In progress'),
    // Call-to-action shown as a button, e.g. "Join the TestFlight beta".
    accessLabel: z.string().optional(),
    accessUrl: z.string().optional(),
    // Optional emoji shown on the card (keeps things simple — no image
    // assets required). Ignored if `iconImage` is set.
    icon: z.string().default('✨'),
    // Optional custom artwork, e.g. an app icon. Path to a file in public/,
    // e.g. "/images/my-project/icon.jpg". Takes priority over `icon` on both
    // the project card and its detail page.
    iconImage: z.string().optional(),
    // Optional per-project browser tab icon for this project's detail page
    // only. Path to a file in public/. Falls back to the site favicon if unset.
    favicon: z.string().optional(),
    // Set true for Android apps to show the "early Android access via the
    // Google Group" note on the project's detail page.
    androidEarlyAccess: z.boolean().default(false),
    // Beta distribution links. Set whichever apply; when any is present the
    // project page shows a "Join the beta" block with per-platform steps.
    // iOS is a direct TestFlight install; Android requires joining the Google
    // Group first (Play closed-testing rule), then the opt-in link.
    betaTestFlightUrl: z.string().optional(),
    betaAndroidGroupUrl: z.string().optional(),
    betaAndroidOptInUrl: z.string().optional(),
    // Lower numbers show first within a category. Ties fall back to title.
    order: z.number().default(100),
    // Date the project was added to the site. Drives the homepage's "Latest
    // projects" section (newest first, then `order`). The /projects page still
    // groups by category and sorts by `order`, so this is homepage-only.
    added: z.coerce.date().optional(),
    // Set true to hide a project without deleting the file.
    draft: z.boolean().default(false),
  }),
});

// --- Blog ---------------------------------------------------------
// To add a new post: drop a new .md file in src/content/blog/
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Optional slug of a related project (a filename in src/content/projects/
    // without the .md). When set, the post ends with a link to that project
    // page rather than repeating access details that may change.
    project: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, blog };
