import tailwindcss from '@tailwindcss/postcss';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    tailwindcss()
  ]
}