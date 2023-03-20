/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": {
            visibility: "hidden",
            opacity: 0,
            transform: "translateY(8px)",
          },
          "100%": {
            visibility: "visible",
            opacity: 1,
            transform: "translateY(0px)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
