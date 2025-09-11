/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          light: "#121212",
          dark: "#FFFFFF",
        },
        secondary: {
          dark: "#242424",
        },
        accent: {
          dark: "#858585",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
