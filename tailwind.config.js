/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        main: "#ffffff",
        highlight: "#00ff00",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
