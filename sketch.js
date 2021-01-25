var back;
function preload(){
back=loadImage("dark.png");
}
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES);
}

function draw() {


  background(back); 

  var sec=second();
var hr=hour();
var min=minute();
var secondAngle;
  
push()
strokeWeight(8);
stroke('#05c5e2');
noFill();

translate(200,200)
rotate(-90)
secondAngle = map(sec,0,60,0,360);
arc(0,0,300,300,0,secondAngle);


stroke('#00ffb5');
var  minuteAngle=map(min,0,60,0,360);
arc(0,0,280,280,0,minuteAngle);

stroke("white")
var hourAngle =map(hr%12,0,12,0,360);
arc(0,0,260,260,0,hourAngle);
pop();

push()
translate(200,200)
rotate(-90)
rotate(secondAngle);
strokeWeight(8)
stroke('#05c5e2');
line(0,0,100,0);
pop();


push()
translate(200,200)
rotate(-90)
rotate(minuteAngle);
strokeWeight(8)
stroke('#00ffb5');
line(0,0,75,0);
pop();


push()
translate(200,200)
rotate(-90)
rotate(hourAngle);
strokeWeight(8)
stroke("white");
line(0,0,50,0);
pop();
fill("white")
textFont('poppins')
textSize(20)
text(hr + ":"+min+":"+sec,325,20);

  drawSprites();
}