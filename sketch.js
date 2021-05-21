const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
 	
}

function setup() 
{
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(600,height,1200,20)
	ground.shapeColor=color("yellow")

	Dustbin1= new Dustbin(600,680,200,20);
	Dustbin1.shapeColor=color("white")

	Dustbin2=new Dustbin(500,615,20,150);
	Dustbin2.shapeColor=color("white")

    Dustbin3=new Dustbin(700,615,20,150);
	Dustbin3.shapeColor=color("white")

   
	paper= new Paper (100,600,50);

	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("black");

  
  
  drawSprites();
 paper.display();
 ground.display();
 Dustbin1.display();
 Dustbin2.display();
 Dustbin3.display();
}

function keyPressed()
{

	if(keyCode === UP_ARROW) 
	{

   Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-400});

	}



}