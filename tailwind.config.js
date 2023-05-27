/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-home": "url('../src/img/Home-page.png')",
        "bg-project": "url('../src/img/Project-Page.png')",
        "bg-about": "url('../src/img/About-Page.png')",
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
