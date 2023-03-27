class Monsters {
constructor(){
this.position = {
    x : 0,
    y : 0
},
this.velocity = {
    x : 10,
    y : 10
},
this.body = {
    health : 100
}
this.monsterWidth = 100;
this.monsterheight = 100;
this.moveRight = true;
this.moveLeft = false
}

getHealth(){return this.body.health;};

drawMonster(){
    const drawMonster = new Image();
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.monsterWidth, this.monsterheight);

    //movements


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
if(this.position.x > c.width){
    this.moveLeft = true;
    this.moveRight = false;
}

}
updateMonster(){
    this.drawMonster();
}
}