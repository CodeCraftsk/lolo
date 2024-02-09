module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        pink: { 900: "#671e1e", "900_01": "#843b42" },
        gray: { 100: "#f2f2f2", 500: "#999393" },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
      },
      fontFamily: {
        saira: "Saira",
        postnobillscolomboextrabold: "Post No Bills Colombo ExtraBold",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
