module.exports = {
  // remove unused styles in the following files
  // since tailwindcss generates a lot of utility classes and we probably won't use all of them
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
