export class Screen{

    constructor(id){
        this.screen = document.getElementById(id)
        this.screenWidth = this.screen.offsetWidth
        this.screenHeigth = this.screen.offsetHeight
        this.entities = []
    }

    add(entity){
        
        this.screen.innerHTML += '<figure id="' + entity.id + '" class="star style=" top:' + entity.x + 'px; left: ' + this.entity.y + '"></figure>'
        this.entities.push(entity)

    }

    isOut(entity){

        if(entity.x > this.screenWidth || entity.x < 0 || entity.y > this.screenHeigth || entity.y < 0)return true
        else return false

    }

    remove(entity){

        this.entities = this.entities.filter(entity.id)

    }

}