import {Screen} from "./Screen.js"
import {StarsGenerator} from "./StarsGenerator.js"

export class Engin{

    constructor(screen, starsGenerator){
        this.screen = screen
        this.starsGenerator = starsGenerator
        this.direction = 'right'
        this.init = true;
    }

    InitScreen(nbStars){
        
        var nb = nbStars, count = 0

        while(count < nb){
            this.screen.add(stars.createRandomStar())
            count++
        }

        this.init = false

        this.screen.updateArray()
        
    }

}