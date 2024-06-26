/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hoverColor: "#1F57E8E8",
        brightColor: "#fff",
        backgroundColor: "#1F57E8E8",
      },
    },
  },
  plugins: [],
};
