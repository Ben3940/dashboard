import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'client',
  server: {
    open: 'index.html',
  },
  build: {
    outDir: 'public',
    rollupOptions: {
      input: 'index.html',
    },
    target: 'es2020',
    emptyOutDir: true,
  },
  plugins: [react()],
});
