const portada = document.querySelectorAll('img');
const burguer = document.querySelector('#burguer');
const desplegable = document.querySelector('#desplegable');
const vidCuandoCorre = document.querySelector('#img-video');
const verMas = document.querySelector('#mostrarmas')

burguer.addEventListener('click', () =>{
    desplegable.classList.toggle('hidden');
    desplegable.classList.toggle('flex');
})

if (portada[0].src.includes('img/portada.jpg')) {
    cambiarImagenPortada(portada[0]);
}

if (vidCuandoCorre != null){
    vidCuandoCorre.addEventListener("click", () => {
        // Cambia el contenido del div por el iframe de YouTube
        this.innerHTML += '<h3 class="text-rojoPelado">Vas a ser redirigido a youtube para ver el video...</h3>'
        setTimeout(() => window.location = 'https://www.youtube.com/watch?v=2xE8dzUc0hM', 1000); 
    });
}

if (verMas != null){
    const volverAocultar = document.querySelector('#mostrarmenos');
    const oculto = document.querySelector('#oculto');
    verMas.addEventListener('click', () =>{
        oculto.classList.toggle('hidden');
        volverAocultar.classList.toggle('hidden');
        verMas.classList.toggle('hidden');
    })
    volverAocultar.addEventListener('click', () =>{
        oculto.classList.toggle('hidden');
        volverAocultar.classList.toggle('hidden');
        verMas.classList.toggle('hidden');
    })

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

