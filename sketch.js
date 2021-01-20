var canvas;
var music;
var dangerBox;
var safeBox1;
var safeBox2;
var safeBox3;
var playBox;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(200,600);
 safeBox1 = createSprite(20, 595, 10, 40);
 safeBox1.shapeColor("blue");
 safeBox2 = createSprite(80, 595, 10, 40);
 safeBox2.shapeColor("green");
 safeBox3 = createSprite(180, 595, 10, 40);  
 safeBox3.shapeColor("violet");
 dangerBox = createSprite(140, 595, 10, 40);
 dangerBox.shapeColor("yellow") 
 playBox = createSprite(random(20, 190));
 playBox.velocityY = 5;
 
}

function draw() {
    background(rgb(0,0,0));
    
    createEdgeSprites(); 

 playBox.bounceOff(topEdge);
 playBox.bounceOff(bottomEdge);
 playBox.bounceOff(rightEdge);
 playBox.bounceOff(leftEdge);
 
 if (safeBox1.isTouching(playBox) && playBox.bounceOff(safeBox1)){
  playBox.shapeColor = ("blue"); 
 }
   
 if (safeBox2.isTouching(playBox) && playBox.bounceOff(safeBox2)){
    playBox.shapeColor = ("green"); 
   }
  
   if (safeBox1.isTouching(playBox) && playBox.bounceOff(safeBox1)){
    playBox.shapeColor = ("violet"); 
   }
    
  if (playBox.isTouching(dangerBox)){
   playBox.shapeColor = rgb (255, 128, 0);
   playBox.velocityX = 0;
   music.stop();
  }

}
