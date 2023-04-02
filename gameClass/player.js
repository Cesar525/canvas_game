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
    this.thruster_position_x =  25;
this.thruster_position_y =  54;    }
    draw(){
     
       const image = new Image();
       image.src = "assets/spaceship/spaceshipone.png";
        ctx.drawImage(image, this.position.x, this.position.y , player.width, player.height);
    }
    setThruster(){
    const thruster = new Image();
    thruster.src = "assets/thrusters/thruster08.png";
    
    ctx.drawImage(thruster , this.position.x - this.thruster_position_x, this.position.y + this.thruster_position_y , this.thruster_size, this.thruster_size + this.thruster_animation);
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
        this.setThruster();
    this.draw()
   // shield.updateshield();

    }
    }