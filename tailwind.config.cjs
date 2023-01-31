/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
    colors: {
      darkPurple: "#2D033B",
      lightPurple: "#96819D",
      white: "#EEEEEE",
      washedYellow: "#FFE5B4",
      darkGrey: "#3A3A3A",
      lightGreen: "#16a34a",
      darkGreen: "#14532d",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    extend: {
      dropShadow: {
        '5': '5px 5px 4px rgba(0, 0, 0, 0.25)',
        '4': '4px 4px 2px rgba(0, 0, 0, 0.25)',
      },
      width: {
        '23/24': '95.8333333%',
      },
      blur: {
        '4xl': '100px',
      }
    }
  },
  plugins: [],
}