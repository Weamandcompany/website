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
        wdark: "#0C1239",
        worange: "#E47B0E",
      },
      fontFamily: {
        nunito: ["var(--font-nunito)"],
        roboto: ["var(--font-roboto)"],
        poppins: ["var(--font-poppins)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        heroservice: "url('/images/heroservice.svg')",
        bgservice: "url('/images/bgservice.svg')",
        bgcontact: "url('/images/bgcontact.svg')",
        bgblue: "url('/images/bgblue.svg')",
        bgabout: "url('/images/About.svg')",
        bgblueframe: "url('/images/blueframe.svg')",
        bgtestimonials: "url('/images/Testimonials.svg')",
      },
      screens: {
        xs: "576px",
        ...defaultTheme.screens,
      },
      boxShadow: {
        air: "0px 0px 17.337308883666992px 0px rgba(0, 0, 0, 0.06)",
        light: "0px 16.85163116455078px 92.68397521972656px 0px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
