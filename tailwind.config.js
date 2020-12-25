module.exports = {
  purge: {
    enabled: true,
    content: ['./views/*.html','./assets/libs/scripts/app.js'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
