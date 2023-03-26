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

}

getHealth(){return this.body.health;};

drawMonster(){
    const drawMonster = new Image();
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.monsterWidth, this.monsterheight);

    //movements
this.movements = {
    left : false,
    right : false
}
// working on this
if(this.movements.right){
    this.position.x += this.velocity;
}
if(this.movements.left){
    this.position.x -= this.velocity;
}
    if(this.position.x < 1000){
        this.movements.left = true;
        this.movements.right = false;
    }
    if(this.position > 0){
        this.movements.right = true;
        this.movements.left = false;
    }
}
updateMonster(){
    this.drawMonster();
}
}