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

drawHealth(){

    //HEALTH
    if(this.m_type == powerUpsSelect.HEALTH){
        const health_image = new Image();
        health_image.src = 'assets/space_assets/10. Powerups/01 health 02/0000.png',
        ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
    }

    //ENERGY
    if(this.m_type == powerUpsSelect.ENERGY){
        const energy_Image  = new Image();
        energy_Image.src = 'assets/space_assets/10. Powerups/03 flash 02/0000.png';
        ctx.drawImage(energy_Image, this.position.x, this.position.y += this.velocity.y, this.width, this.height);
    }
    //MONEY
    if(this.m_type == powerUpsSelect.MONEY){
        const money_image = new Image();
        money_image.src = 'assets/space_assets/10. Powerups/05 money 02/0000.png';
        ctx.drawImage(money_image, this.position.x, this.position.y += this.velocity.y, this.width, this.height);
    }
    //MACHINE GUN
    if(this.m_type == powerUpsSelect.MACHINE_GUN){
        const health_image = new Image();
        health_image.src = 'assets/beacon/machineGunBeacon.png',
        ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
    }
    //LAZER GUN
    if(this.m_type == powerUpsSelect.LAZER_GUN){
        const health_image = new Image();
        health_image.src = 'assets/beacon/energyGunBeacon.png',
        ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
    }
    //PLASMA GUN
    if(this.m_type == powerUpsSelect.PLASMA_GUN){
        const health_image = new Image();
        health_image.src = 'assets/beacon/plasmaBeacon.png',
        ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
    }
    //LAVA GUN
    if(this.m_type == powerUpsSelect.LAVA_GUN){
        const health_image = new Image();
        health_image.src = 'assets/beacon/lavaGunBeacon.png',
        ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
    }
     //GREEN GUN
     if(this.m_type == powerUpsSelect.GREEN_GUN){
        const health_image = new Image();
        health_image.src = 'assets/beacon/greenBeacon.png',
        ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
    }
     //BLUE SHIELD
     if(this.m_type == powerUpsSelect.BLUE_SHIELD){
        const health_image = new Image();
        health_image.src = shield_spritesSheet.blue_shield.icon;
        ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
    }
    // RED SHIELD
    if(this.m_type == powerUpsSelect.RED_SHIELD){
        const health_image = new Image();
        health_image.src = shield_spritesSheet.red_shield.icon;
        ctx.drawImage(health_image,this.position.x, this.position.y += this.velocity.y, this.width, this.height);
    }
}

health(player){
    
    if(this.m_type == powerUpsSelect.HEALTH){
    if(this.collision.collision_with_player){
         
        //console.log("health Taken <EFFECT HERE>");
        this.collision.collision_posX = this.position.x;
        this.collision.collision_posY = this.position.y;
        this.powerUp_taken = true;
        player.body.health += this.m_points_adding;
        this.clearItems();
        effects_global.push(new Effects("HEALTH_TAKEN_EFFECT", player.position.x - 115, player.position.y - 120, 0, 0, "+"+this.m_points_adding, "#ff6c6c"))
    }
}
}

energy(player){

if(this.m_type == powerUpsSelect.ENERGY){
        if(this.collision.collision_with_player){
    this.collision.collision_posX = this.position.x;
    this.collision.collision_posY = this.position.y;
    this.powerUp_taken = true;
    player.body.energy += this.m_points_adding;
    this.clearItems();    
    effects_global.push(new Effects("ENERGY_TAKEN_EFFECT", player.position.x - 115, player.position.y - 120, 0, 0, "+"+this.m_points_adding, "#23e0ff"))

        } 
}
}

money(player){
if(this.m_type == powerUpsSelect.MONEY){
        if(this.collision.collision_with_player){
    // console.log("MONEY Taken <EFFECT HERE>");
    this.collision.collision_posX = this.position.x;
    this.collision.collision_posY = this.position.y;
    this.powerUp_taken = true;
    player.storage.money += this.m_points_adding;     
    this.clearItems();
    effects_global.push(new Effects("MONEY_TAKEN_EFFECT", player.position.x - 115, player.position.y - 120, 0, 0, "+$"+this.m_points_adding, "#7cff7e"))
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
machineGunBeacon(player){
    if(this.m_type == powerUpsSelect.MACHINE_GUN){
        var gundefault = 1;
        var gunTwo = 2;
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

 



laserGunBeacon(player){
    if(this.m_type == powerUpsSelect.LAZER_GUN){
        var gundefault = 3;
        var gunTwo = 4;
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

plasmaGunBeacon(player){
    if(this.m_type == powerUpsSelect.PLASMA_GUN){
        var gundefault = 5;
        var gunTwo = 6;
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

lavaGunBeacon(player){
    if(this.m_type == powerUpsSelect.LAVA_GUN){
        var gundefault = 7;
        var gunTwo = 8;

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


GreenBeacon(player){
    if(this.m_type == powerUpsSelect.GREEN_GUN){
        var gundefault = 9;
        var gunTwo = 10;

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
    if(this.m_type == powerUpsSelect.BLUE_SHIELD){
    if(this.collision.collision_with_player){
        player.clearShield();
        player.pushShield(1)
         
        //console.log("health Taken <EFFECT HERE>");
        this.collision.collision_posX = this.position.x;
        this.collision.collision_posY = this.position.y;
        effects_global.push(new Effects("BLUE_SHIELD_TAKEN_EFFECT", player.position.x - 160 , player.position.y - 160, 400, 400, "", "#7cff7e"))
        this.clearItems();
    }

}
}

redShield(player){
    if(this.m_type == powerUpsSelect.RED_SHIELD){
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


updatePowerUpsFunctionality(player){
    this.health(player);
    this.energy(player);
    this.money(player);
    this.blueShield(player);
    this.redShield(player);

    this.machineGunBeacon(player);
    this.laserGunBeacon(player);
    this.plasmaGunBeacon(player);
    this.lavaGunBeacon(player);
    this.GreenBeacon(player);
    this.destroyPowerUps();
}



updatePowerUps(){
    this.drawHealth();
}

}