const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, pig1;
//var backgroundImg,platform;
var ball1,ball2;
var log;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

 //log=createSprites(10,200,600,20)
   // ground = new Ground(600,height,1200,20);
   log = new Log(350,80,30, 20);
 // log=createSprite(300,350,600,20)
    ball1 = new Ball(400,300);

    ball2 = new Ball(350,300);
    ball3 = new Ball(300,300);
    ball4 = new Ball(250,300);
    ball5 = new Ball(200,300);    

    //log6 = new Log(230,180,80, PI/2);
    chain = new Chain(ball1.body,{x:400,y:100})
    chain1 = new Chain(ball2.body,{x:350,y:100})
    chain2 = new Chain(ball3.body,{x:300,y:100})
    chain3 = new Chain(ball4.body,{x:250,y:100})
    chain4 = new Chain(ball5.body,{x:200,y:100})
}

function draw(){
    background("white");
   // log.display();
    Engine.update(engine);
   // strokeWeight(4);
   
   // ground.display();
   //log.display();
   //drawSprites();
   

    
    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();
    ball5.display();
    log.display();
    chain.display();   
    chain1.display(); 
    chain2.display();
    chain3.display();
    chain4.display();
   
   
} 
function mouseDragged (){
    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
    Matter.Body.setPosition(ball2.body)
    Matter.Body.setPosition(ball3.body)
    Matter.Body.setPosition(ball4.body)
    Matter.Body.setPosition(ball5.body)
   
}
//function mouseReleased(){
   // chain.fly()
//}