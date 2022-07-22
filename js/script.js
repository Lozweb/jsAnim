import {Star} from "./Star.js"
import {Screen} from "./Screen.js"

var screen = new Screen('bgAnim')

var stars = [
    new Star(0,10,10), 
    new Star(1, 50, 100), 
    new Star(2, 50, 30)
]


screen.add(stars[0])
screen.add(stars[1])

engine()

function engine(){

    for(var i=0; i < screen.entities.length; i++){

        screen.entities[i].move('bottom')

        console.log(screen.entities[i])

        if(screen.isOut(screen.entities[i])){

            screen.remove(screen.entities[i])

        }

    }

}



//var start = setInterval(engine, 1)


