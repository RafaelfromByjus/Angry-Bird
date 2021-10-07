class slingshot {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB ,
            stiffness: 0.5,
            length: 10
        }

    
    this.sling1 = loadImage("sprites/sling1.png");
    this.sling2 = loadImage("sprites/sling2.png");
    this.sling3 = loadImage("sprites/sling3.png");

    this.pointB = pointB;
    this.slingshot1 = Constraint.create(options);

    World.add(world, this.slingshot1);
    }
    fly(){
        this.slingshot1.bodyA = null;
    }
    display(){
    
    image(this.sling1, 200, 70, 50, 150);
   
   
    image(this.sling2, 165, 70, 50, 90);
    if(this.slingshot1.bodyA){
        var pointA = this.slingshot1.bodyA.position;
        var pointB = this.pointB;
    push();
    
            strokeWeight(3);
    
            line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+25, pointA.y, pointB.x+15, pointB.y-10);
            
            image(this.sling3, pointA.x-30, pointA.y-15, 10, 40);
            
            pop();
            
        }
    }
}         