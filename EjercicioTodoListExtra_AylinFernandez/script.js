// Selecciona los elementos del DOM
const input = document.querySelector('.input');
const botonAgregar = document.querySelector('.boton-agregar');
const container = document.querySelector('.container');

// Clase Item
class Item {
    constructor(tarea) {
        this.tarea = tarea;
        this.crearDiv();
    }

    crearDiv() {
        const div = document.createElement('div');
        div.className = 'item';

        const inputItem = document.createElement('input');
        inputItem.type = 'text';
        inputItem.className = 'item-input';
        inputItem.disabled = true;
        inputItem.value = this.tarea;

        const botonEditar = document.createElement('button');
        botonEditar.className = 'boton-editar';
        botonEditar.innerHTML = '&#x1f512;'; // Candado cerrado

        const botonRemover = document.createElement('button');
        botonRemover.className = 'boton-remover';
        botonRemover.innerHTML = '&#x1f5d1;';

        // Evento para remover el item
        botonRemover.addEventListener('click', () => {
            div.remove(); // Elimina el div completo
        });

        // Evento para editar el item
        botonEditar.addEventListener('click', () => {
            if (inputItem.disabled) {
                inputItem.disabled = false;
                inputItem.focus(); // Pone el foco en el input para editar
                botonEditar.innerHTML = '&#x1f513;'; // Cambia a candado abierto
            } else {
                inputItem.disabled = true;
                botonEditar.innerHTML = '&#x1f512;'; // Cambia a candado cerrado
            }
        });

        div.appendChild(inputItem);
        div.appendChild(botonEditar);
        div.appendChild(botonRemover);

        container.appendChild(div);
    }
}

// Función para chequear el input
function chequearInput() {
    const tarea = input.value.trim();
    if (tarea !== '') {
        const item = new Item(tarea);
        input.value = '';
    }
}

// Agrega evento al botón "Agregar"
botonAgregar.addEventListener('click', chequearInput);


