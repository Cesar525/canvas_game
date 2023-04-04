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
   
}
this.width = 100;
this.height = 100;
this.moveRight = true;
this.moveLeft = false;
this.clearRect = false;
}

getHealth(){return this.body.health;};

drawMonster(){
    if(!this.clearRect){
    const drawMonster = new Image();
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
//monsters health
    if(this.body.health < 0){
        this.body.health = 0
                }
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
    
    if(this.position.x < 1){
        this.moveLeft = false;
        this.moveRight = true;
    }
    if(this.position.x > c.width - player.width){
        this.moveLeft = true;
        this.moveRight = false;
    }
    }}

    
updateMonster(){
 
    this.drawMonster();
    this.movements("sidebyside");

//collison -- this collision is having problems.
// if(collision.objectCollisionPLayerTOuchingMonster(shot,monster)){
// this.clearRect = true;
//  console.log("its true");
// }
}
}