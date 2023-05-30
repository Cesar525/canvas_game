class PowerUps {
constructor(){
  
    this.position = {
        x : NaN,
        y : NaN 
    }
    this.power = {
     amount_adding : NaN,
        m_sprite : NaN
    }
    this.velocity = {
        y : 10,
        x : 10
    }
    this.collision ={
        collision_posX : NaN,
        collision_posY : NaN,
        collision_with_player : NaN

    }
this.powerUps_Selecting = {
    health : false,
    energy : false,
    money : false,
    shield : false
}

    this.look = NaN;
    this.width = 100;
    this.height = 100;
    this.clearItem = false;
    this.dropitem = false;
    this.gameFrame = 0;
    this.staggerFrame = 0;
}
setPos(posx, posy){
    this.position.x = posx;
    this .position.y = posy;
}
getPosX(){return this.position.x;};
getPosY(){return this.position.y;};
dropHealth(posx, posy, dead_orNot, select){
    if(!this.clearItem){
this.position.x = posx;
this.position.y = posy;
this.dropitem = dead_orNot;
this.selectingPowerUps(select)
    }
}


spriteProccessor(sprite, speed, posx, posy, width, height){
    const sparksTwo = new Image();
    
        this.gameFrame ++;
        this.staggerFrame = speed;
        
        sparksTwo.src = sprite[Math.floor(this.gameFrame/this.staggerFrame) % sprite.length];
        ctx.drawImage(sparksTwo, posx,posy, width, height);
    }

selectingPowerUps(selecting_type){
    if(!this.clearItem){
    switch(selecting_type){
        case 1 : 
        this.powerUps_Selecting.health = true;
        this.powerUps_Selecting.energy = false;
        this.powerUps_Selecting.money = false;
        break;
        case 2 : 
        this.powerUps_Selecting.health = false;
        this.powerUps_Selecting.energy = true;
        this.powerUps_Selecting.money = false;
        break;
        case 3 : 
        this.powerUps_Selecting.energy = false;
        this.powerUps_Selecting.health = false;
        this.powerUps_Selecting.money = true;
        break;
    }
}
}

health(player){
if(this.powerUps_Selecting.health){
if(!this.clearItem){
    if(this.dropitem){ 
    //    ctx.fillStyle = "pink";
    //        ctx.fillRect(this.position.x, this.position.y += 10 , this.width , this.height)
         this.spriteProccessor(heart_powerup, 3, this.position.x, this.position.y += 10, this.width, this.height)
        }
         if(this.collision.collision_with_player && this.powerUps_Selecting.health){
        var health_points = 100;
        console.log("health Taken <EFFECT HERE>");
        this.collision.collision_posX = this.position.x;
        this.collision.collision_posY = this.position.y;
        this.powerUp_taken = true;
        player.body.health += health_points;
        this.display_orNot = false;
        this.clearItems();
        this.powerUps_Selecting.health = false;
        
      }
    }
  }

}

energy(player){
    if(this.powerUps_Selecting.energy && this.powerUps_Selecting.energy){
    if(!this.clearItem){
        if(this.dropitem){ 
            // ctx.fillStyle = "blue";
            //     ctx.fillRect(this.position.x, this.position.y += 10, this.width , this.height);

                this.spriteProccessor(energy_powerup, 3, this.position.x, this.position.y += 10, this.width, this.height)
            }
             if(this.collision.collision_with_player){
            var health_points = 100;
            console.log("ENERGY Taken <EFFECT HERE>");
            this.collision.collision_posX = this.position.x;
            this.collision.collision_posY = this.position.y;
            this.powerUp_taken = true;
            player.body.health += health_points;
            this.display_orNot = false;
            this.powerUps_Selecting.energy = false;
            this.clearItems();
            
          }
        }
      }
    
    }

    money(player){
        if(this.powerUps_Selecting.money){
        if(!this.clearItem){
            if(this.dropitem){ 
                // ctx.fillStyle = "green";
                //     ctx.fillRect(this.position.x, this.position.y += 10, this.width , this.height)
               
                    this.spriteProccessor(money_powerup, 3, this.position.x, this.position.y += 10, this.width, this.height)
                }
                 if(this.collision.collision_with_player){
                var health_points = 100;
                console.log("MONEY Taken <EFFECT HERE>");
                this.collision.collision_posX = this.position.x;
                this.collision.collision_posY = this.position.y;
                this.powerUp_taken = true;
                player.body.health += health_points;
                this.display_orNot = false;
                this.powerUps_Selecting.money = false;
                this.clearItems();
                
              }
            }
          }
        
        }


clearItems(){
    this.position.x = NaN;
    this.position.y = - NaN;
    this.powerUps_Selecting.money = false;
    this.powerUps_Selecting.health = false;
    this.powerUps_Selecting.energy = false;
    this.collision.collision_with_player = false;
    this.display_orNot = false;
    this.clearItem = true;
}

PowerUpcollisionWithPlayer(player){
    if(collisionTouch(this, player)){
console.log("its coliding");
this.collision.collision_with_player = true;
    }
}

updatePowerUps(player){
    this.PowerUpcollisionWithPlayer(player);
    this.health(player);
    this.energy(player);
    this.money(player);
}

}