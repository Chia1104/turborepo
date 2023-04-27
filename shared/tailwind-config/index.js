const animation = require("./animation");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#9200ff",
        secondary: "#007aff",
        success: "#4caf50",
        info: "#2196f3",
        warning: "#ff9800",
        danger: "#f44336",
        light: "#fafafa",
        dark: "#212121",
        white: "#ffffff",
        black: "#000000",
        code: "#24292e",
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        ".ctw-container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        },
      });
    }),
  ],
  darkMode: "class",
};

module.exports.animation = animation;
