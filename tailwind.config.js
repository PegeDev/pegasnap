/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-Poppins)", fontFamily.sans],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: [
      {
        myTheme: {
          Default: "#000000",
          primary: "#11999E",
          secondary: "#06283D",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
};
