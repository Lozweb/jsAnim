export class Screen{

    constructor(id){
        this.screen = document.getElementById(id)
        this.width = this.screen.offsetWidth
        this.heigth = this.screen.offsetHeight
        this.entities = []
    }

    add(entity){
        
        var html = '<figure id="' + entity.id + '" '
        html += 'class="star" style=" top:' + entity.y + 'px;'
        html += 'left: ' + entity.x + 'px;'
        html += 'width:' + entity.size + 'px;'
        html += 'height:'+ entity.size + 'px;'
        html += 'background-color:' + entity.color + ';"></figure>'

        this.screen.innerHTML += html
        
        this.entities.push(entity)

    }

    isOut(entity){

        if(entity.x > this.width || entity.x < -100){
            return true;
        } 

        if(entity.y > this.heigth || entity.y < 0) {
            return true
        }
        
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