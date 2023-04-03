class Monsters {
constructor(health, damage){
this.position = {
    x : 0,
    y : 0
},
this.velocity = {
    x : 10,
    y : 10
},
this.body = {
    m_health : health,
    m_damage : damage
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
}

movements(){
    console.log(this.position.x);
    if(this.position.x < c.width){
        this.position.x += this.velocity.x;
    }
}

updateMonster(){
this.movements();
this.drawMonster();
}
}