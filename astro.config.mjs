import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";
//npm install tailwindcss @tailwindcss/vite
//npm install -D @tailwindcss/typography

import sitemap from '@astrojs/sitemap';
//npm run astro add sitemap



export default defineConfig({
  trailingSlash: 'always',

  build: {
    format: 'directory', // Ensures pages are built as /page/index.html
  },

  site: 'https://lavanderphotos.com',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false, // English at root (/about/), Spanish under /es/about/
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  server: {
    port: 3000,
    open: true, 
  },

  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-MX',
        },
      },
    }),
  ],
});