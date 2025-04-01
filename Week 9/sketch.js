function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(200,200,100,50)
  quad(150,200,250,200,250,250,150,250)
  ellipse(200,250,100,100)
  
  triangle(175,200+50,200,200+50,187.5,175+50)
  triangle(175+40,200+50,200+40,200+50,187.5+40,175+50)
  arc(200,260,75,60,PI/16,PI-PI/16)
  
  textSize(20);
  text('GOOBIE SCHNOOBERT!!!',20,40);
  
  textSize(10);
  text('by finn',25,50)
}