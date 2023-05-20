import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        /^single-spa/,
        /^single-spa-layout/
      ]
    }
  }
});
