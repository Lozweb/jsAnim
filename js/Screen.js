export class Screen{

    constructor(id){
        this.screen = document.getElementById(id)
        this.width = this.screen.offsetWidth
        this.heigth = this.screen.offsetHeight
        this.entities = []
    }

    add(entity){
        
        var htlm = '<figure id="' + entity.id + '" '
        htlm += 'class="star" style=" top:' + entity.y + 'px;'
        htlm += 'left: ' + entity.x + 'px"></figure>'

        this.screen.innerHTML += htlm
        
        this.entities.push(entity)

    }

    isOut(entity){

        if(entity.x > this.width || entity.x < -100 || entity.y > this.heigth || entity.y < 0) return true
        
        else return false
    
    }

    remove(entity){

        if(entity != null){

            this.entities = this.entities.filter(data => data.id != entity.id)
            
            document.getElementById(entity.id).remove()
            
        }

    }

    updateArray(){

        for(var i = 0; i < this.entities.length; i++){

            this.entities[i].element = document.getElementById(this.entities[i].id)

        }

    }

}