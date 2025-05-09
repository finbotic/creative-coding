let MOUSEPRESS = 0

let bound = 40
let BOUNDS = 0
let OBJcount = 0

let POS = [];
let DIS = [];
let dis = [];
let GEE = 0.1
let diagnostic = 1
let colour = 0
let colovr = ' '
function PositionConstructor(positionX,positionY, VelX,VelY, AccX,AccY, pickup,index,mass){
  let pos = [];
  pos[0] = createVector(positionX,positionY)
  pos[1] = createVector(0,0)

  pos[2] = positionX - (bound+mass)
  pos[3] = positionX + (bound+mass)
  pos[4] = positionY - (bound+mass)
  pos[5] = positionY + (bound+mass)
  
  pos[6] = createVector(AccX,AccY)
  pos[7] = 
  
  pos[8] = 
  pos[9] = 
  
  pos[10] = pickup
  pos[11] = index
  pos[12] = mass
  POS[index] = pos
  OBJcount++
}

// 0 is x, 1 is y


let mouseXvelocity = 0
let mouseYvelocity = 0
let debug = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function debugPrint(i){
  print('')
  print('debug value listing')
  print('-----------------------------')
  print('MOUSEPRESS = ' + MOUSEPRESS) 
  print('mouseX = ' + mouseX)
  print('mouseY = ' + mouseY)
  print('')
  print('index = ' + POS[i][11])
  print('POS[' + i + '] x = ' + POS[i][0].x)
  print('POS[' + i + '] y = ' + POS[i][0].y)
  print('POS[' + i + '] V_x = ' + POS[i][1].x)
  print('POS[' + i + '] V_y = ' + POS[i][1].y)
  print('POS[' + i + '] a_x = ' + POS[i][6].x)
  print('POS[' + i + '] a_y = ' + POS[i][6].y)
  print('POS[' + i + '] minX = ' + POS[i][2])
  print('POS[' + i + '] maxX = ' + POS[i][3])
  print('POS[' + i + '] minY = ' + POS[i][4])
  print('POS[' + i + '] maxY = ' + POS[i][5])
  print('POS[' + i + '] pickup = ' + POS[i][10])
  print('mouseXvelocity = ' + POS[i][0].x)
  print('mouseYvelocity = ' + POS[i][0].y)
}

function debugSPEED(){
  for(i = 0; i < OBJcount; i++){
  POS[i][1].x = random(-1,1)
  POS[i][1].y = random(-1,1)
  }
}
function debugPOSITION(){
  for(i = 0; i < OBJcount; i++){
  POS[i][0].x = random(0,windowWidth)
  POS[i][0].y = random(0,windowHeight)
  }
}

function drawArrow(base, vec, mass, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x,base.y)
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    GEE = GEE + 0.01
    print(GEE)
  }
  if(keyCode === DOWN_ARROW){
    GEE = GEE - 0.01
    print(GEE)
  }
  if(keyCode === LEFT_ARROW){
    if(colour == 0){
      colour = 6
    }else{
      colour = colour - 1
    }
      switch (colour) {
              case 0:
              colovr = 'red'
              break;
              case 1:
              colovr = 'blue'
              break;
              case 2:
              colovr = 'lime'
              break;
              case 3:
              colovr = 'yellow'
              break;
              case 4:
              colovr = 'cyan'
              break;
              case 5:
              colovr = 'magenta'
              break;
              case 6:
              colovr = 'white'
              break;
             }
  }
  if(keyCode === RIGHT_ARROW){
    if(colour == 6){
      colour = 0
    }else{
      colour = colour + 1
    }
      switch (colour) {
              case 0:
              colovr = 'red'
              break;
              case 1:
              colovr = 'blue'
              break;
              case 2:
              colovr = 'lime'
              break;
              case 3:
              colovr = 'yellow'
              break;
              case 4:
              colovr = 'cyan'
              break;
              case 5:
              colovr = 'magenta'
              break;
              case 6:
              colovr = 'white'
              break;
             }
  }
  
  if(key === 'd'){
    if(debug == 0){
      debug = 1
    }
    else{
      debug = 0
    }
  }
  if(key === 'b'){
    if(BOUNDS == 0){
      BOUNDS = 1
    }
    else{
      BOUNDS = 0
    }
  }
switch(debug){
  case 0:
switch (key) {
  case "1":
    new PositionConstructor(mouseX,mouseY, 0,0, 0,0, 0,OBJcount,10)
    break;
  case "2":
    new PositionConstructor(mouseX,mouseY, 0,0, 0,0, 0,OBJcount,20)
    break;
  case "3":
    new PositionConstructor(mouseX,mouseY, 0,0, 0,0, 0,OBJcount,30)
    break;
  case "4":
    new PositionConstructor(mouseX,mouseY, 0,0, 0,0, 0,OBJcount,40)
    break;
  case "5":
    new PositionConstructor(mouseX,mouseY, 0,0, 0,0, 0,OBJcount,50)
    break;
  case "6":
    new PositionConstructor(mouseX,mouseY, 0,0, 0,0, 0,OBJcount,60)
    break;
  case "7":
    new PositionConstructor(mouseX,mouseY, 0,0, 0,0, 0,OBJcount,70)
    break;
  case "8":
    new PositionConstructor(mouseX,mouseY, 0,0, 0,0, 0,OBJcount,80)
    break;
  case "9":
    new PositionConstructor(mouseX,mouseY, 0,0, 0,0, 0,OBJcount,90)
    break;
  case "0":
    new PositionConstructor(mouseX,mouseY, 0,0, 0,0, 0,OBJcount,100)
    break;
  default:
    text = "literally how";
}
break;
case 1:
switch (key) {
  case "1":
    debugPrint(0)
    break;
  case "2":
    debugPrint(1)
    break;
  case "3":
    debugPrint(2)
    break;
  case "4":
    debugPrint(3)
    break;
  case "5":
    debugPrint(4)
    break;
  case "6":
    debugPrint(5)
    break;
  case "7":
    debugPrint(6)
    break;
  case "8":
    debugPrint(7)
    break;
  case "9":
    debugPrint(8)
    break;
  case "0":
    debugPrint(9)
    break;
  default:
    text = "No object with that index";
}
}
  if(key === 't'){
    debugSPEED()
  }
  if(key === 'r'){
    debugPOSITION()
  }
}
  function mousePressed() {
  MOUSEPRESS = 1
  for(i = 0; i < OBJcount; i++){
    if(mouseX > POS[i][2] && mouseX < POS[i][3] && mouseY > POS[i][4] && mouseY < POS[i][5]){
      POS[i][10] = 1
    }
  }
}
  function mouseReleased() {
  MOUSEPRESS = 0
    for(i = 0; i < OBJcount; i++){
    if(POS[i][10] == 1){
    POS[i][0].x = mouseX
    POS[i][0].y = mouseY
      POS[i][2] = mouseX - (bound+POS[i][12])/2
      POS[i][3] = mouseX + (bound+POS[i][12])/2
      POS[i][4] = mouseY - (bound+POS[i][12])/2
      POS[i][5] = mouseY + (bound+POS[i][12])/2
    
    POS[i][1].x = mouseXvelocity/5
    POS[i][1].y = mouseYvelocity/5
    }
  }
}

function objectdraw(posx, posy, mass) {
    fill(255)
  ellipse(posx,posy,mass/2)
}

function DEBUGproxdraw(posx, posy, mass){
  fill(150)
  ellipse(posx,posy,(mass+bound)/2)
}

function draw() {

  background(20);
for(a = 0; a < OBJcount; a++){
    DIS[a] = [];
  for(b = 0; b < OBJcount; b++){
    DIS[a][b] = p5.Vector.dist(POS[a][0],POS[b][0])
    }
  }
  for(i = 0; i < OBJcount; i++){
  if(MOUSEPRESS == 1 && (mouseX > POS[i][2] && mouseX < POS[i][3] && mouseY > POS[i][4] && mouseY < POS[i][5])){
    
    
    POS[i][0].x = mouseX
    POS[i][0].y = mouseY
    POS[i][2] = mouseX - 10000
    POS[i][3] = mouseX + 10000
    POS[i][4] = mouseY - 10000
    POS[i][5] = mouseY + 10000
    POS[i][1].x = 0
    POS[i][1].y = 0
    
    if(debug==1){
    DEBUGproxdraw(POS[i][0].x,POS[i][0].y,POS[i][12])
    }
    objectdraw(POS[i][0].x,POS[i][0].y,POS[i][12])
    
    
  }
}
  for(i = 0; i < OBJcount; i++){
  if(MOUSEPRESS == 1 && !(mouseX > POS[i][2] && mouseX < POS[i][3] && mouseY > POS[i][4] && mouseY < POS[i][5]) || MOUSEPRESS == 0){
    Rx = 0
    Ry = 0
    Rm = 0
    RAD = 0
    resultant1 = createVector(0,0)
    resultant2 = createVector(0,0)
    for(d=0; d<OBJcount; d++){
    if(d != i){
    Rx = Rx + POS[d][0].x
    Ry = Ry + POS[d][0].y
	RAD = RAD + DIS[i][d]
    }
    }
    for(c=0; c<OBJcount; c++){
	if(c != i){
    
    drawArrow(POS[i][0],createVector(-(POS[i][0].x-POS[c][0].x)/2,-(POS[i][0].y-POS[c][0].y)/2), POS[c][12],colovr)
	resultant1.x = resultant1.x + (POS[i][0].x-POS[c][0].x)
    resultant1.y = resultant1.y + (POS[i][0].y-POS[c][0].y)
    resultant1.setMag((POS[c][12]*GEE)/(DIS[i][c]^2))
    resultant2.x = resultant2.x + resultant1.x
    resultant2.y = resultant2.y + resultant1.y
	}
}
  POS[i][6].x = -resultant2.x
  POS[i][6].y = -resultant2.y

  POS[i][1].x = POS[i][1].x + POS[i][6].x
  POS[i][1].y = POS[i][1].y + POS[i][6].y
  

  if(BOUNDS == 1){
    if(POS[i][0].x < 0){
       POS[i][0].x = windowWidth
       }
    if(POS[i][0].y < 0){
       POS[i][0].y = windowHeight
       }
    if(POS[i][0].x > windowWidth){
       POS[i][0].x = 0
       }
    if(POS[i][0].y > windowHeight){
       POS[i][0].y = 0
       }
  }
if(BOUNDS == 0){
    if(POS[i][0].x < 0){
       POS[i][0].x = 0
       POS[i][1].x = -POS[i][1].x+POS[i][1].x/1.2
       }
    if(POS[i][0].y < 0){
       POS[i][0].y = 0
       POS[i][1].y = -POS[i][1].y+POS[i][1].y/1.2
       }
    if(POS[i][0].x > windowWidth){
       POS[i][0].x = windowWidth
       POS[i][1].x = -POS[i][1].x+POS[i][1].x/1.2
       }
    if(POS[i][0].y > windowHeight){
       POS[i][0].y = windowHeight
       POS[i][1].y = -POS[i][1].y+POS[i][1].y/1.2
       }
  }
    POS[i][0] = POS[i][0].add(POS[i][1])
      POS[i][2] = POS[i][0].x - (bound+POS[i][12])/2
      POS[i][3] = POS[i][0].x + (bound+POS[i][12])/2
      POS[i][4] = POS[i][0].y - (bound+POS[i][12])/2
      POS[i][5] = POS[i][0].y + (bound+POS[i][12])/2
    if(debug==1){
    DEBUGproxdraw(POS[i][0].x,POS[i][0].y,(bound+POS[i][12])/2)
    }
    objectdraw(POS[i][0].x,POS[i][0].y,POS[i][12])
    
    POS[i][10] = 0

  }
  
}
  
  
  mouseXvelocity = mouseX - pmouseX
  mouseYvelocity = mouseY - pmouseY
}
  

