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
        m_name : name,
        m_level : level,
        health : get_health,
        energy : energy,
        thruster : thruster_selection,
        m_damage : m_damage,
        m_gun_type : gunType,
        m_gun_speed : gun_speed,
        deathPositionX : NaN,
        deathPositionY : NaN 
    }
    this.collition = {
        collition_monsters : false,
        collition_posX : NaN,
        collition_posY : NaN
    }
    this.frames = {
        gameFrame : 0,
        staggerFrame : 0
    }


    this.width = 100;
    this.height = 100;
    this.health_total = get_health;
    this.thruster_size = 150;
    this.thruster_animation = 0;
    this.thruster_position_x =  25;
    this.thruster_position_y =  54;    
    this.clearRect = false;
    this.playerDead = false;
    this.showdeathexplosion;
    

    
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
playerGetDamage(health_){ this.body.health -= health_;};
getPlayerHealth(){return this.body.health;};


playerOnDeath(){
    if(!this.playerDead){
if(this.body.health == 0){
    console.log("player is dead.");
    this.body.deathPositionX =  this.position.x;
    this.body.deathPositionY = this.position.y;
    this.playerDead = true;
    
    this.position.x = NaN;
    this.position.y = NaN;
    this.clearRect = true;
    return this.playerDead;
};
};
};

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
        ctx.fillText("Lvl:" + this.body.m_level, this.position.x - 70, this.position.y + 35);

        ctx.fillText(this.body.m_name, this.position.x - 70, this.position.y - 15);
        ctx.fillText("HP: "+ this.body.health, this.position.x - 70, this.position.y + 15);
      
        
        //background
        ctx.fillStyle = "red";
        ctx.fillRect(this.position.x - 70 , this.position.y - 10, 100, 9);
        //life

        if(Math.round((this.body.health / this.health_total) * 100) <= 50){
            ctx.fillStyle = "orange";
        }
       
        if(Math.round((this.body.health / this.health_total) * 100) <= 10){
            ctx.fillStyle = " #720000";
        }
        if(Math.round((this.body.health / this.health_total) * 100) > 50){
            ctx.fillStyle = "green"; 
         }
        ctx.fillRect(this.position.x - 70 , this.position.y - 10, Math.round((this.body.health / this.health_total) * 100), 9);
}

playerDeathExplosion(animationOne, col, posx_, posy_){
    animationOne.explosionEffect(3,  posx_ - 85, posy_ - 85, col);        
}

playerCollitionMonsters(monsters){
    // player collision with monsters
  this.frames.gameFrame ++;
  this.frames.staggerFrame = 10;

    if(collisionTouch(this, monsters)){
   // if(Math.floor(this.frames.gameFrame/this.frames.staggerFrame) % 5 == 4){
      let damage = 1
        this.playerGetDamage(damage); 
      console.log("you have been damage your current life is  = " + this.body.health);
      return      
 //  }
  }
  }

playerGun(gun){
    gun.gunTypes(this, this.body.m_gun_type);
}




update(loop){

this.draw();
thruster.setPlayersThruster(this.body.thruster, this.position.x - this.thruster_position_x, this.position.y + this.thruster_position_y, this.thruster_size, this.thruster_size);   

//this.playerGun(guns[loop]);
   

    
this.playerOnDeath();
playerDeathAnimation.explosionEffect(3, this.deathpositionX - 85, this.deathpositiony - 85)
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