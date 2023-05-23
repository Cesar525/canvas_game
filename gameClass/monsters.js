

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

//powerUps
this.dropPower_random;
this.drop_item = false;
this.give_number = true;
}

reset(){
        this.frameX = 0;
        this.frameY = 0;
        this.gameFrame = 0;
        this.staggerFrame = 1;
    }

getHealth(){return this.body.health;};

drawMonster(sprite_animation){
    if(!this.clearRect){
    sprite_animation.spriteProccessor(this.body.m_sprite,monsters.length, this.position.x, this.position.y, this.width, this.height);
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

  powerUpRandomNum(from, to){
    this.dropPower_random = Math.floor(Math.random() * to) + from   
    return this.dropPower_random;
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
    this.body.m_deadPosX = NaN;
    this.body.m_deadPosY = NaN;


    this.dropPower_random;
    this.drop_item = false;
    this.give_number = true;
    this.item_dropped = NaN;
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
    this.collition.collition_posX = NaN;
    this.collition.collition_posY = NaN;
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

monsterDeathExplosion(explosion_deathAnimation){  
    explosion_deathAnimation.explosionEffect(3,  this.body.m_deadPosX - 85, (this.body.m_deadPosY += backg.velocity.y) - 85 , this.monsterDeath());
}

randomSelectingPowerUps(){
    if(this.body.m_dead){
        if(this.give_number){
        this.drop_item = true;
        }
    }
    if(this.drop_item){
var drop_power = this.powerUpRandomNum(3, 5);
console.log(drop_power);
this.drop_item = false;
this.give_number = false;
}
this.item_dropped = 4;
return this.item_dropped;
}

dropHealth(powerups){    
    if(this.body.m_dead){
        var select = 1
 switch(select){
    case 1 : 
    //powerups.dropHealth(this.body.m_deadPosX, this.body.m_deadPosY, this.body.m_dead);
    powerups.dropHealth(500, 500, true);

 console.log("Droppping item");
 console.log(this.body.m_dead)
break;
}

        

    }
}


updateMonster(sprite_animator, explosionOnDeathAnimation, powerUps){
this.drawMonster(sprite_animator);
this.monsterlifeBar();
this.movements(this.monsterMovement);
this.monsterDeathExplosion(explosionOnDeathAnimation);
this.dropHealth(powerUps);
this.spawnMonster();



}
}