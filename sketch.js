
var boat ,boat_running;
var shipING;
var groundING;
var invisibleGround;

function preload(){
 shipING = loadAnimation("ship-1.png","ship-2.png");
 groundING = loadImage("sea.png")

}

function setup(){
  createCanvas(2000,700)
  ground = createSprite(200,180,400,20);
  boat = createSprite(400,190,40,20)
  boat.addAnimation("nadar",shipING);
  ground.addImage(groundING);
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false 

}

function draw(){
  background("blue")
  ground.velocityX = -6;
  if (ground.x<0 ){
    ground.x = ground.width/2;
  }
  //gravedad


 boat.collide(invisibleGround);
 drawSprites();
}
