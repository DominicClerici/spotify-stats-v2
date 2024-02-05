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
      screens: {
        xs: "350px",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-in-out",
        "bg-in": "fadeIn 0.7s ease-in-out 0.4s backwards",
        "delayed-fade-in": "fadeIn 0.5s ease-in-out 1.5s backwards",
      },
      colors: {
        background: "#141414",
        main: "#ffffff",
        highlight: "#1EFC1E",
        darkHighlight: "#149911",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
    },
  },
}
