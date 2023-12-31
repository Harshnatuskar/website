/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
module.exports = {
  content: ["./index.html","./src/**/*.{tsx,js}"],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{
        inter:['inter','serif'],
      }
    },
  },
  plugins: [],
}