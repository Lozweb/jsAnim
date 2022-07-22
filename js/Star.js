export class Star{

    constructor(id, x, y){

        this.id = id
        this.x = x
        this.y = y
        this.speed = 10;
        this.element = null
    }

    move(side){
        
        this.direction(side)
        if(side === 'top' || side === 'bottom')this.element.style.top = this.x + "px"
        if(side === 'left' || side === 'right')this.element.style.left = this.y + "px"
    }

    direction(side){

        var position = this.getPosbyId(this.id)
        this.x = position[0]
        this.y = position[1]

        if(side === 'bottom') this.x += this.speed
        if(side === 'top') this.x -= this.speed
        if(side === 'left') this.y -= this.speed
        if(side === 'right') this.y += this.speed

    }

    getPosbyId(id){

        var style = window.getComputedStyle(this.element)
        this.x = style.getPropertyValue('top')
        this.y = style.getPropertyValue('left')
        
        return [parseInt(this.x), parseInt(this.y)]

    }


}