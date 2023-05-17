class Player{
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
    this.count = 0;

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
    
    //Animation -> page
this.frameX = 0;
this.frameY = 0;
this.gameFrame = 0;
this.staggerFrame = 1;
this.show = false;
this.onAnimation = false;
this.animation_PosX = NaN;
this.animation_PosY = NaN;
this.gameFrameDamageAnimation = 0;
this.showDamage = false;

//sparks animation
this.gameFrame_sparks = 0;
this.staggerFrame_sparks = 1;
    
}

spritePage(sprite_path, posx, posy, sprite_page_width, sprite_page_height, sprite_count_width, sprite_count_height, sprite_size_w, sprite_size_h, speed, show){
    if(show){
        this.show = show;
    }
    if(this.show){
        const animation = new Image();
        if(speed){
    this.staggerFrame = speed;
        }
    animation.src = sprite_path;
    
    this.onAnimation = true;
    let m_width = sprite_page_width / sprite_count_width;
    let m_height = sprite_page_height/ sprite_count_height;
    let positionX = Math.floor(this.gameFrame/this.staggerFrame) % sprite_count_width;
    let positionY = Math.floor(this.gameFrame/(this.staggerFrame * sprite_count_width)) % sprite_count_height;
    
    this.animation_PosX = posx;
    this.animation_PosY = posy;
    ctx.globalAlpha = 1;
    ctx.drawImage(animation, 1 * (sprite_size_w * this.frameX), 1 * (sprite_size_h * this.frameY), m_width, m_height, this.animation_PosX, this.animation_PosY, m_width + 20, m_height + 20 );
    ctx.globalAlpha = 1;
    this.frameX = positionX;
    this.frameY = positionY;
    
    //console.log(" Y Frame = " + this.frameY);
    //console.log("X Frames = " + this.frameX);
    
    //console.log( "Showing" + this.frameX);
    this.gameFrame += 1;
    
    if(this.frameX >= sprite_count_width - 1 && this.frameY >= sprite_count_height - 1){
        this.show = false;
        this.reset();
        // console.log(" Y Frame SET = " + this.frameY);
        //console.log("X Frames SET = " + this.frameX);
        this.onAnimation = false;
    }else{
        return this.onAnimation;
    }
    }
}

explosionEffect(effect, posx, posy, send, speed){
    switch(effect){
    case 1 :
    this.spritePage("assets/explosions/explosion_1.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 2 :
    this.spritePage("assets/explosions/explosion_2.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 3 : 
    this.spritePage("assets/explosions/explosion_3.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 4 : 
    this.spritePage("assets/explosions/explosion_4.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 5 : 
    this.spritePage("assets/explosions/explosion_5.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 6 : 
    this.spritePage("assets/explosions/explosion_6.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    case 7 : 
    
    this.spritePage("assets/explosions/explosion_7.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
    break;
    }
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
    this.showdeathexplosion = true;
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

playerDeathExplosion(){
    this.explosionEffect(3,  this.body.deathPositionX - 85, this.body.deathPositionY - 85, this.showdeathexplosion, 2);
    this.showdeathexplosion = false; 
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

  reset(){
    this.frameX = 0;
    this.frameY = 0;
    this.gameFrame = 0;
    this.staggerFrame = 1;
}

playerGun(gun){
    gun.gunTypes(this, this.body.m_gun_type);
}

playerMovemements(){
        // player movements
if(keys.right.pressed){
    this.position.x += this.velocity.x
}
if(keys.left.pressed){
    this.position.x -= this.velocity.x
}
if(keys.up.pressed){
    this.position.y -= this.velocity.y
}
if(keys.down.pressed){
    this.position.y += this.velocity.y
}
if(true){
    
 }


// player need to stay inside the canvas
if(this.position.x + this.velocity.x > c.width - this.width + this.velocity.x){

this.position.x = c.width - this.width
}
if(this.position.x < 0){
this.position.x = 0

}
if(this.position.y + this.velocity.y > c.height - this.height){
this.position.y =  c.height - this.height

}
if(this.position.y < 0){
this.position.y =  0

}



}

sparkOne(speed, posx, posy, width, height){
    const sparks = new Image();
    const spark1 = [
        'assets/sparks/spark1/MetallicHit010000.png',
        'assets/sparks/spark1/MetallicHit010001.png',
        'assets/sparks/spark1/MetallicHit010002.png',
        'assets/sparks/spark1/MetallicHit010003.png',
        'assets/sparks/spark1/MetallicHit010004.png',
        'assets/sparks/spark1/MetallicHit010005.png',
        'assets/sparks/spark1/MetallicHit010006.png',
        'assets/sparks/spark1/MetallicHit010007.png',
        'assets/sparks/spark1/MetallicHit010008.png',
        'assets/sparks/spark1/MetallicHit010009.png',
        'assets/sparks/spark1/MetallicHit010010.png',
        'assets/sparks/spark1/MetallicHit010011.png',
        ]
        this.gameFrame_sparks ++;
        this.staggerFrame_sparks = speed;
      
        sparks.src = spark1[Math.floor(this.gameFrame_sparks/this.staggerFrame_sparks) % 12];
        ctx.drawImage(sparks, posx,posy, width, height);
    }
    
    sparkTwo(speed, posx, posy, width, height){
        const sparksTwo = new Image();
        const spark2 = [
            'assets/sparks/spark2/MetallicHit080000.png',
            'assets/sparks/spark2/MetallicHit080001.png',
            'assets/sparks/spark2/MetallicHit080002.png',
            'assets/sparks/spark2/MetallicHit080003.png',
            'assets/sparks/spark2/MetallicHit080004.png',
            'assets/sparks/spark2/MetallicHit080005.png',
            'assets/sparks/spark2/MetallicHit080006.png',
            'assets/sparks/spark2/MetallicHit080007.png',
            'assets/sparks/spark2/MetallicHit080008.png',
            'assets/sparks/spark2/MetallicHit080009.png',
            'assets/sparks/spark2/MetallicHit080010.png',
            'assets/sparks/spark2/MetallicHit080011.png',
            'assets/sparks/spark2/MetallicHit080012.png',
            'assets/sparks/spark2/MetallicHit080013.png',
            'assets/sparks/spark2/MetallicHit080014.png',
            'assets/sparks/spark2/MetallicHit080015.png',
            'assets/sparks/spark2/MetallicHit080016.png',
            'assets/sparks/spark2/MetallicHit080017.png',
            'assets/sparks/spark2/MetallicHit080018.png',
            'assets/sparks/spark2/MetallicHit080019.png',
            ]
            this.gameFrame_sparks ++;
            this.staggerFrame_sparks = speed;
          
            sparksTwo.src = spark2[Math.floor(this.gameFrame_sparks/this.staggerFrame_sparks) % 20];
            ctx.drawImage(sparksTwo, posx,posy, width, height);
        }
    
    
    playerSparks(player_posx, player_posy){
        this.sparkOne(4, player_posx, player_posy, 100, 100);
        this.sparkOne(5, player_posx, player_posy - 50, 150, 150);
        this.sparkTwo(5, player_posx, player_posy - 50, 100, 100)
    }
    
    playerSparksHigh(player_posx, player_posy){
        this.sparkOne(15, player_posx, player_posy, 100, 100);
         this.sparkOne(13, player_posx, player_posy - 50, 150, 150);
         this.sparkOne(8, player_posx, player_posy, 100, 100);
       this.sparkOne(10, player_posx - 20, player_posy, 100, 100);
        this.sparkTwo(9, player_posx, player_posy - 50, 100, 100)
    
    
        }
    
    playerEffectSparks(){
        if(Math.round((this.body.health / this.health_total) * 100) <= 50){
            this.playerSparks(this.position.x, this.position.y);
            }
            if(Math.round((this.body.health / this.health_total) * 100) <= 10){
                this.playerSparksHigh(this.position.x, this.position.y);
              }
    }




update(monster){
this.draw();
thruster.setPlayersThruster(this.body.thruster, this.position.x - this.thruster_position_x, this.position.y + this.thruster_position_y, this.thruster_size, this.thruster_size);       
this.playerOnDeath();
this.lifeBar();
this.playerMovemements();
this.playerEffectSparks();
this.playerDeathExplosion();


    }
    }