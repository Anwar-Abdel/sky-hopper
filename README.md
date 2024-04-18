# Installation Guide
1. ```Git clone https://github.com/Anwar-Abdel/sky-hopper.git```
2. Open the `index.html` file and run the game in the web browser

# Sky Hopper
In this game, the player must navigate through an array of obstacles to achieve the highest score possible.

# Technologies used
For my project, I utilized HTML, CSS, and JavaScript. HTML helped me in structuring the content and layout of my game interface. CSS allowed me to stylize the game through various elements with colors, animations, and positioning. Lastly, JavaScript was important in the functionality of the game by enabling player movement, collision detection, score tracking, and game handling.

# Approach
For my approach, I began by outlining the features and layout required for the game (wireframe image below). The idea that I was going for was a Flappy Bird style game, but using different shapes instead. After that, I created a `div` with the `"Game" id` and in that div I added 3 ids `"block"`, `"hole"`, and `"circle"` in HTML. With Javascript, I was able to select these divs through DOM. For the most part, I was able to reference a lot of things through the `[canvas-sh](https://github.com/SEBPT220/canvas-shrek-crawler)` codealong that we did in class. This helped me cross reference a lot of different functions like `generateRectangles()` and `jump()`. 
![wireframe](img/wireframe.png)

# Unsolved Problems
Some of the features I wanted to include was an option for mouse click input instead of using the spacebar, as well as reducing the spawn time of the generated rectangles to increase the challenge for the player. Also,
have the rectangles spawn at a later time because I found that in some loops, the rectangles would spawn right next to the red ball and the game would end immediately.

# References
- https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
- https://github.com/SEBPT220/canvas-shrek-crawler
- https://www.youtube.com/watch?v=jj5ADM2uywg&t=2631s
- https://www.w3schools.com/graphics/game_canvas.asp
- https://www.w3schools.com/graphics/game_components.asp
