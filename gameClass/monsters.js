class Monsters {
constructor(_name, _health, _damage, speed, gun, _movements, _posx, _posy){
this.position = {
    x : _posx,
    y : _posy
},
this.velocity = {
    x : speed,
    y : speed
},
this.body = {
    name : _name,
    health : _health,
    damage : _damage,
    gun_type : gun,
    movements : _movements
}
this.width = 100;
this.height = 100;
this.moveRight = true;
this.moveLeft = false
}

getHealth(){return this.body.health;};

drawMonster(){
    const drawMonster = new Image();
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
//monsters health
    if(this.body.health < 0){
        this.body.health = 0
                }
}

movements(move){
    if(move == "sidebyside"){
    if(this.moveRight){
        this.position.x += this.velocity.x;
    }
    if(this.moveLeft){
        this.position.x -= this.velocity.x;
    }
    
    if(this.position.x < 0){
        this.moveLeft = false;
        this.moveRight = true;
    }
    if(this.position.x > c.width - player.width){
        this.moveLeft = true;
        this.moveRight = false;
    }
    }}
hit(){
    if(collision.objectCollisionPLayerTOuchingMonster(cesar, shot)){
        console.log("Monster hit by bullet");
    }
}
    
updateMonster(){
    this.drawMonster();
    this.hit();
    death.death(this.getHealth())
    // this.movements("sidebyside");
}
}