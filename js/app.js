// GLOBAL DOM / VARIABLES
const game = document.getElementById('game');
const movement = document.getElementById('movement');
const score = document.getElementById('score');
const status = document.getElementById('status');
const ctx = game.getContext('2d');
let bird;
const birdImage = document.getElementById('bird');




// ====================== SETUP FOR CANVAS RENDERING ======================= //


// Character class with image
class Character {
    constructor(x, y, image, width, height) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.width = width;
        this.height = height;
        this.alive = true;

        this.render = function() {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
    }
}

// ====================== PAINT INTIAL SCREEN ======================= //

// EVENT LISTENERS
window.addEventListener('DOMContentLoaded', function() {
    birdCharacter = new Character(40, 100, bird, 30, 50);

    // run a game loop
    const runGame = setInterval(gameLoop, 60);
});


// KEYBOARD LOGIC
function movementHandler(e) {
    console.log('movement :', e.key);
    if (e.key === 'ArrowUp' || e.key === 'w') {
        bird.y - 10 >= 0 ? (mushroomCharacter.y -= 10) : null;
    } else if (e.key === 'ArrowDown' || e.key === 's') {
        bird.y + 10 <= game.height - mushroomCharacter.height ? (mushroomCharacter.y += 10) : null;
    } 
}