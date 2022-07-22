import { Star } from "./Star.js"

export class StarsGenerator{

    constructor(w, h){
        this.countId = 0
        this.maxWidth = w
        this.maxHeigth = h
        this.init = true;
    }

    createRandomStar(){

        if(this.init) var x = this.getRandom(0, this.maxWidth)
        else var x = this.maxWidth

        var y = this.getRandom(0, this.maxHeigth)
        var speed = this.getRandom(1, 6)

        var star = new Star(this.countId, x, y, speed)
        this.countId++

        return star

    }

    getRandom(min, max){
        return Math.floor(Math.random() * (max - min + 1) ) + min
    }

}