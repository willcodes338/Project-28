
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree;
var ground;
var stone;
var boy, boyImage;
var mango1, mango2, mango3, mango4, mango5;
var slingshot;

function preload(){
	boyImage=loadImage("images/Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 tree = new Tree(600,500);
 ground = new Ground(400,620);
 stone = new Stone(40,400);
 mango1 = new Mango(600,400);
 mango2 = new Mango(550,500);
 mango3 = new Mango(650,450);
 mango4 = new Mango(550,430);
 mango5 = new Mango(650,420);
 slingshot= new Slingshot(stone.body, {x:40, y:580});

 Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  tree.display();
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  imageMode(CENTER)
  image(boyImage,60,600,60,100);
  slingshot.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position;
	stoneBodyPosition=lstone.body.position;

	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
	if(distance<=lmango.radius+lstone.width){
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:40, y:400});
		slingshot.attach(stone.body);
	}
}
//yash malhotra ;)


