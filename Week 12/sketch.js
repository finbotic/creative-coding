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
  Ra = random(1,2)
  Rb = random(1,2)
  Rc = random(1,2)
  Rd = random(1,2)
  Re = random(1,2)
  Rf = random(1,2)
  RCr = 
  RCb = random(255)
  RCg = random(255)
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
  
  ar = (Ra*mult*frameCount) % height
  br = (Rb*mult*frameCount) % height
  cr = (Rc*mult*frameCount) % height
  dr = (Rd*mult*frameCount) % height
  er = (Re*mult*frameCount) % height
  fr = (Rf*mult*frameCount) % height
  
  obstacledraw(75,ar,Ra)
  obstacledraw(125,br,Rb)
  obstacledraw(175,cr,Rc)
  obstacledraw(225,dr,Rd)
  obstacledraw(275,er,Re)
  obstacledraw(325,fr,Rf)
  
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