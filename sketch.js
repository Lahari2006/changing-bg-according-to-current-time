
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


//gamestate
var gameState = "onSling";


var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var score=0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig2 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    textSize(35);
    fill("white");
    text("Score:"+ score,width-300,50);
    Engine.update(engine);
    strokeWeight(4);

    getTime();

    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    pig2.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.display();
    platform.display();
    
    slingshot.display();    
}

function mouseDragged(){
    if(gameState!=="launched") //!== is not equal to sign
    {
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingshot.fly();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32) //32 is the ascii value for space 
    {
//slingshot.attach(bird.body);
    }
}

async function getTime(){
    var response = await fetch ('http://worldtimeapi.org/api/timezone/Asia/Kolkata');
    var responseJSON = await response.json(); // to convert from API format to JSON format
    console.log(responseJSON);
    var dateTime = responseJSON.datetime; //extracting only datetime 
    var hour = dateTime.slice(11,13); //extracting only hour from datetime
    if(hour>=06 && hour<=19){
        bg="sprites/bg.png";
    }

    else{
       bg="sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
}
//async = function which waits for some lines to be completed before executing the next line
//await = function which locates the lines which to wait for
