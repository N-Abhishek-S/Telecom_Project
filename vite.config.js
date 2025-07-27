export default defineConfig({
  base: '/Telecom_Project/',
  plugins: [react()],
  build: {
    outDir: 'build',
    emptyOutDir: true,
    // assetsInlineLimit: 0,  // Only needed if having asset issues
    assetsDir: 'assets',
    minify: 'terser'  // Better minification
  },
  server: {
    historyApiFallback: true,
    open: true  // Opens browser on dev
  }
  // optimizeDeps is usually not needed for images
})