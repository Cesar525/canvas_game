class shots{
    constructor(){
     
    this.position = {
        x :  -100,
        y : -100
    }
    this.velocity = {
        x : 1,
        y : 1
    }
    this.m_damage;
    this.width = 50;
    this.height = 100;
    this.clearRect = false;

    this.collition = {
        shot_collided_with_monster : false,
        shot_collided_with_player : false,
        collision_posx : NaN,
        collision_posy : NaN
    }


    this.random = true;
    this.randomNum;
    this.damagesHit;
    this.damage_effect;
    this.gameFrameDamageAnimation = 0;
this.gameFrame = 0;
this.staggerFrame = 10

    this.counter = 0;
    // here we add all guns images sprites
    this.shotImages = {
    1 : "assets/shots/bean_1.png",
    2 : "assets/shots/bean_2.png",
    3 : "assets/shots/bean_3.png",
    4 : "assets/shots/bean_4.png",
    5 : "assets/shots/bean_5.png",
    6 : "assets/shots/bean_6.png",
    7 : "assets/shots/bean_7.png",
    8 : "assets/shots/bean_8.png",
    9 : "assets/shots/bean_9.png",
    10 : "assets/shots/bean_10.png"
    }
    }

bullethitmonsters(){return this.collition.shot_collided;}

shotSelection(player,select_shot, damage, speed){
if(select_shot && damage && speed ){
   if(!this.clearRect){
    this.velocity.x = speed;
    this.velocity.y = speed;
    this.shotDirectionUp();
    const shotimage = new Image()
    shotimage.src = this.shotImages[select_shot];
    ctx.drawImage(shotimage, this.position.x, this.position.y ,this.width, this.height);
this.m_damage = damage

    //shot starting point
    if(this.position.y <  - this.height){
    this.position.y = player.position.y - 25;
    this.position.x =  25 + player.position.x;
            }
            
        }
        
    }

}

randomHit(from, to){
    this.randomNum = Math.floor(Math.random() * to) + from   
    return this.randomNum;
  }



setDamageHit(damagehit){
    this.damagesHit = damagehit;
}
getDamageHit(){return this.damagesHit;}
shotDirectionUp(direction){
  this.position.y -= this.velocity.y;  
}
//collitions in and outputs
setCollisionPosition(posx, posy){
    this.collition.collision_posx = posx;
    this.collition.collision_posy = posy;
}

setCollitionWithMonster(input){this.collition.shot_collided_with_monster = input;};
getCollitionWithMonster(){return this.collition.shot_collided_with_monster;};
setCollitionWithPlayer(input){this.collition.shot_collided_with_player = input;};
getCollitionWithPlayer(){return this.collition.shot_collided_with_player;};
getCollitionPosX(){return this.collition.collision_posx;};
getCollitionPosY(){return this.collition.collision_posy;};
clearCollisionShot(){ 
    this.collition.collision_posx = NaN;
    this.collition.collision_posy = NaN;

}

clearingBulletOnceHit(){
       //bullet disapear collision
       this.counter += 1;
       if(this.counter > 5 && this.clearRect){
         //  console.log("reset");
           this.clearRect = false;
          
       }
    
if(this.getCollitionWithMonster()){
    this.clearRect = true;
    //console.log("Bullet banished..");
    this.position.x = - 50;
    this.position.y = - 50;
    this.setCollitionWithMonster(false);
}  
}

getDamageNumberColor(){return this.DamageShowingcolorDefault;};
setDamageNumberColor(color){ this.DamageShowingcolorDefault = color;}

gunTypes(player,selectingGun){
    switch(selectingGun){
case 1 : 
//single missile
this.setDamageNumberColor("red");
var gun_damage = 15;
var totalDamage = player.body.m_damage + gun_damage;
this.damages = this.randomHit(1, totalDamage);
this.shotSelection(player,2,this.damages, player.body.m_gun_speed);
this.damage_effect = 6;
break;
case 2 : 
this.setDamageNumberColor("#7e50ff");
var gun_damage = 25;
var totalDamage = player.body.m_damage + gun_damage;
this.damages = this.randomHit(1, totalDamage);
this.shotSelection(player,5,this.damages, player.body.m_gun_speed);
this.damage_effect = 7;
break;

    }
}

reset(){
    this.frameX = 0;
    this.frameY = 0;
    this.gameFrame = 0;
    this.staggerFrame = 1;
}

getAnimationStatus(){
    return this.onAnimation;
}


bulletHitMonsterEffect(explosion_one, explosion_two, posx, posy,collition,hiteffect, speed){
    var animationTwo;
   
    explosion_one.explosionEffect(hiteffect,posx - 100, posy - 100, collition, speed);
    if(explosion_one.getAnimationStatus() && collition){
     explosion_two.reset();
    animationTwo = true;
     }

      explosion_two.explosionEffect(hiteffect, posx - 100, posy - 100, animationTwo, speed);
}

damageShowAnimation(damage,pos_x, pos_y, color, if_true){
this.gameFrameDamageAnimation++;
if(if_true){this.showDamage = true;}


        if(this.showDamage){
            
            ctx.fillStyle = color;
            ctx.strokeStyle = "black"
            ctx.font = "40px anton";
            ctx.fillText("-"+ damage, pos_x , pos_y);
            ctx.strokeText("-" + damage, pos_x, pos_y);
                    
        } 
        if(this.gameFrameDamageAnimation >= 300){
                    this.showDamage = false;
                    this.gameFrameDamageAnimation = 0;
                    this.animationSlowsGoesUp = 0
                }
        }

collisionMonsterShot(monsters){
                    // collision monster to shot
                     if(collisionTouch(this, monsters)){
                         monsters.setMonsterHealth(this.m_damage); // set up the hit depend on the shot
                         this.setCollitionWithMonster(true);
                         this.setDamageHit(this.m_damage);
                         this.setCollisionPosition(this.position.x, this.position.y);
                        
                     return true;
                     }else{
                        
                       return false;
                     }
                   }
efffects(){
 
}
updateShot(explo_one_animation, explo_two_animation){
//console.log(this.getCollitionWithMonster());
this.bulletHitMonsterEffect(explo_one_animation, explo_two_animation, this.getCollitionPosX(), this.getCollitionPosY() ,this.getCollitionWithMonster(), this.damage_effect, 1)
this.damageShowAnimation(this.getDamageHit(), this.getCollitionPosX(), this.getCollitionPosY(), this.getDamageNumberColor(),this.getCollitionWithMonster());
this.clearingBulletOnceHit();


    }
}