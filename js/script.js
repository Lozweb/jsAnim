import {Screen} from "./Screen.js"
import {StarsGenerator} from "./StarsGenerator.js"


var screen = new Screen('bgAnim')
const DIRECTION = 'bottom'

var stars = new StarsGenerator(screen.width, screen.heigth, DIRECTION)
var nb = 10, count = 0

while(count < nb){

    screen.add(stars.createRandomStar())
    count++
    
}

console.log(stars)

stars.init = false;

var start = setInterval(engine, 33)

screen.updateArray()

function engine(){

    for(var i=0; i < screen.entities.length; i++){

        screen.entities[i].moveTo(DIRECTION)

        cleanScreen(screen.entities[i])   

    }

}

function cleanScreen(entity){

    if(screen.isOut(entity)){

        screen.remove(entity)
        newStar()

    }

}

function newStar(){

    screen.add(stars.createRandomStar())
    screen.updateArray()

}