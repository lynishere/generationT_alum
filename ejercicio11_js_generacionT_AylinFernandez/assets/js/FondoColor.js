// Diccionario de colores primarios en español
const colores = {
    rojo: 'red',
    azul: 'blue',
    amarillo: 'yellow'
};

// Función para cambiar el fondo
function cambiarFondo(color) {
    document.body.style.backgroundColor = color;
}

// Función para restablecer el fondo
function restablecerFondo() {
    document.body.style.backgroundColor = 'white';
}

// Asigna la lógica al input con eventos de teclado
document.getElementById('colorInput').addEventListener('keyup', function(event) {
    const color = colores[event.target.value.toLowerCase()]; // Obtiene el color si está en el diccionario

    // Si es "Enter" y el color es válido, cambia el fondo
    if (event.key === 'Enter' && color) {
        cambiarFondo(color);
    }

    // Si se presiona "Backspace", restaura el fondo a blanco
    if (event.key === 'Backspace') {
        restablecerFondo();
    }
});
