// ====================== GLOBAL DOM / VARIABLES ======================= //
let block = document.getElementById("block");
let hole = document.getElementById("hole");
let circle = document.getElementById("circle");
let jumping = 0;
let counter = 0;
let movementInterval;
let rectangleInterval;

// ==================Function to update the score=========================//
function updateScore() {
    counter++;
    document.getElementById("score").textContent = counter; // Update the HTML score
}