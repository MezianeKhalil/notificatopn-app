module.exports = {
  purge: {
    enabled: true,
    content: ['./views/*.html'],
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
