const words = [
    'Patatas',
    'Aves',
    'Colina',
    'californication',
    'oso',
    'plataforma5',
    'black',
    'shy',
    'frio',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'batatas',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'Sapo',
    'funky',
    'chili'
];

const randomWord = document.getElementById('randomWord');
const textInput = document.getElementById('text');
const timeSpan = document.getElementById('timeSpan');
const scoreSpan = document.getElementById('score');
const endGameContainer = document.getElementById('end-game-container');

let palabraAleatoria;
let time = 10;
let score = 0;
let intervalId;
let gameOver1 = false;

function randomWords() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
}

function addToDOM() {
    palabraAleatoria = randomWords();
    randomWord.textContent = palabraAleatoria;
}

textInput.addEventListener('input', function(e) {
    if (gameOver1) return;
    const palabraIngresada = e.target.value;
    if (palabraIngresada === palabraAleatoria) {
        time += 3;
        textInput.value = '';
        addToDOM();
        updateScore();
    }
});

function updateScore() {
    score++;
    scoreSpan.textContent = score;
}

function actualizarTiempo() {
    time--;
    timeSpan.textContent = `${time}s`;
    if (time === 0) {
        clearInterval(intervalId);
        gameOver();
    }
}

function gameOver() {
    endGameContainer.style.display = 'block';
    endGameContainer.innerHTML = `
        <h2>Game Over!</h2>
        <p>Score: ${score}</p>
        <button>Play Again</button>
    `;
    const playAgainButton = endGameContainer.querySelector('button');
    playAgainButton.addEventListener('click', function() {
        location.reload();
    });
    gameOver1 = true; // Indicamos que el juego ha terminado
    textInput.disabled = true; // Deshabilitamos el input para que el usuario no pueda ingresar palabras
}
intervalId = setInterval(actualizarTiempo, 1000);
addToDOM();
