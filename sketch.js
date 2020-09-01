var fixedRect, movingRect;



function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite (200,100,50,80);
  movingRect = createSprite(200,400,80,50);

  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "red";

  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;
}

function draw() {
  background(255,255,255);  
  
  if (fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2){
      fixedRect.velocityX = fixedRect.velocityX * (-1);
      movingRect.velocityX = movingRect.velocityX * (-1);
    }   
  if (fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2) {
      fixedRect.velocityY = fixedRect.velocityY * (-1);
      movingRect.velocityY = movingRect.velocityY * (-1); 
  }

  
  drawSprites();
}