class shots extends Animation{
    constructor(start_posx, start_posy, shotype, shotdirection, explosion_type, shot_damage, shot_speed, energy_usage){
super();
    this.position = {
        x : 0,
        y : 0
    }
    this.velocity = {
        x : shot_speed,
        y : shot_speed
    }

    this.width = 100;
    this.height = 200;
    this.clearRect = false;
    this.shot_energy_usage = energy_usage;

    this.collition = {
        shot_collided_with_monster : false,
        shot_collided_with_player : false,
        collision_posx : NaN,
        collision_posy : NaN
    }
this.m_damage = shot_damage;
this.calibrating_starting_posx = start_posx;
this.calibrating_starting_posy = start_posy;
this.bullet_image = shotype;
this.damages_total = shot_damage;

this.hiteffect = explosion_type;
this.shot_direction = shotdirection;
this.random = true;
this.randomNum;
this.damagesHit;
this.damage_effect;
this.gameFrameDamageAnimation = 0;
this.gameFrame = 0;
this.staggerFrame = 10;

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
getDamageHit(){return this.damagesHit;}
getGunDamage(){return this.m_damage;};
setDamageHit(damagehit){this.damagesHit = damagehit;}

shotsCreation(player, direction){

   if(!this.clearRect){
    this.shotDirectionUp(direction);
    const shotimage = new Image()
    shotimage.src = this.shotImages[this.bullet_image];
    
    ctx.drawImage(shotimage, this.position.x, this.position.y ,this.width, this.height);

    //shot starting point
    if(this.position.y <  - this.height){
    this.position.y = player.position.y - this.calibrating_starting_posy;
    this.position.x =  this.calibrating_starting_posx + player.position.x;
        }   
    }
}

randomHit(from, to){
    this.randomNum = Math.floor(Math.random() * to) + from   
    return this.randomNum;
  }





shotDirectionUp(direction){

    //moving the shot to the left
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
    //console.log("Bullet banished..");
    this.position.x = - 50;
    this.position.y = - 50;
    this.setCollitionWithMonster(false);
}  
}

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
        if(this.gameFrameDamageAnimation >= 300){
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
updateShot(player, explo_one_animation, explo_two_animation){
//console.log(this.getCollitionWithMonster());
var speed = player.body.m_gun_speed;
this.velocity.x = speed;
this.velocity.y = speed;
this.shot(player)
this.bulletHitMonsterEffect(explo_one_animation, explo_two_animation, this.getCollitionPosX(), this.getCollitionPosY() ,this.getCollitionWithMonster(), this.damage_effect, 1)
this.damageShowAnimation(this.getDamageHit(), this.getCollitionPosX(), this.getCollitionPosY(), this.getDamageNumberColor(),this.getCollitionWithMonster());
this.clearingBulletOnceHit();


    }
}