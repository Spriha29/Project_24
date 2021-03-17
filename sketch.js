const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var stone;
var plane;
var rubber;
var sand1, sand2, sand3, sand4, sand5, sand6;
var iron;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	plane = new Ground(400,700,800,20);
	hammer = new Hammer(200,200,50,30);
	stone = new Stone(350,400,60,60);
	rubber = new Rubber(400,400,30);

	sand1 = new Sand(150,400,3);
	sand2 = new Sand(170,400,3);
	sand3 = new Sand(300,400,3);
	sand4 = new Sand(780,400,3);
	sand5 = new Sand(690,400,3);
	sand6 = new Sand(670,400,3);

	iron = new Iron(200,400,70,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  hammer.display();
  stone.display();
  rubber.display();
  plane.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  iron.display();
}



