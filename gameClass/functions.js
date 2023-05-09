

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

function bulletHitMonsterEffect(hitanimationOne, hitanimationTwo,posx, posy,collition,hiteffect, speed){
  var animationTwo;
 
  hitanimationOne.explosionEffect(hiteffect,posx - 100, posy - 100, collition, speed);
  if(hitanimationOne.getAnimationStatus() && collition){
   hitanimationTwo.reset();
  animationTwo = true;
   }
    hitanimationTwo.explosionEffect(hiteffect, posx - 100, posy - 100, animationTwo, speed);
   
  }


function monsterDeathExplosion(animationOne,col, posx_, posy_){  
    animationOne.explosionEffect(3,  posx_ - 85, posy_ - 85, col);
}


function collisionMonsterShot(monsters,shot){
   // collision monster to shot
    if(collisionTouch(shot, monsters)){
        monsters.setMonsterHealth(shot.m_damage); // set up the hit depend on the shot
        shot.setCollitionWithMonster(true);
        shot.setDamageHit(shot.m_damage);
        shot.setCollisionPosition(shot.position.x, shot.position.y);
    
    }else{
      monsters.setMonsterCollitionWithShot(false); 
      shot.setCollitionWithMonster(false);  
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







