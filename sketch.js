const Engine = Matter.Engine; 
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var box1;
var box2;
var Ground1
function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world;

  
 
box1 = new Box(200,200,50,50);
box2 = new Box(210,100,50,30);
  Ground1= new Ground(200,350,400,50);

  }

function draw() {
  background(0);
  Engine.update(engine);
  
  box1.display();
  box2.display();
  Ground1.display();
 // drawSprites();
}




















