/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rose': '#BE123C',
        'gray-header' : '#767E94',
        'gray-paragraph' : '#C3C8D4',
      },
    },
  },
  plugins: [],
}