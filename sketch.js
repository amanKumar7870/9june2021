const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    ground = new Ground(600,height,1200,20);
    pig1 = new Pig(810,350);
    pig2 = new Pig(810,250);
    log1=new Log(810,260,300,PI/2);
    log2=new Log(810,150,300,PI/2);
    bird=new Bird(200,200);
    box3=new Box(700,210,70,70);
    box4=new Box(920,210,70,70);
    box5=new Box(790,100,70,70);
    log3=new Log(760,130,150,PI/7);
    log4=new Log(870,130,150,-PI/7);
}

function draw(){
    background('black');
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig2.display();
    log1.display();
    bird.display();
    box3.display();
    box4.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}