const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "hcolor-dark": "#0C1239",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        roboto: ["var(--font-roboto)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroservice: "url('/images/heroservice.svg')",
        bgservice: "url('/images/bgservice.svg')",
      },
      screens: {
        xs: "576px",
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
};
