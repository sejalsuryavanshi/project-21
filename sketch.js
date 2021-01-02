var bullet,wall;
var speed,weight;
var thickness;


function setup() {
  createCanvas(1600,400);
 
  thickness=random(22,83);
  speed=random(25,31);
  weight=random(400,1500);

  bullet=createSprite(200, 200, 50,50);
 
 wall=createSprite(1200, 200, thickness, height/2);

 bullet.velocityX=5;
}

function draw() {
  background("black"); 

 if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){

      wall.shapeColor=color(255,0,0);

    }if(damage<10){
     
      wall.shapeColor=color(0,255,0);

    }
  }
 
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/thickness*thickness*thickness;
    if(damage>10){

      wall.shapeColor=color(255,0,0);

    }if(damage<10){
     
      wall.shapeColor=color(0,255,0);

    }
  }
   

  
  drawSprites();

  hasCollided(bullet,wall);
  
}

function hasCollided(lbullet,lwall){

  bulletRightEdge=lbullet.X+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){

    return true
  }

  return false;
}

