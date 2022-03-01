var pelota1;
function preload(){
  pelota1Img=loadImage("pelota.png");
  pelota2Img=loadImage("basquet.png");
}
function setup(){
  var canvas = createCanvas(500,500);
pelota1 =new pelota();
pelota1.x=100;
pelota2=new pelota();

}

function draw(){
background("pink")
pelota1.display(pelota1Img);
pelota2.display(pelota2Img);

if(keyDown(LEFT_ARROW)){
  pelota1.x=pelota1.x-5;
}
if(keyDown(RIGHT_ARROW)){
  pelota1.x=pelota1.x+5;
}
if(keyDown(UP_ARROW)){
  pelota1.y=pelota1.y-5;
}
if(keyDown(DOWN_ARROW)){
  pelota1.y=pelota1.y+5;
}

if(keyDown("w")){
  pelota2.y=pelota2.y-5;
}
if(keyDown("s")){
  pelota2.y=pelota2.y+5;
}
if(keyDown("a")){
  pelota2.x=pelota2.x-5;
}
if(keyDown("d")){
  pelota2.x=pelota2.x+5;
}
}
