/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.js"],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      jakarta: ["Plus Jakarta Sans", "sans-serif"]
    },
    extend: {
      colors: {
        primary: "#F8991F",
        secondary: "#008748",
        bgLine: "#f1eeff",
        heading: "#0F0F0F",
        textGray: "#969BA0",
      },
      boxShadow: {
        sm: "0px 1px 3px 0px #03004717",
        DEFAULT: "0px 0px 10px 0px rgba(0, 0, 0, 0.06)",
        lg: "0px 8px 45px 0px #03004717",
      },
    },
  },
  plugins: [require("tailwindcss-rtl"), require("tailwind-scrollbar-hide")],
  darkMode: ["class", '[data-theme="dark"]'],
};
