// function monsterHit(animationOne, animationTwoo ,col, posx_, posy_, hiteffect, speed, shot){
//     var animationTwo;
    
//     animationOne.explosionEffect(hiteffect,  posx_ - 85, posy_ - 85, col, speed);
//     if(animationOne.getAnimationStatus() && col){
//      animationTwoo.reset();
//     animationTwo = true;
//      }
//       animationTwoo.explosionEffect(hiteffect, posx_ - 85, posy_ - 85, animationTwo, speed);
       
// }

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
    
    if(collision.collisionTouch(shot, monsters)){
        monsters.setMonsterHealth(shot.m_damage); // set up the hit depend on the shot
        console.log(monsters.body.m_name + " remaining life =  " + monsters.getMonsterHealth());
       monsters.collision_bool = true;
       monsters.collision_posX  = monsters.position.x;
      monsters.collision_posY = monsters.position.y;
      shot.collision_posX = shot.position.x;
      shot.collision_posY = shot.position.y;
    }else{
        monsters.collision_bool = false;
        
    }

   //bullet disapear collision
    shot.counter += 1;
    if(shot.counter > 5 && shot.clearRect){
        console.log("reset");
        shot.clearRect = false;
     
   
    }
   // player collision
    if(collision.collisionTouch(player, monsters)){
        player.body.health -= 1; 
        console.log("you have been damage your current life is  = " + player.body.health);
        
    }
    
  
if(collision.collisionTouch(shot, monsters)){
shot.clearRect = true;
console.log("Bullet banished..");
shot.position.x = -50;
shot.position.y = - 50;
}  


}
