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

// ==================Function to generate rectangles=====================//
function generateRectangles() {
    rectangleInterval = setInterval(() => {
        let random = -((Math.random()*300)+150);
        hole.style.top = random + "px";
        updateScore(); // Increment score when hole animation resets
    }, 2000); // Interval set to 2 seconds
}

generateRectangles(); // Call the function to start generating rectangles immediately

hole.addEventListener('animationiteration', () => {
    // updateScore(); // Increment score when hole animation resets (already called in generateRectangles function)
});

setInterval(function(){
    let circleTop = parseInt(window.getComputedStyle(circle).getPropertyValue("top"));
    if(jumping==0){
        circle.style.top = (circleTop+3)+"px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500-circleTop);

    if((circleTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
        gameOver();
    }

    // Check if ball touches the hole
    if (blockLeft > 480 && blockLeft < 530 && circleTop > 480 && circleTop < 580) {
        updateScore(); // Increment score when ball touches hole
    }

},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    let jumpInterval = setInterval(function(){
        let circleTop = parseInt(window.getComputedStyle(circle).getPropertyValue("top"));
        if((circleTop>6)&&(jumpCount<15)){
            circle.style.top = (circleTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 32) {
        jump();
    }
});

// ==================Function to freeze the game=====================//
function freezeGame() {
    clearInterval(movementInterval); // Stop ball movement
    clearInterval(rectangleInterval); // Stop rectangle generation
}