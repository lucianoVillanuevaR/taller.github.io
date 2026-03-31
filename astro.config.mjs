import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // Reemplaza con tu dominio de GitHub Pages
  site: 'https://rottwelliaz.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
});