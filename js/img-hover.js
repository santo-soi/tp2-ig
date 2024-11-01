let imagenes = document.querySelectorAll('#paginas img');

const burguer = document.querySelector('#burguer');
const desplegable = document.querySelector('#desplegable');

burguer.addEventListener('click', () =>{
    desplegable.classList.toggle('hidden');
    desplegable.classList.toggle('flex');
})

