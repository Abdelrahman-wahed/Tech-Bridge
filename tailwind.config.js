/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },

    extend: {
      animation: {
        bounce: "bounce 0.5s infinite",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: " translateY(-100%)",
            opacity: "1",
            "animation-timing-function": " cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: " translateY(0)",
            opacity: ".5",

            "animation-timing-function": "  cubic-bezier(0, 0, 0.2, 1)",
          },
        },
      },
      fontFamily: {
        inter: "Inter",
      },
      colors: {
        mainWhite: "#F5F7FA",
        mainGrayLight: "#717171",
        mainGrayDark: "#4D4D4D",
        mainBlack: "#18191F",
        mainGreen: "#4CAF4F",
      },
      screens: {
        verySm: { min: "0px", max: "400px" },
        sm: { min: "0px", max: "767px" },
      },
    },
  },
  plugins: [],
};
