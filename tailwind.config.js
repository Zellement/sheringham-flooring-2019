module.exports = {
  theme: {
    extend: {
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
    }
  },
  plugins: [
    require('tailwindcss-transition')({
      standard: 'all .3s ease',
      transitions: {
        'slow': 'all 0.7s ease',
      }  
    })
  ],
  corePlugins: {
    container: false
  }
}