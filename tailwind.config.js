/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        persian: ["Vazirmatn", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          light: "#eaedf6",
          red: "#c4252c",
          gray: "#839bb1",
          lighter: "#fafbff",
          bg: "#FAFBFF",
          dark: "#2a2d32",
          darker: "#1b1c21",
          darkness: "#131418",
        },
      },
      maxWidth: {
        xxs: "18rem",
        "2xxs": "15rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xlg: "1180px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
