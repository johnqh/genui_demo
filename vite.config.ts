/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import packageJson from './package.json';

export default defineConfig({
  define: {
    __APP_VERSION__: JSON.stringify(packageJson.version),
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./src/test/setup.ts'],
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    css: true,
    server: {
      deps: {
        inline: [/@sudobility\/genui/, /swiper/],
      },
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom', '@sudobility/components', '@sudobility/design'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 700,
  },
  server: {
    port: 5199,
  },
});
