/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        "real-screen": "calc(var(--vh) * 100)",
      },
      fontSize: {
        "3xs": ["10px", "10px"],
        "2xs": ["8px", "12px"],
      },
      fontFamily: {
        UhBeeSeHyunBold: ["UhBeeSeHyunBold"],
        SCoreDream4: ["SCoreDream4"],
        GodoMaumR: ["GodoMaumR"],
      },
    },
    minHeight: {
      "real-screen": "calc(var(--vh) * 100)",
    },
  },
  plugins: [],
};
