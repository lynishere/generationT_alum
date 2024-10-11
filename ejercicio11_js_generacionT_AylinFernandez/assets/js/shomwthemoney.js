// Seleccionamos los botones y las imágenes
const botonMoney = document.getElementById('boton-money');
const botonMiami = document.getElementById('boton-miami');
const botonMaiameee = document.getElementById('boton-maiameee');
const imagenMoney = document.getElementById('imagen-money');
const imagenMiami = document.getElementById('imagen-miami');
const imagenMaiameee = document.getElementById('imagen-maiameee');

// Agregamos event listeners a los botones
botonMoney.addEventListener('click', function() {
    imagenMoney.classList.toggle('oculto');
});

botonMiami.addEventListener('click', function() {
    imagenMiami.classList.toggle('oculto');
});

botonMaiameee.addEventListener('click', function() {
    imagenMaiameee.classList.toggle('oculto');
});

// Agregamos event listeners a las imágenes
imagenMoney.addEventListener('click', function() {
    imagenMoney.classList.add('oculto');
});

imagenMiami.addEventListener('click', function() {
    imagenMiami.classList.add('oculto');
});

imagenMaiameee.addEventListener('click', function() {
    imagenMaiameee.classList.add('oculto');
});