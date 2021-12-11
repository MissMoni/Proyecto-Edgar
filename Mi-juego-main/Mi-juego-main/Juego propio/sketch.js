const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var background, bgImg, ground, player,  invisibleground;
var log1;

var liveCount=5;

function preload() {
    bgImg = loadImage("sprites/background.png")
    //charJumping = loadAnimation("sprites/char-jumping1.png","sprites/char-jumping2.png","sprites/char-jumping3.png")
}

function setup () {
    
    var canvas = createCanvas(windowWidth, windowHeight);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2, height-10, width, 20);
    invisibleground = new Ground(width/4, height-150, width, 20);
    invisibleground.visible= false;
    player = new Player(width/2,height/2,50,50);
    log1 = new Log(width/2,height,200,100)
}

function draw () {

    background(bgImg);
    Engine.update(engine);
    
    

    //sistema de vidas
    /*if(player.isTouching(ObstacleBase)){
      liveCount -=1;
    }

    if(liveCount === 0){
        console.Log("game over")
    }*/

    ground.display();
    invisibleground.display();
    player.display();
    log1.display();
}