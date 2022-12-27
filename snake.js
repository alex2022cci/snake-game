import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 5
const snakeBody = [
    /*position initiale du Snake*/
    {x: 11, y: 11}
]
let newSegments = 0 


export function update(){
    addSegments()
    const inputDirection = getInputDirection()
    for(let i = snakeBody.length - 2 ; i >= 0 ; i-- ){
        snakeBody[i+1] = {...snakeBody[i]}      /*l'élément i+1 prend la valeur de l'élément précédent*/
    }

    snakeBody[0].x += inputDirection.x                    /*snakeBody[0] == c'est la tête du Snake*/
    snakeBody[0].y += inputDirection.y
    
}

export function draw(gameBoard){
    snakeBody.forEach(segment => {
        const snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = segment.y         /*position de départ*/
        snakeElement.style.gridColumnStart = segment.x
        snakeElement.classList.add('snake')
        gameBoard.appendChild(snakeElement)
    })
}

export function expandSnake(amount){
    newSegments += amount
}


/*détection des colisions*/
export function onSnake(position, {ignoreHead = false} = {} ){
    return snakeBody.some((segment, index)  => {
        if(ignoreHead && index === 0) return false
        return equalPosition(segment, position)
    })
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0], { ignoreHead: true})
}

function equalPosition(pos1, pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegments(){

    /*le serpent grandit ...*/
    for (let i = 0; i < newSegments; i++) {
    snakeBody.push(  {...snakeBody[snakeBody.length -1] } )
    }

    /*... mais ne s'appelle pas OUROBOROS*/
    newSegments = 0
}