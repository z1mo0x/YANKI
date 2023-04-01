/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      xl: { max: "1200px" },
      lg: { max: "993px" },
      md: { max: "768px" },
      sm: { max: "578px" }
    },

    extend: {},
  },
  plugins: [],
}
