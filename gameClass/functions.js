

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



function monsterHit(animationOne, animationTwoo ,col, posx_, posy_, hiteffect, speed, shot){
    var animationTwo;
    
    animationOne.explosionEffect(hiteffect,  posx_ - 85, posy_ - 85, col, speed);
    if(animationOne.getAnimationStatus() && col){
     animationTwoo.reset();
    animationTwo = true;
     }
      animationTwoo.explosionEffect(hiteffect, posx_ - 85, posy_ - 85, animationTwo, speed);
       
}

function monsterDeathExplosion(animationOne, animationTwoo ,col, posx_, posy_){
    var animationTwo;
    animationOne.explosionEffect(3,  posx_ - 85, posy_ - 85, col);
    if(animationOne.getAnimationStatus() && col){
     animationTwoo.reset();
    animationTwo = true;
     }
      animationTwoo.explosionEffect(3, posx_ - 85, posy_ - 85, animationTwo);
      
}

function playerDeathExplosion(animationOne, animationTwoo ,col, posx_, posy_){
    var animationTwo;
    animationOne.explosionEffect(3,  posx_ - 85, posy_ - 85, col);
    if(animationOne.getAnimationStatus() && col){
     animationTwoo.reset();
    animationTwo = true;
     }
      animationTwoo.explosionEffect(2, posx_ - 85, posy_ - 85, animationTwo);
      
}

function collisionMonster(monsters, player, shot){
   // collision monster to shot
    if(collisionTouch(shot, monsters)){
        monsters.setMonsterHealth(shot.m_damage); // set up the hit depend on the shot
      //  console.log(monsters.body.m_name + " remaining life =  " + monsters.getMonsterHealth());
       monsters.setMonsterCollitionBool(true);
       monsters.collision_posX  = monsters.position.x;
      monsters.collision_posY = monsters.position.y;
      
   shot.getCollisionPosition(shot.position.x, shot.position.y);
    }else{
        monsters.collision_bool = false;
      shot.clearCollisionShot();
    }
//console.log("bool Player " + player.m_name + " == " + monsters.collision_bool);

   //bullet disapear collision
    shot.counter += 1;
    if(shot.counter > 5 && shot.clearRect){
      //  console.log("reset");
        shot.clearRect = false;
       
   
    }
   // player collision
    if(collisionTouch(player, monsters)){
        player.body.health -= 1; 
        console.log("you have been damage your current life is  = " + player.body.health);
        
    }
    
  
if(collisionTouch(shot, monsters)){
shot.clearRect = true;
console.log("Bullet banished..");
shot.position.x = -50;
shot.position.y = - 50;
}  


}
