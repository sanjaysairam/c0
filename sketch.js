var ship,shipAnimation ;
var sea,seaImage;

function preload() {
  shipAnimation = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  

  seaImage = loadImage("sea.png")
 
}

function setup() {
  createCanvas(400,400);

  //create a ship sprite
  ship = createSprite(80,100,10,50);
  ship.addAnimation("ship",shipAnimation);
  ship.scale = 0.3;
  
  //create a sea sprite
  sea = createSprite(200,180,400,20);
  sea.addImage("sea",seaImage);
  sea.x = sea.width/2;
  sea.velocityX = -4;
  
 
  
}

function draw() {
  background("blue");
  console.log(ship.x)



 

  if (sea.x < 0) {
   sea.x = sea.width/2;
  }
    
  ship.collide(sea);
  drawSprites();
}
