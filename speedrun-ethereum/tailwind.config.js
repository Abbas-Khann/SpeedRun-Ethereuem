/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8C02F9C2",
          secondary: "#1C69FFC2",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#030709",
          "base-content": "#ffffff",
        },
      },
    ],
  },
};
