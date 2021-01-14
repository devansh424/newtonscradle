
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var bob1,bobDiameter;
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  roof=new Roof(320,100,300,30);
	
  bob1=new Bob(200,400,30);
  bob2=new Bob(260,400,30);
  bob3=new Bob(320,400,30);
  bob4=new Bob(380,400,30);
  bob5=new Bob(440,400,30);

  invisi1=new Invisi(200,100,50,30);
  invisi2=new Invisi(260,100,50,30);
  invisi3=new Invisi(320,100,50,30);
  invisi4=new Invisi(380,100,50,30);
  invisi5=new Invisi(440,100,50,30);
  invisi6=new Invisi(320,100,300,30);

  rope1=new Rope(bob1.body,invisi1.body,-0*2,0);
  rope2=new Rope(bob2.body,invisi2.body,-0*2,0);
  rope3=new Rope(bob3.body,invisi3.body,0,0);
  rope4=new Rope(bob4.body,invisi4.body,-0*2,0);
  rope5=new Rope(bob5.body,invisi5.body,-0*2,0);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  invisi1.display();
  invisi2.display();
  invisi3.display();
  invisi4.display();
  invisi5.display();
  invisi6.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === LEFT_ARROW)  {
	   Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-0.1, y:-0.1})
	}
}


