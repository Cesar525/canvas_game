class Monsters extends Animation {
constructor( id, pos_x, pos_y, health, name, speed, color, movements){
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
    m_health : health
}
this.monster_color = color
this.monster_id = id
this.width = 100;
this.height = 100;
this.moveRight = true;
this.moveLeft = false;
this.clearRect = false;
this.collision_bool;
this.monsterMovement = movements;
this.monsterhit = new Animation();
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
}

movements(move){
    if(move == this.monsterMovement){
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
    if(this.position.x > c.width - player.width){
        this.moveLeft = true;
        this.moveRight = false;
    }
    }
    if(move == this.monsterMovement){

    }
}
monsterHit(collisions){
this.monster_hit = collisions;  
}
monsterDeath(){
    const explosion_monster = new Animation();

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

    this.monsterhit.explosionEffect(1, 100, 100, true);
this.drawMonster();
this.monsterDeath();



}
}