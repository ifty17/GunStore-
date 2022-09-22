/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f7ffa8",

          secondary: "#ffcceb",

          accent: "#27f9dd",

          neutral: "#2D3239",

          "base-100": "#FCFCFD",

          info: "#8DA8F2",

          success: "#32CDB3",

          warning: "#EEC55D",

          error: "#ED6E87",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
