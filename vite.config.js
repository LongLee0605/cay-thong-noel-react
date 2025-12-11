import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true,
    },
    target: 'es2020',
    minify: 'esbuild',
  },
  optimizeDeps: {
    exclude: ['@mediapipe/hands', '@mediapipe/camera_utils'],
    esbuildOptions: {
      target: 'es2020',
    },
  },
  resolve: {
    preserveSymlinks: true,
  },
});


