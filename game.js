import {update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection
        }
   from "./snake.js";
/*attention toute particulière à l'orthographe et la ponctuation*/



import { update as updateFood, draw as drawFood } from "./food.js";

import { outsideGrid} from "./grid.js ";

let lastRenderTime = 0 ;
let gameOver = false
const gameBoard = document.getElementById('game-board') ;

function main (currentTime){
    if(gameOver){
        if(confirm('You loose. Press OK to Restart')){
            window.location = '/'
        }
    }


    window.requestAnimationFrame(main)  /*la boucle de jeu se répète à l'infini*/
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 ;
    if(secondsSinceLastRender < 1 / SNAKE_SPEED) return
    
    lastRenderTime = currentTime 

    update(); /*met à jour les VAR du jeu*/

    draw(); /* dessine le jeu*/
}

window.requestAnimationFrame(main)  /*la boucle de jeu se lance une première fois*/

function update(){
    updateSnake()
    updateFood()
    checkDeath()
}

function draw(){
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}