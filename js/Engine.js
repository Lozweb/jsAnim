export class Engine{

    constructor(screen, starsGenerator){
        this.screen = screen
        this.starsGenerator = starsGenerator
        this.direction = 'left'
    }

    InitScreen(){
        
        this.drawOnInit(60)
        this.starsGenerator.init = false

    }

    drawOnInit(nbStars){

        var nb = nbStars, count = 0

        while(count < nb){

            this.screen.add(this.starsGenerator.createRandomStar())
            count++

        }

        this.screen.updateArray()

    }

    draw(){

        for(var i=0; i < this.screen.entities.length; i++){

            this.screen.entities[i].moveTo(this.direction)
    
            this.cleanScreen(this.screen.entities[i])   
    
        }
    }

    cleanScreen(entity){

        if(this.screen.isOut(entity)){
    
            this.screen.remove(entity)
            this.newStar()
    
        }
    
    }

    newStar(){

        this.screen.add(this.starsGenerator.createRandomStar())
        this.screen.updateArray()
    
    }

}