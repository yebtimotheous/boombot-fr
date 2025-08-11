import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  publicDir: 'assets',
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/performance-metrics': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      },
      '/tokens-bought': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      },
      '/setting': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      },
      '/profit-factor': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  preview: {
    port: 5174,
    open: true
  }
});