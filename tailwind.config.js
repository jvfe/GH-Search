module.exports = {
  enabled: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        darkgrey: '#232324',
        cardblack: '#201F1F',
        brightpurple: '#8752CC',
        icongrey: '#B2B2B2',
      },
      animation: {
        'slide-down': 'slide-down .8s ease forwards',
        'slide-up': 'slide-up .8s ease forwards',
      },
      keyframes: {
        'slide-down': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, -3em, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translate3d(0, 3em, 0)',
          },
          '100%': {
            opacity: '1',
            transform: 'translate3d(0, 0, 0)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
