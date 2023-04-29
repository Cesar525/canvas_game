class Player {
    constructor(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed){
    this.position ={
        x: posx,
        y: posy
    },
    this.velocity ={
        x:20,
        y:20  
    },
    this.body = {
        health : get_health,
        energy : energy,
        thruster : thruster_selection,
        m_damage : m_damage,
        m_gun_type : gunType,
        m_gun_speed : gun_speed
        
    }
    
    this.width = 100;
    this.height = 100;
    this.health_total = get_health;
    this.thruster_size =150;
    this.thruster_animation = 0;
    this.thruster_position_x =  25;
    this.thruster_position_y =  54;    
    this.clearRect = false;
    this.playerDead = false;
    this.m_name = name;
    this.deathpositionX;
    this.deathpositiony;
    this.showdeathexplosion;
    this.player_level = level;

    
}

draw(){
    
    if(!this.clearRect){
    const image = new Image();
    image.src = "assets/spaceship/spaceshipone.png";
    ctx.drawImage(image, this.position.x, this.position.y , this.width, this.height);
   
    if(this.body.health < 0 ){
        this.body.health = 0;
    }
}
}

setPlayerVelocity(velocity){
    this.velocity.x = velocity;
    this.velocity.y = velocity;
}

playerOnDeath(){
    if(!this.playerDead){
if(this.body.health == 0){
    console.log("player is dead.");
    this.deathpositionX =  this.position.x;
    this.deathpositiony = this.position.y;
    this.playerDead = true;
    
    this.position.x = NaN;
    this.position.y = NaN;
    this.clearRect = true;
    return this.playerDead;
}
}
}

lifeBar(){
    //const lifebar = new Image();

    if(Math.round((this.body.health / this.health_total) * 100) <= 50){
        ctx.fillStyle = "orange";
    }
        if(Math.round((this.body.health / this.health_total) * 100) <= 20){
            ctx.fillStyle = "red";
        }
        if(Math.round((this.body.health / this.health_total) * 100) <= 10){
            ctx.fillStyle = " #720000";
        }
        if(Math.round((this.body.health / this.health_total) * 100) > 50){
           ctx.fillStyle = "white"; 
        }
   
        ctx.font = "15px Roboto Mono";
        ctx.fillText("Lvl:" + this.player_level, this.position.x - 70, this.position.y + 35);

        ctx.fillText(this.m_name, this.position.x - 70, this.position.y - 15);
        ctx.fillText("HP: "+ this.body.health, this.position.x - 70, this.position.y + 15);
      
        
        //background
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x - 70 , this.position.y - 10, 100, 9);
        //life
        ctx.fillStyle = "green";
        ctx.fillRect(this.position.x - 70 , this.position.y - 10, Math.round((this.body.health / this.health_total) * 100), 9);
}



    update(loop){

this.draw();
thruster.setPlayersThruster(this.body.thruster, this.position.x - this.thruster_position_x, this.position.y + this.thruster_position_y, this.thruster_size, this.thruster_size);   
guns[loop].shotSelection(players[loop],this.body.m_gun_type, this.body.m_damage, this.body.m_gun_speed);
this.playerOnDeath();

playerDeathAnimation.explosionEffect(3, this.deathpositionX - 85, this.deathpositiony - 85)
ctx.globalCompositeOperation = "source-over";
this.lifeBar();


// player movements
// if(keys.right.pressed){
//     player.position.x += player.velocity.x
// }
// if(keys.left.pressed){
//     player.position.x -= player.velocity.x
// }
// if(keys.up.pressed){
//     player.position.y -= player.velocity.y
// }
// if(keys.down.pressed){
//     player.position.y += player.velocity.y
// }
// if(true){
    
//  }
// console.log("position y =" + player.position.y)
// console.log("position x =" + player.position.x)

// player ned to stay insidew the canvas
// if(player.position.x + player.velocity.x > c.width - player.width + player.velocity.x){

// player.position.x = c.width - player.width
// }
// if(player.position.x < 0){
// player.position.x = 0

// }
// if(player.position.y + player.velocity.y > c.height - player.height){
// player.position.y =  c.height - player.height

// }
// if(player.position.y < 0){
// player.position.y =  0

// }

    }
    }