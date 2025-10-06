import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';
import netlify from '@astrojs/netlify';

export default defineConfig({
  vite: { plugins: [tailwind()] },
  adapter: netlify(),
});