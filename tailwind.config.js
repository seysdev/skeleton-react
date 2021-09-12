module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ffa500',
        secondary: '#03a9f4',
        white: '#fff',
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
