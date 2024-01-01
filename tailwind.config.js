/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popi: "Poppins",
        figtree: "Figtree",
      },
    },
    screens: {
      tablet: " 46.25em",
      // => @media (min-width: 740px) { ... }

      laptop: "64em", // pc
      // => @media (min-width: 1024px) { ... }

      desktop: "80em",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
