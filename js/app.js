// ====================== GLOBAL DOM / VARIABLES ======================= //
const game = document.getElementById('game');
let background = document.getElementById('background');
let bird = document.getElementById('bird');
let topPipe = document.getElementById('top-pipe');
let bottomPipe = document.getElementById('bottom-pipe');

bottomPipe = 65;


// ====================== CANVAS ======================= //
game.setAttribute('height', getComputedStyle(game)['height']);
game.setAttribute('width', getComputedStyle(game)['width']);