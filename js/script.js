import {Engine} from "./Engine.js"
import {Screen} from "./Screen.js"
import {StarsGenerator} from "./StarsGenerator.js"

var screen = new Screen('bgAnim')
var stars = new StarsGenerator(screen.width, screen.heigth, 'left')
var engine = new Engine(screen, stars)
var start = null

window.onload = init
window.onresize = resize

function init(){
    engine.InitScreen()
    start = setInterval(engine.draw.bind(engine), 33)
}

function resize(){

    screen.setSize()
    stars.maxWidth = screen.width
    stars.maxHeigth = screen.heigth

}