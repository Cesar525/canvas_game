

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
    
    animationOne.explosionEffect(hiteffect,  posx_ - 100, posy_ - 100, col, speed);
    if(animationOne.getAnimationStatus() && col){
     animationTwoo.reset();
    animationTwo = true;
     }
      animationTwoo.explosionEffect(hiteffect, posx_ - 100, posy_ - 100, animationTwo, speed);
       
// if( animationOne.getAnimationStatus() == false && animationTwoo.getAnimationStatus() == false){
//   shot.clearCollisionShot();
// }

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


function collisionMonsterShot(monsters, player, shot){
   // collision monster to shot
    if(collisionTouch(shot, monsters)){
        monsters.setMonsterHealth(shot.m_damage); // set up the hit depend on the shot
      //console.log(monsters.body.m_name + " remaining life =  " + monsters.getMonsterHealth());
       monsters.setMonsterCollitionBool(true);
      console.log(monsters.body.m_name + " got hit by  == " + player.m_name);
       monsters.collision_posX  = monsters.position.x;
      monsters.collision_posY = monsters.position.y;
      
   shot.getCollisionPosition(shot.position.x, shot.position.y);
    }else{
        monsters.collision_bool = false;
    
    }


   //bullet disapear collision
    shot.counter += 1;
    if(shot.counter > 5 && shot.clearRect){
      //  console.log("reset");
        shot.clearRect = false;
       
   
    }
 
if(collisionTouch(shot, monsters)){
shot.clearRect = true;
console.log("Bullet banished..");
shot.position.x = -50;
shot.position.y = - 50;
}  
}


function playerCollitionMonsters(player, monsters){
  // player collision

var gameFrame = 0;
gameFrame++;
var staggerFrame = 10;
var pos = Math.floor(gameFrame/staggerFrame) % 30;

//WORKINNG ON
//console.log(pos);
  if(collisionTouch(player, monsters)){
   // if((Math.floor(gameFrame/staggerFrame) % 2) == 2){
    player.playerGetDamage(1); 
    console.log("you have been damage your current life is  = " + player.body.health);
    
 // }
}
}
