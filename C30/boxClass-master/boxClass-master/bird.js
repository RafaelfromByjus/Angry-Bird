class bird extends baseClass{
    constructor(x,y){
    super(x,y, 30,30);
   
    this.image = loadImage("sprites/bird.png");
    }

    display(){
        super.display();
    }
}