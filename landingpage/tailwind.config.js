/** @type {import('tailwindcss').Config} */

// This is hypothetical and not standard for Tailwind CSS configurations
import plugin from "tailwindcss/plugin";

const myTransformsPlugin = plugin(({ addUtilities }) => {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

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
        lsaCard: "rgba(2, 9, 22, 0.32)",
        darktext: "#020916",
        secondary: "#151D29",
        graytext: "#768190",
        offwhite: "#FAFAFA",
      },
    },
  },
  plugins: [myTransformsPlugin],
};
