import {Star} from "./Star.js"
import {Screen} from "./Screen.js"

var screen = new Screen('bgAnim')

var stars = [

    new Star(0,10,10), 
    new Star(1, 50, 100), 
    new Star(2, 50, 30)

]

for(var i=0; i < stars.length; i++){

    screen.add(stars[i])

}

var start = setInterval(engine, 1)
screen.updateArray()

function engine(){

    for(var i=0; i < screen.entities.length; i++){

        screen.entities[i].moveTo('bottom')

        cleanScreen(screen.entities[i])   

    }

}

function cleanScreen(entity){

    if(screen.isOut(entity)){

        screen.remove(entity)

    }

}