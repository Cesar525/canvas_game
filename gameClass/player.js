class Player{
    constructor(){
    this.position ={
        x:600,
        y:600
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
    }
    draw(){
     
       const image = new Image();
       image.src = "assets/spaceship/spaceshipone.png";
        ctx.drawImage(image, this.position.x, this.position.y , player.width, player.height);
    }
    setPlayerThruster(){
    const thruster = new Image();
    thruster.src = "assets/thrusters/thruster08.png";
    
    ctx.drawImage(thruster , this.position.x - 25, this.position.y + 54 , this.thruster_size, this.thruster_size + this.thruster_animation);
if(this.thruster_animation <= 20){
    this.thruster_animation += 1
}if(this.thruster_animation == 20){
    this.thruster_animation = 15;
}



    }
    setPlayerVelocity(velocity){
        this.velocity.x = velocity;
        this.velocity.y = velocity;
    }
    update(){
        this.setPlayerThruster();
    this.draw()
   // shield.updateshield();

    }
    }