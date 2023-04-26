class Player {
    constructor(thruster_selection){
    this.position ={
        x:500,
        y:500
    },
    this.velocity ={
        x:20,
        y:20  
    },
    this.body = {
        health : 100,
        energy : 100,
        thruster : thruster_selection
    }
    
    this.width = 100
    this.height = 100
    this.thruster_size =150;
    this.thruster_animation = 0;
    this.thruster_position_x =  25;
    this.thruster_position_y =  54;    
    this.clearRect = false;
    this.playerDead = false;
    this.guntype = 0;
    this.m_name = "Player One";
this.deathpositionX;
this.deathpositiony;
this.showdeathexplosion;

    
}

draw(){
    
    if(!this.clearRect){
    const image = new Image();
    image.src = "assets/spaceship/spaceshipone.png";
    ctx.drawImage(image, this.position.x, this.position.y , player.width, player.height);
   
    if(this.body.health < 0 ){
        this.body.health = 0;
    }
}
}

setPlayerVelocity(velocity){
    this.velocity.x = velocity;
    this.velocity.y = velocity;
}

playerDeath(){
    if(!this.playerDead){
if(this.body.health == 0){
    console.log("player is dead.");
    this.deathpositionX =  this.position.x;
    this.deathpositiony = this.position.y;
    
    this.position.x = NaN;
    this.position.y = NaN;
    this.clearRect = true;
    this.playerDead = true;
}
}
}

lifeBar(){
    //const lifebar = new Image();
    ctx.fillStyle = "white";
    ctx.font = "30px";
    ctx.fillText(this.m_name, this.position.x - 70, this.position.y - 15);
    ctx.fillText("LvL 2", this.position.x - 70, this.position.y + 10);
    //background
    ctx.fillStyle = "red";
    ctx.fillRect(this.position.x - 70 , this.position.y - 10, 100, 9);
    //life
    ctx.fillStyle = "green";
    ctx.fillRect(this.position.x - 70 , this.position.y - 10, this.body.health, 9);
}



    update(){
this.lifeBar();
this.draw();
thruster.setPlayersThruster(this.body.thruster, this.position.x - this.thruster_position_x, this.position.y + this.thruster_position_y, this.thruster_size, this.thruster_size);   
shot.shotSelection(8, 5, 30);
this.playerDeath();

playerDeathAnimation.explosionEffect(3, this.deathpositionX - 85, this.deathpositiony - 85)


// player movements
if(keys.right.pressed){
    player.position.x += player.velocity.x
}
if(keys.left.pressed){
    player.position.x -= player.velocity.x
}
if(keys.up.pressed){
    player.position.y -= player.velocity.y
}
if(keys.down.pressed){
    player.position.y += player.velocity.y
}
if(true){
    
 }
//console.log("position y =" + player.position.y)
//console.log("position x =" + player.position.x)

// player ned to stay insidew the canvas
if(player.position.x + player.velocity.x > c.width - player.width + player.velocity.x){

player.position.x = c.width - player.width
}
if(player.position.x < 0){
player.position.x = 0

}
if(player.position.y + player.velocity.y > c.height - player.height){
player.position.y =  c.height - player.height

}
if(player.position.y < 0){
player.position.y =  0

}

    }
    }