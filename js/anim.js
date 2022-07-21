export class Star{

    constructor(id){

        this.id = id;
        this.html = '<figure id="' + this.id + '" class="star"></figure>';
        this.container = document.getElementById('bgAnim');
        this.speed = 10;
        this.element = document.getElementById(this.id);
        this.interval = null;
    }

    add(){
        
        this.container.innerHTML += this.html;
        
    }

    start(){

        this.interval = setInterval(this.changePos.bind(this), 250, this.id)

    }

    changePos(id){

        var top = this.getPosbyId(id);
        var element = document.getElementById(id)
        element.style.left = parseInt(top)+ 120 + 'px';

    }

    getPosbyId(id){

        var element = document.getElementById(id),
        style = window.getComputedStyle(element),
        top = style.getPropertyValue('left');
        return parseInt(top);

    }


}

let test = new Star(1);
test.add();
//test.start();
