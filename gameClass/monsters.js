

class Monsters{
constructor( id, sprite,  pos_x, pos_y, health, name, speed, color, movements, s_width, s_height, damage){
  
this.position = {
    x : pos_x,
    y : pos_y
},
this.velocity = {
    x : speed,
    y : speed
},
this.body = {
    m_name : name,
    m_health : health,
    m_damage : damage,
    m_dead : false,
    m_deadPosX : NaN,
    m_deadPosY : NaN,
    m_sprite : sprite
}

this.collition = {
    collition_posX : NaN,
    collition_posY : NaN,
    collition_with_shot : false,
    collition_with_player : false,
    collition_shotX : NaN,
    collition_shotY :NaN
}



this.spawnTime = 0
this.monster_color = color
this.monster_id = id
this.width = s_width;
this.height = s_height;
this.moveRight = true;
this.moveLeft = false;
this.clearRect = false;
this.collision_bool  = false;
this.monsterMovement = movements;
this.explosion_dead = false;
this.explosion = false;
this.health_total = health;
this.monsterGotHitDamages;
//need for spawns
this.spawnPositionX = pos_x;
this.spawnPositionY = pos_y;

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

 spritesProccessing(sprite, speed, posx, posy, width, height){
        const sparksTwo = new Image();
      
            gameFrame ++;
            var staggerFrame = speed;
          
            sparksTwo.src = sprite[Math.floor(gameFrame/staggerFrame) % sprite.length];
            ctx.drawImage(sparksTwo, posx,posy, width, height);
        }

reset(){
        this.frameX = 0;
        this.frameY = 0;
        this.gameFrame = 0;
        this.staggerFrame = 1;
    }

getHealth(){return this.body.health;};

drawMonster(){
    if(!this.clearRect){
    this.spritesProccessing(this.body.m_sprite,2, this.position.x, this.position.y, this.width, this.height);
//monsters health
    if(this.body.m_health < 0){
        this.body.m_health = 0;
                }
            }
}
getMonsterHealth(){ return this.body.m_health; }
setMonsterHealth(sethit){
this.body.m_health -= sethit;
this.monsterGotHitDamages = sethit;
}
getPosX(){return this.position.x;}
getPosY(){return this.position.y;}
killMonster(){
    this.body.m_health = 0;
    this.body.m_dead = true;
    this.position.x = NaN;
    this.position.y = NaN;
}
movements(move){

    switch(move){
case "sidebyside":    
        this.position.y += 0.6
    if(this.moveRight){
        this.position.x += this.velocity.x;
    }
    if(this.moveLeft){
        this.position.x -= this.velocity.x;
    }
    
    if(this.position.x < 1){
        this.moveLeft = false;
        this.moveRight = true;
    }
    if(this.position.x > c.width - this.width){
        this.moveLeft = true;
        this.moveRight = false;
    }
   
break;
case "straightDown":
    this.position.y += 5;
if(this.position.y > c.height){
    this.killMonster();
}

}
}

randomSpawnPositionX(from, to){
    this.randomNum = Math.floor(Math.random() * to) + from   
    return this.randomNum;
  }

spawnMonster(){
if(this.body.m_dead){
    this.spawnTime++;
  
if(this.spawnTime >= 100){

    this.position.x = this.randomSpawnPositionX(50, c.width - 300);
    this.position.y = this.spawnPositionY;
   
    this.body.m_health = this.health_total; 
    
    this.moveRight = true;
    this.moveLeft = false;
    this.clearRect = false;
    this.collision_bool  = false;
    this.explosion_dead = false;
    this.spawnTime = 0;
    this.body.m_dead = false;
}
    
}

}
resetColPos(){
    this.moveRight = true;
    this.moveLeft = false;
    this.clearRect = false;
    this.collition.collition_with_shot = false;
    this.explosion_dead = false;
    this.explosion = false;   
    this.collition.collition_posX;
    this.collition.collition_posY;
}
//collition in && out puts
setMonsterCollitionPost(posX, posY){
    this.collition.collition_posX = posX;
    this.collition.collition_posY = posY;
};
setMonsterCollitionWithShot(input){ this.collition.collition_with_shot = input;};
getMonsterCollitionWithShot(){return this.collition_with_shot;};
getCollitoinPosX(){return this.collition.collition_posX;};
getCollitoinPosY(){return this.collition.collition_posY;};
setShotCollition(posx, posy){
    this.collition.collition_shotX = posx;
    this.collition.collition_shotY = posy;
};

monsterlifeBar(){

    if(Math.round((this.body.m_health / this.health_total) * 100) <= 50){
        ctx.fillStyle = "orange";
    }
        if(Math.round((this.body.m_health / this.health_total) * 100) <= 20){
            ctx.fillStyle = "red";
        }
            if(Math.round((this.body.m_health / this.health_total) * 100) <= 10){
                ctx.fillStyle = " #720000";
            }
                if(Math.round((this.body.m_health / this.health_total) * 100) > 50){
                ctx.fillStyle = "white"; 
                }
    ctx.font = "15px Roboto Mono";
    ctx.fillText(this.body.m_name, this.position.x - 70, this.position.y - 15);
    ctx.fillText("HP: " + this.body.m_health, this.position.x - 70, this.position.y + 15);
  
    //background
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x - 70 , this.position.y - 10, 100, 9);
    //life
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x - 70 , this.position.y - 10, Math.round((this.body.m_health / this.health_total) * 100), 9);
   ctx.globalCompositeOperation = "source-over";
}

monsterDeath(){
      if(!this.body.m_dead){
        if(this.body.m_health == 0 ){
            this.clearRect = true;
            console.log(this.body.m_name + " is dead life i set to " + this.getMonsterHealth());
            this.body.m_deadPosX = this.position.x;
            this.body.m_deadPosY = this.position.y;
            this.position.x = NaN;
            this.position.y = NaN;
            this.body.m_dead = true;
            return this.body.m_dead;
            
        }
    }
}
monsterClearDeath(){
    this.explosion_dead = false;
}



monsterDeathExplosion(){  
    this.explosionEffect(3,  this.body.m_deadPosX - 85, this.body.m_deadPosY - 85, this.monsterDeath());
}


updateMonster(){
this.drawMonster();
this.monsterlifeBar();
this.movements(this.monsterMovement);
this.monsterDeathExplosion();
this.spawnMonster();
}
}