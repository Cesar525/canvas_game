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
        health : 100,
    }
    this.width = 100
    this.height = 100
    this.thruster_size =150;
    this.thruster_animation = 0;
    this.thruster_position_x =  25;
    this.thruster_position_y =  54;    
    this.clearRect = false;
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
    update(){ 
    this.draw()
    if(collision.objectCollisionPLayerTOuchingMonster(player, monster)){
    this.clearRect = true;
    }
    shot.makeGuns(2, 30, 1, 10);
//    shield.updateshield();


    }
    }