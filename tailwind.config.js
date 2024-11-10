module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this to your file structure
  ],
  theme: {
    extend: {
      colors: {
        p: {
          50: "#C9B9D4",
          100: "#BAA5C8",
          200: "#9B7DAE",
          300: "#7C5597",
          400: "#5D2D7E",
          500: "#3E0566", // Base purple
          600: "#340456",
          700: "#2A0345",
          800: "#200335",
          900: "#160225",
        },
        w: {
          50: "#FFFFFF",
          600: "#d6d6d6",
          700: "#adadad",
          800: "#858585",
          900: "#5c5c5c",
        },
        b: {
          50: "#b8b8b8",
          100: "#a3a3a3",
          200: "#7a7a7a",
          300: "#525252",
          400: "#292929",
          900: "#000000",
        },
        br: { 50: "#9F773C", 100: "#9E9393" },
      },
    },
  },
  plugins: [require("daisyui")],
};
