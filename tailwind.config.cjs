/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#EEEEEE",
        accent: "#00ADB5",
        grey: "#393E46",
        darkGrey: "#222831",
        errorRed: "#cc0000",
      },
      backgroundImage: {
        loginBG: `url(./src/assets/images/loginBG1.jpg)`,
      },
      fontFamily: {
        sans: "Poppins",
      },
    },
    screens: {
      sm: "425px",
    },
  },
  plugins: [],
};
