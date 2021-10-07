const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2,box3, box4, box5, ground1;

var log1, log2, log3, log4;

var pig1, pig2;

var ground1;

var bird1;

var slingshot1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new box(745, 350, 50, 50);
    box2 = new box(860, 350, 50 ,50);
    log1 = new log(800, 300, 170, PI/2);
    pig1 = new pig(800, 370);

    box3 = new box(745, 265, 50, 50);
    box4 = new box(860, 265, 50 ,50);
    log2 = new log(800, 235, 170, PI/2);
    pig2 = new pig(800, 290);

    log3 = new log( 796, 172, 110, PI/7);
    log4 = new log( 802, 172, 110, -PI/7);
    box5 = new box(800, 200, 50, 50);

    bird1 = new bird(200,100);

    slingshot1 = new slingshot(bird1.body, {x: 200, y:100});

    ground2 = new Ground(180,300,300,170);
    ground1 = new Ground(600, 380, 1200, 20);

    
}

function draw(){
    background(225);
    Engine.update(engine);
    box1.display();
    box2.display();
    log1.display();
    pig1.display();

    box3.display();
    box4.display();
    log2.display();
    pig2.display();

    log3.display();
    log4.display();
    box5.display();
    
    bird1.display();

    slingshot1.display();

    ground2.display();
    ground1.display();


    //mouseDragged();
    //mouseRelease();
}
function mouseDragged(){

    Matter.Body.setPosition(bird1.body, {x: mouseX, y: mouseY});
}
function mouseRelease(){
    slingshot1.fly()
}