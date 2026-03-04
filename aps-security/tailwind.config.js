
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: "#0CC8A8",
        critical: "#EF4444", // red
        high: "#F97316",     // orange
        medium: "#EAB308",   // yellow
        low: "#22C55E",      // green
        darkBg: "#0F0F0F",
        darkSurface: "#1A1A1A",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};


