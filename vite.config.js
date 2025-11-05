import { defineConfig } from 'vite';

export default defineConfig({
  assetsInclude: ['**/*.tmpl.js'],
  optimizeDeps: {
    exclude: ['handlebars'],
  },
});

