class PowerUps {
constructor(posx, posy, type){
  
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
this.powerUps_Selecting = {
    health : false,
    energy : false,
    money : false,
    shield : false
}
    this.m_type = type;
    this.look = NaN;
    this.width = 150;
    this.height = 150;
    this.clearItem = false;
    this.dropitem = false;
    this.gameFrame = 0;
    this.staggerFrame = 0;
    this.health_powerUp_taken;
    this.destroyPush = false;
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

health(player, effect_taken){

    if(this.m_type == "health"){
    if(!this.clearItem){
    //    ctx.fillStyle = "pink";
    //        ctx.fillRect(this.position.x, this.position.y += 10 , this.width , this.height)
   
         this.spriteProccessor(heart_powerup, 3, this.position.x, this.position.y += this.velocity.y, this.width, this.height)
        }
         if(this.collision.collision_with_player){
        var health_points = 100; 
        console.log("health Taken <EFFECT HERE>")
        this.collision.collision_posX = this.position.x;
        this.collision.collision_posY = this.position.y;
        this.powerUp_taken = true;
        player.body.health += health_points;
        this.clearItems();
    }


    if(this.powerUp_taken){
    if(effect_taken.spriteProccessor(taken_health, 2, player.position.x - 100, player.position.y - 100, 300, 300)){
        this.destroyPush = true
        this.powerUp_taken = false;
    }
    }
}

}




energy(player, effect_taken ){
    if(this.m_type == "energy"){
    if(!this.clearItem){
            // ctx.fillStyle = "blue";
            //     ctx.fillRect(this.position.x, this.position.y += 10, this.width , this.height);
                this.spriteProccessor(energy_powerup, 3, this.position.x, this.position.y += this.velocity.y, this.width, this.height)
            }
             if(this.collision.collision_with_player){
            var health_points = 100;
            console.log("ENERGY Taken <EFFECT HERE taken_energy sprite>");
            this.collision.collision_posX = this.position.x;
            this.collision.collision_posY = this.position.y;
            this.powerUp_taken = true;
            player.body.health += health_points;
            this.clearItems();    
             }
          if(this.powerUp_taken){
            if(effect_taken.spriteProccessor(taken_energy, 5, player.position.x - 100, player.position.y - 100, 300, 300)){
                this.destroyPush = true
                this.powerUp_taken = false;
            }
            }

      }
    
    }

    money(player, effect_taken){
        if(this.m_type == "money"){
        if(!this.clearItem){
       
                // ctx.fillStyle = "green";
                //     ctx.fillRect(this.position.x, this.position.y += 10, this.width , this.height)
               
                    this.spriteProccessor(money_powerup, 3, this.position.x, this.position.y += this.velocity.y, this.width, this.height)
                }
                 if(this.collision.collision_with_player){
                var health_points = 100;
                console.log("MONEY Taken <EFFECT HERE>");
                this.collision.collision_posX = this.position.x;
                this.collision.collision_posY = this.position.y;
                this.powerUp_taken = true;
                player.body.health += health_points;     
                this.clearItems();
          }
          if(this.powerUp_taken){
            if(effect_taken.spriteProccessor(taken_money, 2, player.position.x - 100, player.position.y - 100, 300, 300)){
                this.distroyPush = true;
                this.powerUp_taken = false;
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

updatePowerUps(player, effectTaken){
    this.health(player, effectTaken);
    this.energy(player, effectTaken);
    this.money(player, effectTaken);
}

}