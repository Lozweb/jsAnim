export class Star{

    constructor(id, x, y, speed){

        this.id = id
        this.x = x
        this.y = y
        this.speed = speed
        this.element = null
        this.size = speed
        this.color = '#85df4e'
    }

    moveTo(side){
        
        if(this.element != null){

            this.setDirection(side)
            if(side === 'top' || side === 'bottom')this.element.style.top = this.y + "px"
            if(side === 'left' || side === 'right')this.element.style.left = this.x + "px"
        
        }

    }

    setDirection(side){

        if(this.element != null){

            var position = this.getPosition()
            this.x = position[0]
            this.y = position[1]

        }
        

        if(side === 'bottom') this.y += this.speed
        if(side === 'top') this.y -= this.speed
        if(side === 'left') this.x -= this.speed
        if(side === 'right') this.x += this.speed

    }

    getPosition(){

        var style = window.getComputedStyle(this.element)
        this.x = style.getPropertyValue('left')
        this.y = style.getPropertyValue('top')
        
        return [parseInt(this.x), parseInt(this.y)]

    }


}