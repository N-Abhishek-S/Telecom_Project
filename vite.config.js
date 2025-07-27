import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Tesla_CarshworoomWeb/', // ✅ Important for GitHub Pages
  plugins: [react()]
});
