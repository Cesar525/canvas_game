

function collisionTouch(obj1, obj2){
  var player_posx1 = obj1.position.x;
  var player_posx2 = obj1.position.x + obj1.width;
  var playerposty1 = obj1.position.y;
  var playerposty2 = obj1.position.y + obj1.height;
  var monster_posx1 = obj2.position.x;
  var monster_posx2 = obj2.position.x + obj2.width; 
  var monsterposty1 = obj2.position.y;
  var monsterposty2 = obj2.position.y + obj2.height;
  var touch_x = false;
  var touch_y = false;
  if(player_posx1 <= monster_posx2 && player_posx1 >= monster_posx1 || player_posx2 <= monster_posx2 && player_posx2 >= monster_posx1){
      touch_x = true;
  }
  if(playerposty1 <= monsterposty2 && playerposty1 >= monsterposty1 || playerposty2 <= monsterposty2 && playerposty2 >= monsterposty1){
      touch_y = true;
  }

  if(touch_x && touch_y){
    // console.log("TOUCHING AHHHHHHHHHHHHHHHHHHHHH");
      return true;
  }else{
      return false;
  }
}



function bulletHitMonsterEffect(animationOne, animationTwoo ,col, posx_, posy_, hiteffect, speed, shot){
    var animationTwo;
    
    animationOne.explosionEffect(hiteffect,  posx_ - 100, posy_ - 100, col, speed);
    if(animationOne.getAnimationStatus() && col){
     animationTwoo.reset();
    animationTwo = true;
     }
      animationTwoo.explosionEffect(hiteffect, posx_ - 100, posy_ - 100, animationTwo, speed);
}

function monsterDeathExplosion(animationOne,col, posx_, posy_){  
    animationOne.explosionEffect(3,  posx_ - 85, posy_ - 85, col);
}


function collisionMonsterShot(monsters,shot, hitDamageAnimations){
   // collision monster to shot
    if(collisionTouch(shot, monsters)){
        monsters.setMonsterHealth(shot.m_damage); // set up the hit depend on the shot
        shot.setDamageHit(shot.m_damage);
        monsters.collition.collition_with_shot = true;
       monsters.collition.collition_posX  = monsters.position.x;
       monsters.collition.collition_posY = monsters.position.y;   
    shot.setCollisionPosition(shot.position.x, shot.position.y);
    shot.collition.shot_collided = true;
    hitDamageAnimations.damageShowAnimation(shot.m_damage,shot.collition.collision_posx, shot.collition.collision_posy -= backg.velocity.y, "white", monsters, shot);
console.log(collisionTouch(shot, monsters));
    }else{
      monsters.collition.collition_with_shot = false; 
      shot.collition.shot_collided = false;  
    }

   //bullet disapear collision
    shot.counter += 1;
    if(shot.counter > 5 && shot.clearRect){
      //  console.log("reset");
        shot.clearRect = false;
       
    }
 
if(collisionTouch(shot, monsters)){
shot.clearRect = true;
//console.log("Bullet banished..");
shot.position.x = -50;
shot.position.y = - 50;
}  
}







