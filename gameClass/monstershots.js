class Monstershots extends Animation{
    constructor(start_posx, start_posy, shotype, shotdirection, explosion_type, shot_damage, shot_speed, width, height, burst_selection, burst_posx, burst_posy){
super();
    this.position = {
        x : start_posx,
        y : start_posy
    }
    this.velocity = {
        x : shot_speed,
        y : shot_speed
    }
if(width && height){
    this.width = width;
    this.height = height;
}else{
    this.width = 100;
    this.height = 200;
}

    this.start_position_setX = start_posx;
    this.start_position_setY = start_posy;
    this.height_negative = -200;
    this.clearRect = false;
    this.shot_speed_set = shot_speed; 

    this.collition = {
        shot_collided_with_monster : false,
        shot_collided_with_player : false,
        collision_posx : NaN,
        collision_posy : NaN
    }
this.m_damage = shot_damage;
this.calibrating_burst_x = burst_posx;
this.calibrating_burst_y = burst_posy;
this.bullet_image = shotype;
this.damages_total = shot_damage;


this.burst_send = true;
this.hiteffect = explosion_type;
this.shot_direction = shotdirection;
this.random = true;
this.randomNum;
this.damagesHit;
this.damage_effect;
this.gameFrameDamageAnimation = 0;
this.gameFrame = 0;
this.staggerFrame = 10;

this.deleteshot = false;   

this.selecting_burst = burst_selection;
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
    10 : "assets/shots/bean_10.png",
    11 : "assets/machinegun/bullet_11.png"
    }
    
}

bullethitmonsters(){return this.collition.shot_collided;}
getDamageHit(){return this.damagesHit;}
getGunDamage(){return this.m_damage;};
setDamageHit(damagehit){this.damagesHit = damagehit;}

shotsCreation(player, direction){

   if(!this.clearRect){
    this.shotDirectionUpDown(direction, "down");
    const shotimage = new Image()
    shotimage.src = this.shotImages[this.bullet_image];
    
    ctx.drawImage(shotimage, this.position.x, this.position.y ,this.width, this.height);
  
    }
}

randomHit(from, to){
    this.randomNum = Math.floor(Math.random() * to) + from   
    return this.randomNum;
  }





shotDirectionUpDown(direction, up_down){

    //moving the shot to the left
    if(up_down == "up"){
    if(direction == 0){
        this.position.y -= this.velocity.y;  
    }
    if(direction == 1){
    this.position.y -= this.velocity.y;
    this.position.x += 3;
    }
    if(direction == 2){
        this.position.y -= this.velocity.y;
        this.position.x += 6;  
    }
    if(direction == 3){
        this.position.y -= this.velocity.y;
    this.position.x += 9;
    }

// moving the shot to the right
if(direction == -1){
    this.position.y -= this.velocity.y;
    this.position.x -= 3;
}
if(direction == -2){
    this.position.y -= this.velocity.y;
    this.position.x -= 6;
}
if(direction == -3){
    this.position.y -= this.velocity.y;
    this.position.x -= 9;
}

    }

if(up_down == "down"){

    if(direction == 0){
        this.position.y += this.velocity.y;  
    }
    if(direction == 1){
    this.position.y += this.velocity.y;
    this.position.x += 3;
    }
    if(direction == 2){
        this.position.y += this.velocity.y;
        this.position.x += 6;  
    }
    if(direction == 3){
        this.position.y += this.velocity.y;
    this.position.x += 9;
    }

// moving the shot to the right
if(direction == -1){
    this.position.y += this.velocity.y;
    this.position.x -= 3;
}
if(direction == -2){
    this.position.y += this.velocity.y;
    this.position.x -= 6;
}
if(direction == -3){
    this.position.y += this.velocity.y;
    this.position.x -= 9;
}


}


//moving shot
//later on lets add shots moving side by side

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
   // console.log("Bullet banished.. Hit Monsters!");
    this.position.x = NaN;
    this.position.y = NaN;
    this.setCollitionWithMonster(false);
}  
if(this.position.y < - this.height){
    this.position.x = NaN;
    this.position.y = NaN;
   // console.log("deleted");
}

}

//DELETING SHOT
deletingShots(){
        setTimeout(()=>{
            this.deleteshot = true;
        }, 2000)
    }
getDeleteShotStatus(){ return this.deleteshot;}

getDamageNumberColor(){return this.DamageShowingcolorDefault;};
setDamageNumberColor(color){ this.DamageShowingcolorDefault = color;}


shot(player){
//single missile

this.setDamageNumberColor("red");
var totalDamage = player.body.m_damage + this.m_damage;
this.damages_total = this.randomHit(1, totalDamage);
this.shotsCreation(player,this.shot_direction);
this.damage_effect = this.hiteffect;
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
if(!explosion_one.getAnimationStatus()){
    this.explosion_animation_status = false
}else{
    this.explosion_animation_status = true;
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
        if(this.gameFrameDamageAnimation >= 100){
                    this.showDamage = false;
                    this.gameFrameDamageAnimation = 0;
                    this.animationSlowsGoesUp = 0
                }
        }


collisionMonsterShot(monsters){
                    // collision monster to shot
                     if(collisionTouch(this, monsters)){
                         monsters.setMonsterHealth(this.damages_total); // set up the hit depend on the shot
                         this.setCollitionWithMonster(true);
                         this.setDamageHit(this.damages_total);
                         this.setCollisionPosition(this.position.x, this.position.y);
                        monsters.setMonsterCollitionWithShot(true);
                     return true;
                     }else{
                        monsters.setMonsterCollitionWithShot(false);
                        
                       return false;
                     }
                   }

bursting_bullets(player,burst_animation){
burst_animation.burstEffect(1, this.start_position_setX + this.calibrating_burst_x, this.start_position_setY + this.calibrating_burst_y, this.burst_send, 1)
this.burst_send = false;
}

updateShot(player, explo_one_animation, explo_two_animation){
var speed = player.body.m_gun_speed + this.shot_speed_set;
this.velocity.x = speed;
this.velocity.y = speed;
this.bursting_bullets(player,explo_two_animation);
this.shot(player);
this.bulletHitMonsterEffect(explo_one_animation, explo_two_animation, this.getCollitionPosX(), this.getCollitionPosY() ,this.getCollitionWithMonster(), this.damage_effect, 1);
this.damageShowAnimation(this.getDamageHit(), this.getCollitionPosX(), this.getCollitionPosY(), this.getDamageNumberColor(),this.getCollitionWithMonster());
this.clearingBulletOnceHit();
this.deletingShots(explo_one_animation);
    }
}