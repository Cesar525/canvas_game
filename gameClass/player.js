class Player{
    constructor(){
    this.position ={
        x:600,
        y:600
    },
    this.velocity ={
        x:5,
        y:5  
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

    setPlayerVelocity(velocity){
        this.velocity.x = velocity;
        this.velocity.y = velocity;
    }
    update(){ 
    this.draw()
    collision.objectCollisionPLayerTOuchingMonster(player, monster);
    shot.makeGuns(2, 20, 1, 15);
//    shield.updateshield();

    }
    }