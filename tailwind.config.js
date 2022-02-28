module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        "screen-nonav": "calc(100vh - 88px)",
      },
      height: {
        128: "32rem",
      },
      colors: {
        primary: "#3bb795",
      },
    },
  },
  plugins: [],
};
