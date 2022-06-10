module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#1B2327",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
