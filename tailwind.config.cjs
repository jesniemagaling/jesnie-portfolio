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
          light: "#171717",
          dark: "#FFFFFF",
        },
        secondary: {
          dark: "#242424",
        },
        accent: {
          dark: "#858585",
        },
        typography: {
          light: "rgba(0,0,0,0.8)",
          dark: "rgba(255,255,255,0.5)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
