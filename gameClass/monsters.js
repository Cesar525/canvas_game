class Monsters {
constructor( pos_x, pos_y, health, name){
this.position = {
    x : pos_x,
    y : pos_y
},
this.velocity = {
    x : 10,
    y : 10
},
this.body = {
    m_name : name,
    m_health : health
}

this.width = 100;
this.height = 100;
this.moveRight = true;
this.moveLeft = false;
this.clearRect = false;
this.collision_bool = true;
}

getHealth(){return this.body.health;};

drawMonster(){
    if(!this.clearRect){
    const drawMonster = new Image();
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
//monsters health
    if(this.body.m_health < 0){
        this.body.m_health = 0;
                }
            }
}
getMonsterHealth(){
    return this.body.m_health;
}
setMonsterHealth(sethit){
this.body.m_health -= sethit;
}

movements(move){
    if(move == "sidebyside"){
        this.position.y += 1.0
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
    if(this.position.x > c.width - player.width){
        this.moveLeft = true;
        this.moveRight = false;
    }
    }
}

monsterHitByShot(){   
     if(collision.collisionTouch(shot, monster)){
         this.setMonsterHealth(1);
         console.log(this.body.m_name + " ramina life =  " + this.getMonsterHealth());
        }   
        
    }
    
monsterDeath(){
      if(this.collision_bool){
        if(this.body.m_health == 0 ){
            this.clearRect = true;
            console.log(this.body.m_name + " is dead life i set to " + this.getMonsterHealth());
            this.position.x = NaN;
            this.position.y = NaN;
            this.collision_bool = false;
        }
    }
    
}

updateMonster(){
 
this.drawMonster();
//this.movements("sidebyside");
this.monsterHitByShot();
this.monsterDeath();
}
}