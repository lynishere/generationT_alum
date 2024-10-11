const parrafos = document.querySelectorAll('p');
//agregamos el eventlisener para cada paraffo
parrafos.forEach(parrafo => {
    parrafo.addEventListener('click', function() {
        // Toggle la clase "resaltado" en el párrafo actual
        this.classList.toggle('resaltado');
    });
});