let inputDirection = { x: 0, y: 0}
let lastInputDirection = { x:0, y:0 }


/*Si le snake bouge horizontalement il ne pourra que monter ou descendre */
/*Si le snake bouge verticalement il ne pourra que aller à D ou à G */

window.addEventListener('keydown',e => {
    switch(e.key){
        case 'ArrowUp' :  
        if (lastInputDirection.y !== 0) break
        inputDirection = {x:0 , y:-1 }
        break
        case 'ArrowDown' :  
        if (lastInputDirection.y !== 0) break
        inputDirection = {x:0 , y:+1 }
        break
        case 'ArrowLeft' :  
        if (lastInputDirection.x !== 0) break
        inputDirection = {x:-1 , y:0 }
        break
        case 'ArrowRight' :  
        if (lastInputDirection.x !== 0) break
        inputDirection = {x:+1 , y:0 }
        break
    }
})

export function getInputDirection(){
    /*on vérifie la dernière direction choisie*/
    lastInputDirection = inputDirection 
    return inputDirection
}