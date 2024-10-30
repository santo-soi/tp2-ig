/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'index.html',
    'js/*.js'
  ],
  theme: {
    fontFamily: {
      gloria: ['Gloria Hallelujah'],
      moda: ['Bodoni Moda']

    },
    extend: { 
       backgroundImage: {
         portadaMobile: "url('../img/portada-mobile.jpg')",
         portada: "url('../img/portada.jpg')"
      },
    colors: {
      rojoPelado : '#DB2323',
      rojoFondo :'#9f120d'
    },
    width: {
      'bloquesMain': '25%'
    }

    },
  },
  plugins: [],
}

