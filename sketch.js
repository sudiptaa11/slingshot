/*
restaurant - web server
food/ order - information that we want from web server
waiter - API call
*/


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1; 
var backgroundImg,platform;
var clog;
var cpig;
var sling;
var gameState = "onsling";
var bg;
var score = 0;

function preload() {
    getBackgroundImage();
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
    // pig3 = new Pig(600,300);
    // cpig = new Pig(300,50);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);
    // clog = new Log(400,100,20, PI/2);

    bird = new Bird(200,50);

    sling = new SlingShot(bird.body,{x: 200, y: 50});

}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    }
    Engine.update(engine);

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

    platform.display();
    bird.display();

    sling.display();

    fill("yellow");
    textSize(20);
    text("score = "+score,900,50);
}

function mouseDragged() {
    // if(gameState === "onsling") {
        Matter.Body.setPosition(bird.body,{x:mouseX, y: mouseY});
        //gameState = "launched";
    // }
    
}

function mouseReleased() {
    // if(gameState === "onsling") {
        sling.fly();
        gameState = "launched";
    // }
    
}

function keyPressed() {
    if(keyCode === 32 && bird.body.speed<1) {
        // bird.body.position.x = 200;
        // bird.body.position.y = 50;
        bird.pattern = [];
        Matter.Body.setPosition(bird.body,{x:200, y: 50});
        sling.attach(bird.body);
    }
}

async function getBackgroundImage() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    //console.log(response);
    var responseJson = await response.json();
    //console.log(responseJson);
    var datetime = responseJson.datetime;
    //console.log(responseJson.datetime);
    var hour = datetime.slice(11,13);
    //console.log(hour);
    if(6<=hour && hour<=16) {
        bg = "sprites/bg.png";
    } else{
        bg = "sprites/bg2.jpg";
    }
    backgroundImg = loadImage(bg);
}