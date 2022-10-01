/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const Myclass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".my-rotate-x-180": {
      transform: "rotateX(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
    ".backface-visible": {
      "backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
    },
  });
});
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7463B1",
        secondary: "#F07167",
        normal: "#031926",
        green: "#F5FFFA",
        pink: "#FFF6F6",
        gray: "#D9D9D9",
        gray200: "#FAFAFA",
        F07167: "#F07167",
        overlay: "rgba(0,0,0,0.5)",
      },
      height: {
        banner: "40rem",
        "2px": "2px",
        cardImgW: "240px",
        cardImgH: "292px",
      },
      spacing: {
        "35px": "35px",
        "60px": "60px",
        "64px": "64px",
        "96px": "96px",
        "120px": "120px",
        "460px": "460px",
        "650px": "650px",
        "700px": "700px",
        "1040px": "1040px",
      },
      inset: {
        nev60px: "-60px",
        nev50pc: "-50%",
      },
      lineHeight: {
        "extra-loose": "2.5",
        "33px": "33px",
      },
      fontFamily: {
        body: ["Roboto", "Helvetica Neue"],
      },
      dropShadow: {
        member: "0px 0px 16px rgba(0, 0, 0, 0.15)",
      },
    },
    // borderRadius: {
    //   "fullpt": "100px",
    // },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
    },
  },
  plugins: [Myclass],
};
