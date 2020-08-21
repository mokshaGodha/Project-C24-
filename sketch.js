
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ballSprite,ground,rect1,rect2,rect3,ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    var options={
		isStatic:false,
        restitution:0.3,
		friction:1,
		density:1.2
	}

	engine = Engine.create();
	
	world = engine.world;
    groundSprite=createSprite(width/2, height-35, width,5);
	groundSprite.shapeColor=color(255)

    rect1=createSprite(550,615,20,100);
	rect1.shapeColor=("red")

    rect2=createSprite(750,615,20,100);
	rect2.shapeColor=("red")

	rect3=createSprite(650,660,200,20);
	rect3.shapeColor=("red")
    
	ground = Bodies.rectangle(width/2, height-35,width, 5 , {isStatic:true} );
	 World.add(world, ground);
	 
	 rect2=Bodies.rectangle(750,615,20,100 , {isStatic:true});
	 World.add(world,rect2);
	 rect1=Bodies.rectangle(550,615,20,100 , {isStatic:true});
	 World.add(world,rect1);
	 rect3=Bodies.rectangle(650,660,200,20 , {isStatic:true});
	 World.add(world,rect3);

	 
	
	 ball=Matter.Bodies.circle(110,600,30,options);
	 World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  ellipseMode(RADIUS);
  background(0);
  ellipse(ball.position.x,ball.position.y,30,30)
  ball.shapeColor=("pink")
 // ballSprite.x=ball.position.x;
//ballSprite.y=ball.position.y;
  drawSprites();
 
}
function keyPressed(){
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(ball, ball.position, {x:130,y:-130}) 
	}
  }

	




