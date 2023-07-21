class PowerUps {
constructor(posx, posy, type, points_adding){

    this.position = {
        x : posx, 
        y : posy
    }
    this.power = {
     amount_adding : NaN,
        m_sprite : NaN
    }
    this.velocity = {
        y : 3,
        x : 3
    }
    this.collision ={
        collision_posX : NaN,
        collision_posY : NaN,
        collision_with_player : NaN

    }
    this.m_points_adding = points_adding;
this.powerUps_Selecting = {
    health : false,
    energy : false,
    money : false,
    shield : false
}
    this.m_type = type;
    this.look = NaN;
    this.width = 100;
    this.height = 100;
    this.clearItem = false;
    this.dropitem = false;
    this.gameFrame = 0;
    this.staggerFrame = 0;
    this.health_powerUp_taken;
    this.destroyPush = false;
    this.gameFramePowerups = 0;
    this.power_UPTaken = {
        health : false,
        energy : false,
        money : false
    }

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


setDestroyPowerUps(set){
this.destroyPush = set;
}
getDestroyPowerUps(){return this.destroyPush;}

health(player, effect_taken){


    if(this.m_type == "health"){
    if(!this.clearItem){
        // ctx.fillStyle = "pink";
        // ctx.fillRect(this.position.x, this.position.y += this.velocity.y , this.width , this.height)
   const health_image = new Image();
   health_image.src = 'assets/space_assets/10. Powerups/01 health 02/0000.png',

        ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
        }

    if(this.collision.collision_with_player){
         
        //console.log("health Taken <EFFECT HERE>");
        this.collision.collision_posX = this.position.x;
        this.collision.collision_posY = this.position.y;
        this.powerUp_taken = true;
        player.body.health += this.m_points_adding;
        this.clearItems();
    }

}

}

powerup




energy(player, effect_taken ){
    if(this.m_type == "energy"){
      
    if(!this.clearItem){
            // ctx.fillStyle = "blue";
                // // ctx.fillRect(this.position.x, this.position.y += this.velocity.y , this.width , this.height);
              // this.spriteProccessor(energy_powerup, 3, this.position.x, this.position.y += this.velocity.y, this.width, this.height)
            const energy_Image  = new Image();
            energy_Image.src = 'assets/space_assets/10. Powerups/03 flash 02/0000.png';
            ctx.drawImage(energy_Image, this.position.x, this.position.y += this.velocity.y, this.width, this.height);

            }
             if(this.collision.collision_with_player){
           // console.log("ENERGY Taken <EFFECT HERE taken_energy sprite>");
            this.collision.collision_posX = this.position.x;
            this.collision.collision_posY = this.position.y;
            this.powerUp_taken = true;
            player.body.energy += this.m_ponts_adding;
            this.clearItems();    
             }
        
      }
    
    }

    money(player, effect_taken){
        if(this.m_type == "money"){
            var money_points = 100;
        if(!this.clearItem){
       
                // ctx.fillStyle = "green";
                //     ctx.fillRect(this.position.x, this.position.y += this.velocity.y, this.width , this.height) 
                 //  this.spriteProccessor(money_powerup, 3, this.position.x, this.position.y += this.velocity.y, this.width, this.height)
                const money_image = new Image();
                money_image.src = 'assets/space_assets/10. Powerups/05 money 02/0000.png';
                ctx.drawImage(money_image, this.position.x, this.position.y += this.velocity.y, this.width, this.height);
                
                }
                 if(this.collision.collision_with_player){
               // console.log("MONEY Taken <EFFECT HERE>");
                this.collision.collision_posX = this.position.x;
                this.collision.collision_posY = this.position.y;
                this.powerUp_taken = true;
                player.storage.money += this.m_points_adding;     
                this.clearItems();
          }
      
        }
        }

        powerUpTakenEffect(player, effects){

            if(this.m_type == "health"){
                if(this.powerUp_taken){
                    effects.spritePage("assets/capture_effects/capture_health/spritesheet.png", player.position.x - 115, player.position.y - 120 , 11264, 512, 22, 1, 512, 512, 2, true, -200, -200);
                    if(!effects.getAnimationStatus()){
                        this.setDestroyPowerUps(true);
                        this.powerUp_taken = false;
                    }
                    this.healShowAnimation(this.m_points_adding, player.getPlayerPosX() + 20, player.getPlayerPosY() + 100, "#8aff8a", this.powerUp_taken, "+");
                }
            }
            if(this.m_type == "energy"){
                if(this.powerUp_taken){
                    effects.spritePage("assets/capture_effects/capture_energy/spritesheet.png", player.position.x - 115, player.position.y - 120, 11264, 512, 22, 1, 512, 512, 2, true, -200, -200);
                    if(!effects.getAnimationStatus()){
                      this.setDestroyPowerUps(true)
                        this.powerUp_taken = false;
                    }
                    }
                    this.healShowAnimation(this.m_points_adding, player.getPlayerPosX() + 20, player.getPlayerPosY() + 100, "#4484ff", this.powerUp_taken, "+");
            }
if(this.m_type == "money"){

    if(this.powerUp_taken){
        effects.spritePage("assets/capture_effects/capture_money/spritesheet2.png", player.position.x - 115, player.position.y - 120, 11264, 512, 22, 1, 512, 512, 2, true, -200, -200);
        if(!effects.getAnimationStatus()){
            this.setDestroyPowerUps(true);
            this.powerUp_taken = false;
        }

        }
        this.healShowAnimation(this.m_points_adding, player.getPlayerPosX() + 20, player.getPlayerPosY() + 100, "green", this.powerUp_taken, "$");
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
this.collision.collision_with_player = true;
    }
}


healShowAnimation(damage,pos_x, pos_y, color, if_true, sign){
    this.gameFramePowerups++;
    if(if_true){this.showDamage = true;}
    
    
            if(this.showDamage){
                
                ctx.fillStyle = color;
                ctx.strokeStyle = "black"
                ctx.font = "40px anton";
                ctx.fillText(sign + damage, pos_x , pos_y);
                ctx.strokeText(sign + damage, pos_x, pos_y);
                        
            } 
            if(this.gameFramePowerups >= 300){
                        this.showDamage = false;
                        this.gameFrameDamageAnimation = 0;
                        this.animationSlowsGoesUp = 0
                    }
            }
updatePowerUps(player, effectTaken){
    this.health(player, effectTaken);
    this.energy(player, effectTaken);
    this.money(player, effectTaken);
    // this.powerUpTakenEffect(player, effectTaken);
}

}