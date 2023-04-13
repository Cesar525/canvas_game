class Player{
    constructor(){
    this.position ={
        x:500,
        y:500
    },
    this.velocity ={
        x:20,
        y:20  
    },
    this.body = {
        health : 2,
        energy : 100
    }
    this.width = 100
    this.height = 100
    this.thruster_size =150;
    this.thruster_animation = 0;
    this.thruster_position_x =  25;
    this.thruster_position_y =  54;    
    this.clearRect = false;
    this.playerDead = false;
    
}

draw(){
    
    if(!this.clearRect){
    const image = new Image();
    image.src = "assets/spaceship/spaceshipone.png";
    ctx.drawImage(image, this.position.x, this.position.y , player.width, player.height);
    }
}

setPlayerVelocity(velocity){
    this.velocity.x = velocity;
    this.velocity.y = velocity;
}

playerDeath(){
if(this.body.health == 0){
    console.log("player is dead.");
    const posx = this.position.x;
    const posy = this.position.y;
    const playerDeathAnimation = new Animation();
    playerDeathAnimation.explosionEffect(1, posx, posy, true)
    // this.position.x = NaN;
    // this.position.y = NaN;
    this.clearRect = true;
    this.playerDead = true;
}
}

playerGetHit(){
    if(this.body.health < 0 ){
        this.body.health = 0;
    }
  if(collision.objectCollisionPLayerTOuchingMonster(player, monster)){
    this.body.health -= 1; 
    
    console.log("you have been damage your current life is  = " + this.body.health);
    }
}

    update(){ 
        this.playerDeath();
    this.draw()
    
    this.playerGetHit();
    shot.shotSelection(6, 30, 20);
    
    }
    }