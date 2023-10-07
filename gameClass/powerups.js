class PowerUps {
constructor(posx, posy, type, points_adding, width, height){

    this.position = {
        x : posx, 
        y : posy
    }
    this.power = {
     amount_adding : NaN,
        m_sprite : NaN
    }
    this.velocity = {
        y : 5,
        x : 5
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
    if(!width && !height){
    this.width = 100;
    this.height = 100;
    }else{
        this.width = width;
        this.height = height;
    }
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

this.destroy_timer = 0;

}

setDestroyObject(set){this.destroyPush = set;};
getDestroyObject(){return this.destroyPush;};
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
        effects_global.push(new Effects("HEALTH_TAKEN_EFFECT", player.position.x - 115, player.position.y - 120, 0, 0, "+"+this.m_points_adding, "white"))
    }

}

}


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
            player.body.energy += this.m_points_adding;
            this.clearItems();    
            effects_global.push(new Effects("ENERGY_TAKEN_EFFECT", player.position.x - 115, player.position.y - 120, 0, 0, "+"+this.m_points_adding, "blue"))

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
                effects_global.push(new Effects("MONEY_TAKEN_EFFECT", player.position.x - 115, player.position.y - 120, 0, 0, "+"+this.m_points_adding, "green"))

          }
      
        }
        }

clearItems(){
    this.position.x = 500;
    this.position.y =  c.height + 500;
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


            //guns upgrades
            machineGunBeacon(player, effect_taken){
                if(this.m_type == "machineGun"){
                    var gundefault = 1;
                    var gunTwo = 2;
                if(!this.clearItem){
                    // ctx.fillStyle = "pink";
                    // ctx.fillRect(this.position.x, this.position.y += this.velocity.y , this.width , this.height)
               const health_image = new Image();
               health_image.src = 'assets/beacon/machineGunBeacon.png',
            
                    ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
                    }
            
                if(this.collision.collision_with_player){
                     
                    //console.log("health Taken <EFFECT HERE>");
                    this.collision.collision_posX = this.position.x;
                    this.collision.collision_posY = this.position.y;
                    this.powerUp_taken = true;
                if(player.getGunType() != gunTwo){
                    if(player.getGunType() != gundefault){
                        player.setGunType(gundefault);
                        console.log("gun set to 1")
                    }
                }
                    if(player.getGunType() == gundefault){
                        player.setGunType(gunTwo);
                        console.log("gun set to 2");
                    }



                    this.clearItems();
                }
            
            }
            
            }

 



            laserGunBeacon(player, effect_taken){
                if(this.m_type == "energyShot"){
                    var gundefault = 3;
                    var gunTwo = 4;
                if(!this.clearItem){
                    // ctx.fillStyle = "pink";
                    // ctx.fillRect(this.position.x, this.position.y += this.velocity.y , this.width , this.height)
               const health_image = new Image();
               health_image.src = 'assets/beacon/energyGunBeacon.png',
            
                    ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
                    }
            
                if(this.collision.collision_with_player){
                     
                    //console.log("health Taken <EFFECT HERE>");
                    this.collision.collision_posX = this.position.x;
                    this.collision.collision_posY = this.position.y;
                    this.powerUp_taken = true;
                if(player.getGunType() != gunTwo){
                    if(player.getGunType() != gundefault){
                        player.setGunType(gundefault);
                       
                    }
                }
                    if(player.getGunType() == gundefault){
                        player.setGunType(gunTwo);
                        
                    }



                    this.clearItems();
                }
            
            }
            
            }

            plasmaGunBeacon(player, effect_taken){
                if(this.m_type == "energyPlasma"){
                    var gundefault = 5;
                    var gunTwo = 6;
                if(!this.clearItem){
                    // ctx.fillStyle = "pink";
                    // ctx.fillRect(this.position.x, this.position.y += this.velocity.y , this.width , this.height)
               const health_image = new Image();
               health_image.src = 'assets/beacon/plasmaBeacon.png',
            
                    ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
                    }
            
                if(this.collision.collision_with_player){
                     
                    //console.log("health Taken <EFFECT HERE>");
                    this.collision.collision_posX = this.position.x;
                    this.collision.collision_posY = this.position.y;
                    this.powerUp_taken = true;
                if(player.getGunType() != gunTwo){
                    if(player.getGunType() != gundefault){
                        player.setGunType(gundefault);
                       
                    }
                }
                    if(player.getGunType() == gundefault){
                        player.setGunType(gunTwo);
                        
                    }



                    this.clearItems();
                }
            
            }
            
            }

            lavaGunBeacon(player, effect_taken){
                if(this.m_type == "energyLava"){
                    var gundefault = 7;
                    var gunTwo = 8;
                if(!this.clearItem){
                    // ctx.fillStyle = "pink";
                    // ctx.fillRect(this.position.x, this.position.y += this.velocity.y , this.width , this.height)
               const health_image = new Image();
               health_image.src = 'assets/beacon/lavaGunBeacon.png',
            
                    ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
                    }
            
                if(this.collision.collision_with_player){
                     
                    //console.log("health Taken <EFFECT HERE>");
                    this.collision.collision_posX = this.position.x;
                    this.collision.collision_posY = this.position.y;
                    this.powerUp_taken = true;
                if(player.getGunType() != gunTwo){
                    if(player.getGunType() != gundefault){
                        player.setGunType(gundefault);
                       
                    }
                }
                    if(player.getGunType() == gundefault){
                        player.setGunType(gunTwo);
                        
                    }



                    this.clearItems();
                }
            
            }
            
            }


            GreenBeacon(player, effect_taken){
                if(this.m_type == "energyGreen"){
                    var gundefault = 9;
                    var gunTwo = 10;
                if(!this.clearItem){
                    // ctx.fillStyle = "pink";
                    // ctx.fillRect(this.position.x, this.position.y += this.velocity.y , this.width , this.height)
               const health_image = new Image();
               health_image.src = 'assets/beacon/greenBeacon.png',
            
                    ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
                    }
            
                if(this.collision.collision_with_player){
                     
                    //console.log("health Taken <EFFECT HERE>");
                    this.collision.collision_posX = this.position.x;
                    this.collision.collision_posY = this.position.y;
                    this.powerUp_taken = true;
                if(player.getGunType() != gunTwo){
                    if(player.getGunType() != gundefault){
                        player.setGunType(gundefault);
                       
                    }
                }
                    if(player.getGunType() == gundefault){
                        player.setGunType(gunTwo);
                        
                    }
                    this.clearItems();
                }
            
            }
        }
        
        destroyPowerUps(){
            if(this.position.y > c.height + 100){
                this.destroy_timer++
                if(this.destroy_timer == 50){
                this.setDestroyObject(true);
                }
            }
        }

//Shield

blueShield(player){
    if(this.m_type == "blueShield"){
        var gundefault = 3;
        var gunTwo = 4;
    if(!this.clearItem){
        // ctx.fillStyle = "pink";
        // ctx.fillRect(this.position.x, this.position.y += this.velocity.y , this.width , this.height)
   const health_image = new Image();
   health_image.src = shield_spritesSheet.blue_shield.icon;
        ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
        }

    if(this.collision.collision_with_player){
        player.clearShield();
        player.pushShield(1)
         
        //console.log("health Taken <EFFECT HERE>");
        this.collision.collision_posX = this.position.x;
        this.collision.collision_posY = this.position.y;
        this.clearItems();
    }

}

}

redShield(player){
    if(this.m_type == "redShield"){
        var gundefault = 3;
        var gunTwo = 4;
    if(!this.clearItem){
        // ctx.fillStyle = "pink";
        // ctx.fillRect(this.position.x, this.position.y += this.velocity.y , this.width , this.height)
   const health_image = new Image();
   health_image.src = shield_spritesSheet.red_shield.icon;

        ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
        }

    if(this.collision.collision_with_player){
        player.clearShield();
         player.pushShield(2)
        //console.log("health Taken <EFFECT HERE>");
        this.collision.collision_posX = this.position.x;
        this.collision.collision_posY = this.position.y;
        this.clearItems();
    }

}

}




updatePowerUps(player, effectTaken){
    this.health(player, effectTaken);
    this.energy(player, effectTaken);
    this.money(player, effectTaken);
    this.blueShield(player);
    this.redShield(player)

    this.machineGunBeacon(player, effectTaken);
    this.laserGunBeacon(player, effectTaken);
    this.plasmaGunBeacon(player, effectTaken);
    this.lavaGunBeacon(player, effectTaken);
    this.GreenBeacon(player, effectTaken);
    this.destroyPowerUps();

}

}