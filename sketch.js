const Engine= Matter.Engine
const World=Matter.World
const Bodies= Matter.Bodies
const constraint= Matter.Constraint

var engine,world;
var ground;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12;
var block13,block14,block15,block16;
var block17,block18,block19,block20,block21;
var block22,block23,block24,block25;
var base1
var ball,ballimg,slings

function preload(){
    ballimg=loadImage("polygon.png")
}

function setup(){
   createCanvas(900,400)
   engine=Engine.create();
   world=engine.world;
   Engine.run(engine)

   ground=new Ground();
  

   base1=new Ground(390,300,300,10)
   base2=new Ground(660,190,200,10)

 //level 1-tower 1
  
   block1= new Block(300,275,30,40)
   block2= new Block(330,275,30,40)
   block3= new Block(360,275,30,40)
   block4= new Block(390,275,30,40)
   block5= new Block(420,275,30,40)
   block6= new Block(450,275,30,40)
   block7= new Block(480,275,30,40)

   //level 2- tower 1
   fill('pink')
   block8= new Block(330,235,30,40)
   block9= new Block(360,235,30,40)
   block10= new Block(390,235,30,40)
   block11= new Block(420,235,30,40)
   block12= new Block(450,235,30,40)

   //level 3-tower 1
   block13= new Block(360,195,30,40)
   block14= new Block(390,195,30,40)
   block15= new Block(420,195,30,40)

   //level 4-tower 1
   block16= new Block(390,155,30,40)


   //level 1- tower 2
   block17= new Block(600,170,30,40)
   block18= new Block(630,170,30,40)
   block19= new Block(660,170,30,40)
   block20= new Block(690,170,30,40)
   block21= new Block(720,170,30,40)

   //level 2- tower 2
   block22= new Block(630,130,30,40)
   block23= new Block(660,130,30,40)
   block24= new Block(690,130,30,40)

   //level 3- tower 2
   block25= new Block(660,90,30,40)

   //creating the ball
   ball=Bodies.circle(50,250,10)
   World.add(world,ball)

   slings=new Slingshot(this.ball,{x:50,y:240})

   
}

function draw(){

    background("black")

    ground.display();
    fill("yellow")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink")
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    base1.display();
    base2.display();

   
    imageMode(CENTER)
    image(ballimg,ball.position.x,ball.position.y,40,40)
    
    
    slings.display();
}

function mouseDragged(){
    Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   slings.fly();
}