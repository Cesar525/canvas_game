class Monsters extends Animation{
constructor( id, pos_x, pos_y, health, name, speed, color, movements, s_width, s_height, damage){
    super();
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
    m_deadPosY : NaN
}

this.collition = {
    collition_posX : NaN,
    collition_posY : NaN,
    collition_with_shot : false
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

//hit monster




}


getHealth(){return this.body.health;};

drawMonster(){
    if(!this.clearRect){
    const drawMonster = new Image();
    ctx.fillStyle = this.monster_color;
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
//monsters health
    if(this.body.m_health < 0){
        this.body.m_health = 0;
                }
            }else{

            }
}
getMonsterHealth(){
    return this.body.m_health;

}
setMonsterHealth(sethit){
this.body.m_health -= sethit;
this.monsterGotHitDamages = sethit;
}
getPosX(){
    return this.position.x;
}
getPosY(){
    return this.position.y;
}
setPosXCol(pos){
    this.collision_posX = pos;
}
setPosYCol(pos){
    this.collision_posY
}

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
    console.log(this.spawnTime);
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

    this.width = 100;
    this.height = 100;
    this.moveRight = true;
    this.moveLeft = false;
    this.clearRect = false;
    this.collition.collition_with_shot = false;
    this.explosion_dead = false;
    this.explosion = false;
    
    //hit monster
    this.collision_posX;
    this.collision_posY;
  
    
}
monsterlifeBar(){
    //color bas eon life   
 
   
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


updateMonster(){
this.drawMonster();
this.movements(this.monsterMovement);
ctx.globalCompositeOperation = "source-over";
this.spawnMonster();

//this.monsterClearDeath();
}
}