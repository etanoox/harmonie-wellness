import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://harmoniewellness.it',
  output: 'static',
  integrations: [mdx(), sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
