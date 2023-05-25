/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        DateStamp: ["Date Stamp Alt"],
      },
      colors: {
        "bg-header":
          "linear-gradient(180deg, rgba(15, 9, 17, 0) 61.54%, #0F0911 100%), #000000",
      },
      backgroundImage: {
        "bg-outsource": "url('~/public/assets/our-project/bg.png')",
        "bg-notfound":
          "url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif')",
      },
    },
  },
  plugins: [],
};
