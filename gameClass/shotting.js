class shots{
    constructor(){
     
    this.position = {
        x :  -100,
        y : -100
    }
    this.velocity = {
        x : 20,
        y : 20
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

//Animation -> page
this.frameX = 0;
this.frameY = 0;
this.gameFrame = 0;
this.staggerFrame = 1;
this.show = false;
this.onAnimation = false;
this.animation_PosX = NaN;
this.animation_PosY = NaN;
this.gameFrameDamageAnimation = 0;
this.showDamage = false;

    this.random = true;
    this.randomNum;
    this.damagesHit;
    this.damage_effect;

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
   }  
   }


bulletHitMonsterEffect(hiteffect, speed){
    var animationTwo;
   
    this.explosionEffect(hiteffect,this.getCollitionPosX() - 100, this.collition.collision_posy - 100, this.collition.shot_collided_with_monster, speed);
    if(this.getAnimationStatus() && this.shot_collided_with_monster){
     this.reset();
    animationTwo = true;
     }
      this.explosionEffect(hiteffect, this.getCollitionPosX() - 100, this.getCollitionPosY() - 100, animationTwo, speed);
     
    }

    spritePage(sprite_path, posx, posy, sprite_page_width, sprite_page_height, sprite_count_width, sprite_count_height, sprite_size_w, sprite_size_h, speed, show){
        if(show){
            this.show = show;
        }
        if(this.show){
            const animation = new Image();
            if(speed){
        this.staggerFrame = speed;
            }
        animation.src = sprite_path;
        
        this.onAnimation = true;
        let m_width = sprite_page_width / sprite_count_width;
        let m_height = sprite_page_height/ sprite_count_height;
        let positionX = Math.floor(this.gameFrame/this.staggerFrame) % sprite_count_width;
        let positionY = Math.floor(this.gameFrame/(this.staggerFrame * sprite_count_width)) % sprite_count_height;
        
        this.animation_PosX = posx;
        this.animation_PosY = posy;
        ctx.globalAlpha = 1;
        ctx.drawImage(animation, 1 * (sprite_size_w * this.frameX), 1 * (sprite_size_h * this.frameY), m_width, m_height, this.animation_PosX, this.animation_PosY, m_width + 20, m_height + 20 );
        ctx.globalAlpha = 1;
        this.frameX = positionX;
        this.frameY = positionY;
        
        //console.log(" Y Frame = " + this.frameY);
        //console.log("X Frames = " + this.frameX);
        
        //console.log( "Showing" + this.frameX);
        this.gameFrame += 1;
        
        if(this.frameX >= sprite_count_width - 1 && this.frameY >= sprite_count_height - 1){
            this.show = false;
            this.reset();
            // console.log(" Y Frame SET = " + this.frameY);
            //console.log("X Frames SET = " + this.frameX);
            this.onAnimation = false;
        }else{
            return this.onAnimation;
        }
        }
    }


gunTypes(player,selectingGun){
    switch(selectingGun){
case 1 : 
//single missile
var gun_damage = 15;
var totalDamage = player.body.m_damage + gun_damage;
this.damages = this.randomHit(1, totalDamage);
this.shotSelection(player,2,this.damages, player.body.m_gun_speed);
this.damage_effect = 5;
break;
case 2 : 
var gun_damage = 25;
var totalDamage = player.body.m_damage + gun_damage;
this.damages = this.randomHit(1, totalDamage);
this.shotSelection(player,5,this.damages, player.body.m_gun_speed);
this.damage_effect = 7;
break;

    }
}


explosionEffect(effect, posx, posy, send, speed){
    switch(effect){
    case 1 :
    this.spritePage("assets/explosions/explosion_1.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 2 :
    this.spritePage("assets/explosions/explosion_2.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 3 : 
    this.spritePage("assets/explosions/explosion_3.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 4 : 
    this.spritePage("assets/explosions/explosion_4.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 5 : 
    this.spritePage("assets/explosions/explosion_5.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 6 : 
    this.spritePage("assets/explosions/explosion_6.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 7 : 
    
    this.spritePage("assets/explosions/explosion_7.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
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


bulletHitMonsterEffect(posx, posy,collition,hiteffect, speed){
    var animationTwo;
   
    this.explosionEffect(hiteffect,posx - 100, posy - 100, collition, speed);
    if(this.getAnimationStatus() && collition){
     this.reset();
    animationTwo = true;
     }
      this.explosionEffect(hiteffect, posx - 100, posy - 100, animationTwo, speed);
     
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
                if(this.gameFrameDamageAnimation >= 400){
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
                     
                     }else{
                       monsters.setMonsterCollitionWithShot(false); 
                       this.setCollitionWithMonster(false);  
                     }
                   }

updateShot(m){
//console.log(this.getCollitionWithMonster());
this.bulletHitMonsterEffect(this.getCollitionPosX(), this.getCollitionPosY() ,this.getCollitionWithMonster(), this.damage_effect, 2)
this.damageShowAnimation(this.getDamageHit(), this.getCollitionPosX(), this.getCollitionPosY(), "red",this.getCollitionWithMonster());
this.clearingBulletOnceHit();
this.collisionMonsterShot(monsters[m]);
    }
}