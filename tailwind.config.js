/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-home": "url('../src/img/MainFour.png')",
        "bg-project": "url('../src/img/ProjectFour.png')",
        "bg-about": "url('../src/img/AboutFour.png')",
        "bg-posts": "url(../src/img/PostsFour.png)",
      },
      colors: {
        textC: "#233742",
        backC: "#233742",
        someC: "#B4CDDD",
        navsC: "#F5F5F5",
      },
      rotate: {
        380: "360deg",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
