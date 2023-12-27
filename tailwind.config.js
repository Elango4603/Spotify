/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#1ed760",
      },
      iconSize: {
        width: "30px",
        height: "30px",
      },
    },
  },
  plugins: [],
};
