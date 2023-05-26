/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F58E7E",
      },
      fontFamily: {
        forum: ["Forum", "cursive"],
        barlow: ["Barlow", "sans-serif"],
      },
    },
  },
  plugins: [],
};
