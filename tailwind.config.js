module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00366E",
      },
      fontFamily: {
        open: ["Open Sans", "sans-serif"],
      },
      screens: {
        "1xl": "1400px",
      },
    },
  },
  plugins: [],
};
