import { onSnake, expandSnake } from "./snake.js";
import { randomGridPosition } from "./grid.js";

let food = getRandomFoodPosition()

/*Le snake grandit en mangeant*/
const EXPANSION_RATE = 5


export function update(){
    /*détection de collision snake ET food*/
    if (onSnake(food)){
        expandSnake(EXPANSION_RATE)
        food = getRandomFoodPosition()
    }

}

export function draw(gameBoard){
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y         /*position de départ*/
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition(){
    let newFoodPosition 
    while(newFoodPosition == null || onSnake(newFoodPosition)){
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}