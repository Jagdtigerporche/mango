
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1;
var boyImage;
var boy1;
var stone1;
var mango1;
var mango2;
var mango3;
var mango11;
var mango22;
var mango33;
var treeImage;
var tree1;
var sling;

function preload()
{
	boyImage = loadImage("sprites/boy.png");
	treeImage = loadImage("sprites/tree.png");
	mango11= loadImage("sprites/mango.png");
	mango22 = loadImage("sprites/mango.png");
	mango33 = loadImage("sprites/mango.png");


}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new Ground(400,650,800,20)

	boy1=createSprite(100,600,50,50);
	boy1.addImage(boyImage);
	boy1.scale=0.1

	stone1=new stone(50,550,20,20);

	tree1=createSprite(620,480,70,200);
	tree1.addImage(treeImage);
	tree1.scale=0.3

	mango1=new mango(600,450,50,50);
 
	mango2=new mango(500,380,50,50);

	mango3=new mango(700,400,50,50);


    sling = new SlingShot(stone1.body,{x:50,y:550});

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(178,178,178);
  
mango11.x=mango1.x;
mango11.y=mango1.y;
mango22.x=mango2.x;
mango22.y=mango2.y;
mango33.x=mango3.x;
mango33.y=mango3.y;

ground1.display();
stone1.display();
mango1.display();
mango2.display();
mango3.display();

sling.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY});
	}
	
function mouseReleased(){
	sling.fly();
	}

