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
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "delayed-fade-in": "fadeIn 0.5s ease-in 1.5s backwards",
      },
      colors: {
        background: "#040609",
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
};
