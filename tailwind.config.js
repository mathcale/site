module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
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
