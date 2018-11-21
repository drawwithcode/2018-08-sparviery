var stato=0;

var r1=0;
var g1=0;
var b1=255;

var r2=255;
var g2=0;
var b2=0;

var r3=0;
var g3=255;
var b3=0;
function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight,WEBGL);

  rectMode(CENTER);
  colorMode(RGB);

  // by defaults equals to 30
  setShakeThreshold(40);



}

function draw() {
  // put drawing code here
  background(220);
  //translate(width/2,height/2);

  stroke(40);

  textSize(100);
  text('SHAKE', 0, 0);

///toriii
//blue
  push();
  fill(r1,g1,b1);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(height/5, height/15);
  pop();

//red
  push();
  translate(90,160);
  fill(r2,g2,b2);
  rotateY(frameCount * 0.01);
  //rotateZ(frameCount * 0.01);
  torus(height/12, height/18);
  pop();

//green
  push();
  translate(-50,-130);
  fill(r3,g3,b3);
  rotateX(frameCount * 0.01);
  //rotateZ(frameCount * 0.01);
  torus(height/7, height/20);
  pop();
}

function deviceShaken() {
    if (stato==0) {
    stato=1;
    r1=255;
    g1=0;
    b1=0;
    r2=0;
    g2=255;
    b2=0;
    r3=0;
    g3=0;
    b3=255;
  } else if (stato==1){
    stato=2;
    r1=0;
    g1=255;
    b1=0;
    r2=0;
    g2=0;
    b2=255;
    r3=255;
    g3=0;
    b3=0;
  } else if (stato==2){
    stato=0;
    r1=0;
    g1=0;
    b1=255;    
    r2=255;
    g2=0;
    b2=0;
    r3=0;
    g3=255;
    b3=0;
  }
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
