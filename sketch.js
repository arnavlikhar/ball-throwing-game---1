const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var ball1,basket1;
var ground;
function setup() 
{
  createCanvas(800, 800);
  engine=Engine.create();
  world=engine.world;

  ball1= new ball(100,200,150);
  basket1= new Basket(700,200,100,100);

  var option ={isStatic:true}
  ground= Bodies.rectangle(400,750,800,30,option);
  World.add(world,ground);

 basket1.debug=true;
}

function draw() {
  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 background("white");

  Engine.update(engine);

  ball1.display();
  basket1.display();
  fill(255,0,0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,30);
  

}
function keyPressed() {
  if (keyCode === UP_ARROW)
   {
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:120,y:-205});
  }
}