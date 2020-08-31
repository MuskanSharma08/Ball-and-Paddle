var ball,img,paddle;
function preload() {
  /* preload your images here of the ball and the paddle */
  ballImage=loadImage("ball.png");
  paddleImage=loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   /* create the Ball Sprite and the Paddle Sprite */
  ball = createSprite(200, 200, 20, 20);
  ball.addImage(ballImage);
  ball.velocityX = -2;
  paddle = createSprite(350, 200, 20, 100);
  paddle.addImage(paddleImage);
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  

}
function draw() {
  background(205,153,0);
  /* create Edge Sprites here */
   edges = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  if( ball.bounceOff(paddle)){
  randomVelocity();
  }
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  if(keyDown(UP_ARROW))
  {paddle.y = paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {paddle.y = paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{ball.velocityY = random (-4, 4); 
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

