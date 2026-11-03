// src/content.config.ts
import { defineCollection, z } from 'astro:content';
// 1. Import the glob loader
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  // Entries live in locale folders: src/content/blog/en/<slug>.md, src/content/blog/es/<slug>.md
  // The generated id is "<locale>/<slug>", e.g. "en/first-post".
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/blog" }),

  // 3. Keep your strict schema exactly the same!
  schema: ({ image }) => z.object({
    title: z.string().max(60, "Keep titles under 60 chars"),
    description: z.string().max(160, "Keep descriptions under 160 chars"),
    image: image(),
    publishDate: z.coerce.date(), // Using z.coerce.date() ensures string dates parse beautifully
  }),
});

export const collections = {
  'blog': blogCollection,
};
