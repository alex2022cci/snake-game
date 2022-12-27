let Grid_size = 21

export function randomGridPosition(){
    return {
        x: Math.floor(Math.random() * Grid_size ) +1,
        y: Math.floor(Math.random() * Grid_size ) +1
    }
} 

export function outsideGrid(position){
    return (
        position.x <1 || position.x > Grid_size ||
        position.y <1 || position.y > Grid_size 
    )
}