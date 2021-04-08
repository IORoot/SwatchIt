const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fill: theme => ({
        'swatchit-blue': '#3B82F6',
        'swatchit-salmon': '#B76D68',
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
