// Seleccionamos el body y la imagen
const body = document.body;
const imagen = document.querySelector('.mouse-tracker');

// Agregamos un evento mousemove al body
body.addEventListener('mousemove', function(event) {
    // Cambiamos la propiedad top y left de la imagen según la posición del mouse
    imagen.style.top = event.clientY + 'px';
    imagen.style.left = event.clientX + 'px';
});
// Agregamos un evento mousedown y mouseup al body
let arrastreActivado = false;

body.addEventListener('mousedown', function() {
    arrastreActivado = true;
});

body.addEventListener('mouseup', function() {
    arrastreActivado = false;
});

// Modificamos el evento mousemove para que solo se active cuando se está apretando el mouse
body.addEventListener('mousemove', function(event) {
    if (arrastreActivado) {
        imagen.style.top = event.clientY + 'px';
        imagen.style.left = event.clientX + 'px';
    }
});