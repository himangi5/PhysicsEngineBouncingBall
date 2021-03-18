const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, ball;
var myEngine, myWorld;

function setup() {
	createCanvas(400, 400);
	myEngine = Engine.create();
	myWorld = myEngine.world;

	ground = Bodies.rectangle(200,390,400,10,{isStatic:true,});
	World.add(myWorld, ground);

  ball = Bodies.circle(200,200,12,{restitution:1});
  World.add(myWorld, ball);

	console.log(ground.position.y);
}

function draw() {
  background("crimson");
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);
  circle(ball.position.x,ball.position.y,24);
}