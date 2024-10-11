const btnBeeper = document.getElementById('btnBeeper');
function seEjecutaEnEvento() {
    const body = document.body;
    body.insertAdjacentHTML('beforeend', '<p>BEEP</p>');
    body.classList.toggle('color');
    const btnBeeper = document.getElementById('btnBeeper');
    btnBeeper.classList.toggle('active');
}
btnBeeper.addEventListener('click', seEjecutaEnEvento);