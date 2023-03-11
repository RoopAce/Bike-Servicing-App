/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "577px",
      md: "769px",
      lg: "993px",
      xl: "1201px",
      xxl: "1401px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        "light-blue": "#EFF4F8",
      },
    },
  },
  plugins: [],
};
