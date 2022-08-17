module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,

  theme: {
    extend: {
      colors: {
        pink: {
          50: "#fdf4f3",
          100: "#fbe6e5",
          200: "#fad7d5",
          300: "#f4b1ad",
          400: "#ec837d",
          500: "#df5c54",
          600: "#cb3f37",
          700: "#ab312a",
          800: "#8e2c26",
          900: "#762a26",
        },
        gray: {
          50: "#f8f9f8",
          100: "#eeeff2",
          200: "#dbdbe4",
          300: "#b7b8c6",
          400: "#8d91a2",
          500: "#716f81",
          600: "#5c5464",
          700: "#47404c",
          800: "#312c36",
          900: "#1e1c22",
        },
        blue: {
          50: "#f5f8f7",
          100: "#dfe8e7",
          200: "#bfd0d0",
          300: "#97b1b1",
          400: "#769293",
          500: "#577475",
          600: "#445c5d",
          700: "#394b4c",
          800: "#313c3e",
          900: "#2b3536",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
}
