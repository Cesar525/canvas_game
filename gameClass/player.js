class Player{
    constructor(thruster_selection){
    this.position ={
        x:500,
        y:500
    },
    this.velocity ={
        x:10,
        y:10  
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
    const posx = this.position.x;
    const posy = this.position.y;
    const playerDeathAnimation = new Animation();
    playerDeathAnimation.explosionEffect(1, posx, posy, true)
    this.position.x = NaN;
    this.position.y = NaN;
    this.clearRect = true;
    this.playerDead = true;
}
}
}

    update(){
this.draw();
thruster.setPlayersThruster(this.body.thruster, this.position.x - this.thruster_position_x, this.position.y + this.thruster_position_y, this.thruster_size, this.thruster_size);   
shot.shotSelection(4, 20, 10);
this.playerDeath();




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