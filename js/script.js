import {Star} from "./Star.js"
import {Screen} from "./Screen.js"

var screen = new Screen('bgAnim')
var entity = new Star(1, 100, 300)

screen.add(entity)


