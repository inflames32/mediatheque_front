// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        md: "480px",
        lg: "992px",

        // => @media (min-width: 992px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
