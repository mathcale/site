module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('tailwind-bootstrap-grid')()],
  corePlugins: {
    container: false,
  },
};
