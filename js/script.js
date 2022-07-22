import {Screen} from "./Screen.js"
import {StarsGenerator} from "./StarsGenerator.js"


var screen = new Screen('bgAnim')

var stars = new StarsGenerator(screen.width, screen.heigth)
console.log(screen.width)
var nb = 100, count = 0
console.log(stars)

while(count < nb){

    screen.add(stars.createRandomStar())
    count++
    
}

stars.init = false;

var start = setInterval(engine, 33)

screen.updateArray()

function engine(){

    for(var i=0; i < screen.entities.length; i++){

        screen.entities[i].moveTo('left')

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