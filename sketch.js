function setup() {
  createCanvas(800,400);
}

function draw() {
  background(255,255,255);  
  rect (400,200,100,300);
  triangle(400, 200, 450, 20, 500, 200);
  rect(350,200,50,250);
  rect(500,200,50,250);
  rect(300,200,50,250);
  rect(550,200,50,250);
  triangle(300,200,325,100,350,200);
  triangle(550,200,575,100,600,200);
}