const portada = document.querySelectorAll('img');
const burguer = document.querySelector('#burguer');
const desplegable = document.querySelector('#desplegable');

burguer.addEventListener('click', () =>{
    desplegable.classList.toggle('hidden');
    desplegable.classList.toggle('flex');
})

if (portada[0].src.includes('img/portada.jpg')) {
    cambiarImagenPortada(portada[0]);
}
 
function cambiarImagenPortada(imagen) { 
    if (window.matchMedia("(max-width: 768px)").matches) {
        // Cambia el src cuando es mobile
        imagen.src = "img/portada-mobile.jpg";
    } else {
        // Restablece el src cuando no es mobile
        imagen.src = "img/portada.jpg";
    }
}

