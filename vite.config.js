import { defineConfig } from 'vite';  // Make sure this import exists
import react from '@vitejs/plugin-react';

// Add this if you're using ES modules
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  base: '/Telecom_Project/',
  plugins: [react()],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    assetsDir: 'assets',
  },
  server: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')  // Optional but helpful
    }
  }
});