/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      colors: {
        btn: "#1869F4",
        darktext: "#020916",
        secondary: "#151D29",
        graytext: "#768190 ",
        offwhite: "#FAFAFA",
      },
    },
  },
  plugins: [],
};
