export class Star{

    constructor(id, x, y){

        this.id = id;
        this.x = x
        this.y = y

        this.interval = null
    }

    start(){

        this.element = document.getElementById(this.id);
        this.interval = setInterval(this.changePosByElement.bind(this), 250, this.element)

    }

    changePosById(id){

        var pos = this.getPosbyId(id);
        var element = document.getElementById(id)
        element.style.top = pos[0] + 120 + 'px';

    }

    changePosByElement(element){

        var pos = this.getPosbyId(element.id)
        element.style.top = pos[0] + 120 + 'px';

    }    

    getPosbyId(id){

        var element = document.getElementById(id),
        style = window.getComputedStyle(element),
        x = style.getPropertyValue('top'),
        y = style.getPropertyValue('left')
        
        return [parseInt(x), parseInt(y)]

    }


}