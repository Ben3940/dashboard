import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  build: {
    outDir: './server/dist',
    target: 'es2020',
    emptyOutDir: true,
  },
  plugins: [react()],
});
