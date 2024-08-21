module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        psauYellow: "#F56603",
        psauGreen: "#2E1A46",
        psauGreenLight: "#4A2570"
      },
      fontFamily: { Poppins: ["Poppins", "sans-serif"] }
    }
  },
  plugins: []
};
