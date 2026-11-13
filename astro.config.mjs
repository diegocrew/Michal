import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://diegocrew.github.io',
  base: '/Michal/',
  vite: {
    plugins: [tailwindcss()],
  },
});
