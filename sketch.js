function setup() {
  createCanvas(800,400);
  fixed_rect = createSprite(200, 200, 100, 150);
  fixed_rect.shapeColor = "red"
  moving_rect = createSprite(300, 100, 150, 100)
  moving_rect.shapeColor = "blue"
}

function draw() {
  background("black");  
  moving_rect.x = mouseX
  moving_rect.y = mouseY

  if( (moving_rect.x-fixed_rect.x <= moving_rect.width/2 + fixed_rect.width/2) &&
  (fixed_rect.x-moving_rect.x <= moving_rect.width/2 + fixed_rect.width/2) && 
  (moving_rect.y-fixed_rect.y <= moving_rect.height/2 + fixed_rect.height/2) &&
  (fixed_rect.y-moving_rect.y <= moving_rect.height/2 + fixed_rect.height/2))
  {
    fixed_rect.shapeColor = "green";
    moving_rect.shapeColor = "green";
  }
  else
  {
    fixed_rect.shapeColor = "red";
    moving_rect.shapeColor = "blue";
  }
  drawSprites();
}

