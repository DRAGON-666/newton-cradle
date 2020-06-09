const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var bobDiameter;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();

	world = engine.world;

	Engine.run(engine);

	roof = new Roof(300,100,400,20);

	bobObject1 = new Bob (200,200); 

	rope1 =new Rope (bobObject1.body,roof.body,-bobDiameter*2,0)

	bobObject2 = new Bob (250,200); 

	rope2 =new Rope (bobObject2.body,roof.body,-bobDiameter*3,0)


	bobObject3 = new Bob (300,200); 

	rope3 =new Rope (bobObject3.body,roof.body,-bobDiameter*4,0)

	
	bobObject4 =new Bob  (350,200);

	rope4 =new Rope (bobObject4.body,roof.body,-bobDiameter*5,0)


	bobObject5 =new Bob  (400,200);

	rope5 =new Rope (bobObject5.body,roof.body,-bobDiameter*6,0)


}


function draw() {
  rectMode(CENTER);
  background('black');
  
	roof.display();

	bobObject1.display();

	rope1.display();

	bobObject2.display();

	rope2.display();

	bobObject3.display();

	rope3.display();

	bobObject4.display();

	rope4.display();

	bobObject5.display();
	
	rope5.display();

	

  drawSprites();
 
}



