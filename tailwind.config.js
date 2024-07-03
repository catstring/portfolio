/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        '1/1': '100%',
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
