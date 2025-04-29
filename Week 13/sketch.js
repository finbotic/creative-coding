let x = 25;
let y = 200;
let xr = 100
let yr = 100
let b = 0 // the modifier
let c = 0 // to check whether we're ascending or descending
let mult = 2.5
let MOUSEPRESS = 0
let WIN = 0
let WON = 0

function setup() {
  createCanvas(400, 400);
  Rx = [];
  Rx[0] = random(1,2);
  Rx[1] = random(1,2);
  Rx[2] = random(1,2);
  Rx[3] = random(1,2);
  Rx[4] = random(1,2);
  Rx[5] = random(1,2);
  RCr = random(255);
  RCb = random(255);
  RCg = random(255);
  ObstacleY = [];
  ObstacleY[0] = 75;
  ObstacleY[1] = 125;
  ObstacleY[2] = 175;
  ObstacleY[3] = 225;
  ObstacleY[4] = 275;
  ObstacleY[5] = 325;
}

  function mousePressed() {
  MOUSEPRESS = 1
}
  function mouseReleased() {
    MOUSEPRESS = 0
}

function playerdraw(
  posx,
  posy
) {
    fill(0)
  ellipse(posx,posy,10,10)
}

function exitdraw() {
  fill(0,255,0)
  quad(395,150,400,150,400,250,395,250)
}

function borderdraw() {
  fill(0)
  quad(0,398,0,400,400,400,400,398)
  quad(398,0,400,0,400,400,398,400)
  quad(2,0,0,400,0,0,2,400)
  quad(0,0,400,0,400,2,0,2)
}

function obstacledraw(
  x,
  randomOffset,
  randomMult
) {
    fill(random(255), random(255), random(255));
    ellipse(x, randomOffset+(randomMult*10), 20, 20); 
}

function wintext() {
    fill(0,255,0)
  text('yAAAAAAAAYY you win!!',200,200)
}

function idiottext() {
  text('why did you do that. you unwon. you`re STUPID.',100,200)
}

function draw() {
  if(WIN != 1)
  {
  background(220);
  
  rx = [];
  
  rx[0] = (Rx[0]*mult*frameCount) % height
  rx[1] = (Rx[1]*mult*frameCount) % height
  rx[2] = (Rx[2]*mult*frameCount) % height
  rx[3] = (Rx[3]*mult*frameCount) % height
  rx[4] = (Rx[4]*mult*frameCount) % height
  rx[5] = (Rx[5]*mult*frameCount) % height
  
  for(var i = 0; i<6; i++){
    obstacledraw(ObstacleY[i],rx[i],Rx[i])
  }
  
  if(MOUSEPRESS == 1){
  ellipse(mouseX,mouseY,30,30)
  }
  
  playerdraw(x,y)
  exitdraw()
  borderdraw()
    
  if(WON==1){
    fill(255,0,0)
    idiottext()
  }
    
  }
  else
    if(WIN==1){
  background(0,137,0)
  wintext()
  WON=1
    }
  }


function keyPressed() {
if (key === 'w') {
    y = y-10
  print(y)
}
if (key === 's') {
    y = y+10
  print(y)
}
if (key === 'a') {
    x = x-10
  print(x)
}
if (key === 'd') {
    x = x+10
  print(x)
  print(WIN)
}
if(x == 395 ){
 WIN=1 
}
  else
    {
      WIN=0
    }

}