
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper=new Paper(300,height,30,40) 
    ground = new Ground(600,height,1200,20);
    dustbin1=new Dustbin(500,650,200,20);
	dustbin2=new Dustbin(400,600,20,100);
	dustbin3=new Dustbin(600,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display()
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){

      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,Y:85})

	}
}



