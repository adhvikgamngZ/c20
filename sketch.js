var movingRect,fixedRect

function setup() {
  createCanvas(800,600);
  movingRect=createSprite(400, 50, 50, 50);
  movingRect.shapeColor="red"
  fixedRect=createSprite(400, 550, 50, 50);
  fixedRect.shapeColor="red"
  movingRect.velocityY=5
  fixedRect.velocityY=-5
}

function draw() {
  background(0);
  if(movingRect.y-fixedRect.y===movingRect.height/2+fixedRect.height/2)  {
    movingRect.velocityY=-movingRect.velocityY
    fixedRect.velocityY=-fixedRect.velocityY
  } 
  drawSprites();
}