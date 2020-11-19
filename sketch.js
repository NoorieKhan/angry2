const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var bird;
var log1,log2,log3,log4;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    bird = new Bird(100,100);
    box1 = new Box(400,300,70,70);
    box2 = new Box(600,300,70,70);
    ground = new Ground(400,height,800,20);
    pig1 = new Pig(500,300);
    log1 = new Log(500,230,300,PI/2)
    box3 = new Box(400,210,70,70);
    box4 = new Box(600,210,70,70);
    pig2 = new Pig(500,210)
    log2 = new Log(500,140,300,PI/2)
    box5 = new Box(500,120,70,70);
    log3 = new Log(450,120,150, PI/8);
    log4 = new Log(550,120,150, -PI/8);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}