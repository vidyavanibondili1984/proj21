
var bullet,wall;
var bullet_speed,bullet_weight;
var damage;
var thickness;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  bullet=createSprite(50, 200, 10, 50);
  bullet.shapeColor="white";
  bullet_speed=random(223,321);
  bullet_weight=random(30,52);
  
  bullet.velocityX=bullet_speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="(80,80,80)";
}

function draw() {
  background("black");  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    bullet.velocityY=0;
    damage=(0.5*bullet_weight*bullet_speed*bullet_speed)/(thickness*thickness*thickness);
  
  if(damage>10){
    wall.shapeColor="red";
  }
  else
  {
    wall.shapeColor="green";
  }
}
  drawSprites();
}
function hasCollided(lbullet,lwall)
{
  var bulletRightEdge=lbullet.x+lbullet.width;
  var leftwallEdge=lwall.x;
  if(bulletRightEdge>=leftwallEdge)
  {
   return true;
  }
else
  {
    return false;
    
  }
}