module.exports = {
  theme: {
    zIndex: {
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '50': 50,
      '75': 75,
      '100': 100,
      'auto': 'auto',
      '-10' : -10
    },
    extend: {
      spacing: {
        '50px': '50px'
      },
      inset: {
        '1/2': '50%'
      },
      colors: {
        blue: {
          dark: '#26486E',
          mid: '#81AEDD',
        },
        grey: {
          light: '#eee',
          standard: '#444444',
        },
        yellow: '#F8F4B3',
        brown: '#8A8963',
      },
      fontFamily: {
        sans: [
          'Roboto',
          'sans-serif'
        ],
      },
    },
  },
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        'slow': 'all 0.7s ease',
      }
    })
  ],
  variants: {
    margin: ['responsive', 'hover', 'focus'],
  },
  corePlugins: {
    container: false
  }
}