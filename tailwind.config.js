/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    fontFamily: {
      gloria: ['Gloria Hallelujah'],
      moda: ['Bodoni Moda']

    },
    extend: { 
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

