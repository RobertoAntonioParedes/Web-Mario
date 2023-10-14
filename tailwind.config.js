module.exports = {
    content: [
      // Example content paths...
      './public/**/*.html',
    ],
    theme: {
      extend: {
         backgroundImage: theme=>({
            'wave-pattern': 'url(../img/wave-white.png)',
            'wave-pattern.dots': 'url(../img/wave-pattern-dots.png)'
        })
      }    
    },
    variants: {
        extend: {}
    },
    plugins: [],
  }