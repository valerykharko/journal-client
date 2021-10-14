module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        search: "url('/images/search-icon.png')",
      },
      backgroundSize: {
        16: "1.3rem",
      },
      backgroundPosition: {
        "left-center": "left 1rem center ",
      },
      translate: {
        140: "-160%",
      },
      padding: {
        25: "10% 27% 0 27%",
      },
      flex: {
        50: "0 1 50%",
        49: "0 1 49%",
        59: "0 1 59%",
        39: "0 1 39%",
        100: "0 1 100%",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
