import {Engine} from "./Engine.js"
import {Screen} from "./Screen.js"
import {StarsGenerator} from "./StarsGenerator.js"


window.onload = init

function init(){
    var screen = new Screen('bgAnim')
    var stars = new StarsGenerator(screen.width, screen.heigth, 'left')
    
    var engine = new Engine(screen, stars)
    engine.InitScreen()
    var start = setInterval(engine.draw.bind(engine), 33)
}