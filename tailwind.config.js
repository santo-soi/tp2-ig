/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/flyonui/dist/js/*.js",
    'index.html',
    'ultimo.html',
    'show.html',
    'camino/index.html',
    'contacto.html',
    'js/*.js'
  ],
  theme: {
    fontFamily: {
      gloria: ['Gloria Hallelujah'],
      moda: ['Bodoni Moda'],
      mm: ['Major Mono Display'],
      julius: ['Julius Sans One'],
      zilla: ['Zilla Slab']

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
      'bloquesMain': '25%',
      'fotos-galeria': '40rem'

    },
    height:{
      'galeria': '40rem',
      'fotos-galeria': '30rem'
    }


    },
  },
  plugins: [
    require("flyonui")
  ]
}



