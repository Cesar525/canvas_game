function monsterHit(animationOne, animationTwoo ,col, posx_, posy_){
    var animationTwo;
    animationOne.explosionEffect(5,  posx_ - 85, posy_ - 85, col);
    if(animationOne.getAnimationStatus() && col){
     animationTwoo.reset();
    animationTwo = true;
     }
      animationTwoo.explosionEffect(5, posx_ - 85, posy_ - 85, animationTwo);
      
}

function collisionMonster(monsters){
    
    if(collision.collisionTouch(shot, monsters)){
        monsters.setMonsterHealth(shot.m_damage); // set up the hit depend on the shot
        console.log(monsters.body.m_name + " ramina life =  " + monsters.getMonsterHealth());
       monsters.collision_bool = true;
    }else{
        monsters.collision_bool = false;
        monsters.collision_posX;
       monsters.collision_posY;
    }

   // bullet disapear collision
    shot.counter += 1;
    if(shot.counter > 5 && shot.clearRect){
        //console.log("reset");
        shot.clearRect = false;
     
   
    }
    //player collision
    if(collision.collisionTouch(player, monsters)){
        player.body.health -= 1; 
        console.log("you have been damage your current life is  = " + player.body.health);
        
    }
    
    //console.log(exp);
if(collision.collisionTouch(shot, monsters)){
shot.clearRect = true;
//console.log("Bullet banished..");
shot.position.x = -50;
shot.position.y = - 50;
}  


}
