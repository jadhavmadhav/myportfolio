/** @type {import('tailwindcss').Config} */

// customize here own styles
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
    },
    extend: {
      width: {
        'sm': '768px',
      }
    }
  },
  plugins: [],
};
