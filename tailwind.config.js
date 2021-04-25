module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      '2xl': {'max': '2000px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1100px'},
      'md': {'max': '860px'},
      'md-semi': {'max': '768px'},
      'sm': {'max': '600px'},
      // '2xl': '2000px',
      // 'xl': '1279px',
      // 'lg': '1100px',
      // 'md': '860px',
      // 'md-semi': '768px',
      // 'sm': '660px',
    },
    extend: {
      fontSize: {
        '13xl': '13rem'
      },
      gridTemplateColumns:{
        'knowledge': 'minmax(0,1fr) minmax(0,1fr)',
        'knowledge-frame': 'minmax(120px,180px) minmax(0,1fr) minmax(24px,24px)',
        'knowledge-frame-sm': 'minmax(120px,120px) minmax(0,1fr) minmax(24px,24px)',
        'world-lg': 'minmax(0,1fr) minmax(420px,1fr)',
        'knowledge-lg': 'minmax(0,1fr)'
      },
      gridTemplateRows:{
        'world-row-lg': 'minmax(0,1fr)'
      },
      minWidth: {
        '600': '600px',
        'auto': 'auto'
      },
      flexGrow: {
       DEFAULT: 2,
       '1': 1,
       '3': 3
      },
      minHeight: {
        '38': '38px',
        '65': '65px',
        '91': '91px',
        '300': '300px',
        '700': '700px',
        '800': '800px',
        'auto': 'auto'
      },
      maxWidth: {
        '200': '200px',
        '350': '350px',
        '150': '150px'
      },
      Height: {
        '400': '400px',
        '800': '800px',
      }
    },      
    fontFamily: {
        sans: ['db heavent', 'Roboto']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
