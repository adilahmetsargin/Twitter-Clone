module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue:{
          baseBlue: "hsl(203, 89%, 53%)",
          darkBlue: "hsl(203, 89%, 25%)",
          lightBlue: "hsl(203, 89%, 85%)"
        },
        gray: {
          darkGray: "#657786",
          lightGray: "#AAB8C2",
          extraLightGray: "#e1e8ed",
          lightestGray: "#f5f8fa"
        },
        black: "#14171A"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
