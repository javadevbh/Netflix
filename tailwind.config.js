/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        persian : ['Vazirmatn' , ...defaultTheme.fontFamily.sans],
      },
      colors : {
        primary : {
          light : "#eaedf6",
          red : "#c4252c",
          gray : "#839bb1",
          lighter : "#fafbff"
        }
      }
    },
  },
  plugins: [],
}

