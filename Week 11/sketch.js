let x = 50;
let y = 50;
let xr = 100
let yr = 100
let b = 0 // the modifier
let c = 0 // to check whether we're ascending or descending
function setup() {
  createCanvas(400, 400);
  Rx = random(10)
  Ry = random(10)
  text('i couldnt figure out the 5 times things so you get sin instead', 200, 200)
}

function draw() {
  background(220);
  
  fill(0);
  ellipse(x, 200, 40, 40)
  ellipse(200, y, 40, 40)
  x = frameCount % width
  y = frameCount % height
  
  ellipse(xr, 200, 20, 20)
  ellipse(200, yr, 20, 20)
  
  xr = (Rx*frameCount) % width
  yr = (Rx*frameCount) % height
  
  ellipse(xr, yr, 20, 20);
  
  text('wawa', 200, 200)
  b = 100 * sin(frameCount / 100)
  textSize(b)
}