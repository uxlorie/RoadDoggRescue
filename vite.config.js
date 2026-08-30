import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'js',
    emptyOutDir: false,
    rollupOptions: {
      input: resolve(__dirname, 'src/adopt-counter.jsx'),
      output: {
        entryFileNames: 'adopt-counter.js',
        format: 'es',
        inlineDynamicImports: true
      }
    }
  }
});
