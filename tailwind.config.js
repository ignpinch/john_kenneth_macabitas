/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      animation: {
        "loop-scroll": "loop-scroll 40s linear infinite",
        "scroll-down": "scroll-down 2.50s linear infinite",
        "scroll-up": "scroll-up 2.5s linear infinite",
      },

      keyframes: {
        "loop-scroll": {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(-100%)",
          },
        },

        "scroll-down": {
          from: {
            opacity: "1",
            transform: "translateY(0)",
          },
          to: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
        },

        "scroll-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
        },
      },
    },

    fontFamily: {
      brice: ["Brice", "sans-serif"],
      briceRegular: ["Brice-Regular", "sans-serif"],
      briceThin: ["Brice-Thin", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
  },

  plugins: [],
};