/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480',
      md: '768',
      lg: '1200'
    },
    extend: {},
  },
  plugins: [],
}

