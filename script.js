let ballX = 200;
let ballY = 200;
let speedX = 2;
let speedY = 3;
function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(220);

  textSize(10);
  textAlign(CENTER, CENTER);
  stroke(0);
  fill(0,0,255)
  // creates a line along x at every 20
  for (let x = 0; x <= width; x += 20) {
    line(x, 0, x, height);
    text(x, x, 10);
  }

  // creates a line along y at every 20
  for (let y = 0; y <= height; y += 20) {
    line(0, y, width, y);
    text(y, 10, y);
  }

  let xCoord = mouseX;
  let yCoord = mouseY;

  fill(0, 255, 0);
  ellipse(xCoord, yCoord, 8, 8);
  text(`(${xCoord}, ${yCoord})`, xCoord + 10, yCoord - 10);

  fill(255, 0, 0);
  ellipse(ballX, ballY, 15,15);

  ballX += speedX;
  ballY += speedY;
  
  if (ballX > width || ballX < 0) {
    // if it hits the left or right wall switch move other direction
    speedX *= -1;
  }

  if (ballY > height || ballY < 0) {
    // if it hits the bottom or top wall switch move other direction
    speedY *= -1;
  }

}
