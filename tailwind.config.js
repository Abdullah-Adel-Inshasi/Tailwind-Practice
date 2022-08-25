/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
    },
    fontFamily: {
      nunito: ["nunito", "sans-serif"],
    },
  },
  plugins: [],
};
