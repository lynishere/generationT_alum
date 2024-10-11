const autoRojo = document.getElementById('auto-rojo');
const autoAzul = document.getElementById('auto-azul');
let acumuladorRojo = 0;
let acumuladorAzul = 0;

window.addEventListener('keyup', function(event) {
    if (event.key === 'r') {
        acumuladorRojo += 10;
        autoRojo.style.marginLeft = `${acumuladorRojo}px`;
        if (acumuladorRojo >= 750) {
            alert('El auto rojo ganó!');
            document.body.style.backgroundColor = 'red';
            acumuladorRojo = 0;
            acumuladorAzul = 0;
        }
    } else if (event.key === 'a') {
        acumuladorAzul += 10;
        autoAzul.style.marginLeft = `${acumuladorAzul}px`;
        if (acumuladorAzul >= 750) {
            alert('El auto azul ganó!');
            document.body.style.backgroundColor = 'blue';
            acumuladorRojo = 0;
            acumuladorAzul = 0;
        }
    }
});