var bg,zombie
var shooter,shooting

function preload(){

  bg = loadImage("./assets/bg.jpg")
  zombie = loadImage("./assets/zombie.png")
  shooter = loadImage("./assets/shooter_2.png")
}

function setup() {
  createCanvas(1400,500);
  
  


  player = createSprite(200, 400, 50, 50);
  player.addImage(shooter)
  player.scale = 0.3


  

}

function draw() {
  background(bg);  

   
  if(keyDown("RIGHT_ARROW")){
    player.x += 10
  }
  if(keyDown("LEFT_ARROW")){
   player.x -= 10
  }
  
  
  drawSprites();

 
}