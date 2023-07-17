class Player {
    constructor(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed){

        this.position ={
        x: posx,
        y: posy
    },
    this.velocity ={
        x:25,
        y:25  
    },
    this.body = {
        m_name : name,
        m_level : level,
        health : get_health,
        energy : energy,
        thruster : thruster_selection,
        m_damage : m_damage,
        m_gun_type : gunType,
        gun_set : gunType,
        m_gun_speed : gun_speed,
        deathPositionX : NaN,
        deathPositionY : NaN,
        shield_on_off : false,
         lef_side_wign_shot : - 50,
         right_side_wign_shot : + 50
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

    this.storage = {
        energy : 400,
        health : 500,
        money : 0
    }

    this.shotting_interval = 0;
    this.width = 100;
    this.height = 100;
    this.health_total = get_health;
    this.total_energy = energy;
    this.thruster_size = 150;
    this.thruster_animation = 0;
    this.thruster_position_x =  25;
    this.thruster_position_y =  54;    
    this.clearRect = false;
    this.playerDead = false;
    this.showdeathexplosion;
    this.interval = false;

    //Guns
    this.gun_on = [];
    this.explosionn = [];
    this.explosionn2 = [];
  

//sparks animation
this.gameFrame_sparks = 0;
this.staggerFrame_sparks = 1;

}
getPlayerPosX(){ return this.position.x; };
getPlayerPosY(){return this.position.y; };


getGunType(){return this.body.m_gun_type;};

draw(){

    if(!this.clearRect){
    const image = new Image();
    image.src = "assets/spaceship/spaceshipone.png";
    ctx.drawImage(image, this.position.x, this.position.y , this.width, this.height);
   
    if(this.body.health < 0 ){
        this.body.health = 0;
    }
    if(this.body.health > this.health_total){
        this.body.health = this.health_total;
    }

    if(this.body.energy < 0 ){
        this.body.energy = 0;
    }
    if(this.body.energy > this.total_energy){
        this.body.energy = this.total_energy;
    }
  }
}

setPlayerVelocity(velocity){
    this.velocity.x = velocity;
    this.velocity.y = velocity;
}
setPlayerDamage(health_){ this.body.health -= health_;};
getPlayerHealth(){return this.body.health;};


playerOnDeath(){
    if(!this.playerDead){
if(this.body.health == 0){

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

if(this.playerDead){
        ctx.fillStyle = "white";
        ctx.font = "90px Roboto Mono"
    ctx.fillText("You are dead.",700 , c.height / 2)
    }
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
        //ctx.fillStyle = "white"; 
        ctx.fillStyle = "#59ff59"
        }
   
        ctx.font = "15px Roboto Mono";
        ctx.fillText("Lvl:" + this.body.m_level, this.position.x - 70, this.position.y + 35);
        ctx.fillText(this.body.m_name, this.position.x - 70, this.position.y - 25);
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

playerDeathExplosion(explosion_animation){
    explosion_animation.explosionEffect(3,  this.body.deathPositionX - 85, this.body.deathPositionY - 85, this.showdeathexplosion, 2);
    this.showdeathexplosion = false; 
}

playerCollitionMonsters(monsters){
    // player collision with monsters
  this.frames.gameFrame ++;
  this.frames.staggerFrame = 10;

    if(collisionTouch(this, monsters)){
   // if(Math.floor(this.frames.gameFrame/this.frames.staggerFrame) % 5 == 4){
      let damage = 1
        this.setPlayerDamage(damage); 
      console.log("you have been damage your current life is  = " + this.body.health);
        
 //  }
  }
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

energyUsage(){
    if(this.body.energy <= 0){
        this.body.m_gun_type = 1;
    }else{
        this.body.m_gun_type = this.body.gun_set;
    }
}




energyBar(){
    //const lifebar = new Image();

    if(Math.round((this.body.energy / this.total_energy) * 100) <= 50){
        ctx.fillStyle = "orange";
    }
        if(Math.round((this.body.energy / this.total_energy) * 100) <= 20){
            ctx.fillStyle = "red";
        }
        if(Math.round((this.body.energy / this.total_energy) * 100) <= 10){
            ctx.fillStyle = " #720000";
        }
        if(Math.round((this.body.energy / this.total_energy) * 100) > 50){
           ctx.fillStyle = "white"; 
        }
        
        //life bar background
        ctx.fillStyle = "gray";
        ctx.fillRect(this.position.x - 70 , this.position.y - 20, 100, 9);
        //life

        if(Math.round((this.body.energy / this.total_energy) * 100) <= 50){
            ctx.fillStyle = "orange";
        }
       
        if(Math.round((this.body.energy / this.total_energy) * 100) <= 10){
            ctx.fillStyle = " #720000";
        }
        if(Math.round((this.body.energy / this.total_energy) * 100) > 50){
            ctx.fillStyle = "blue"; 
         }
        //lifebar
        ctx.fillRect(this.position.x - 70 , this.position.y - 20, Math.round((this.body.energy / this.total_energy) * 100), 9);


}
playerEffectSparks(spark_low_animation, spark_high_animation){
    if(Math.round((this.body.health / this.health_total) * 100) <= 50){
        spark_low_animation.playerSparks(this.position.x, this.position.y);
        }
        if(Math.round((this.body.health / this.health_total) * 100) <= 10){
            spark_high_animation.playerSparksHigh(this.position.x, this.position.y);
            }
}

showPlayerMoney(){
    if(true){
  
    }
}

showPlayerHealth(){
    const health_images = new Image();
    ctx_ui.font = "30px Roboto Mono";
    health_images.src = 'assets/space_assets/10. Powerups/01 health 02/0000.png',
    ctx_ui.drawImage(health_images, 0, 0, 100, 100)

    ctx_ui.fillStyle = "white";
    ctx_ui.fillText(this.storage.health, 0, 100)
}

showPlayerEnergy(){
    const health_images = new Image();
    ctx_ui.font = "30px Roboto Mono";
    health_images.src = 'assets/space_assets/10. Powerups/03 flash 02/0000.png',
    ctx_ui.drawImage(health_images, 0, 100, 100, 100)

    ctx_ui.fillStyle = "white";
    ctx_ui.fillText(this.storage.energy, 0, 200)
}

playerStatus(){
  //showin gplayer money
    const image_money = new Image();
    ctx_ui_status.fillStyle = "white";
    ctx_ui_status.font = "30px Roboto Mono";
    image_money.src = 'assets/space_assets/10. Powerups/05 money 02/0000.png';
    ctx_ui_status.drawImage(image_money,  0, 0, 100, 100)
    ctx_ui_status.fillText("$"+this.storage.money, 100, 50,  c_ui_status.height - 60);

   
    //showing player health Levels
    ctx_ui_status.fillStyle = "red"; 
 
    ctx_ui_status.font = "30px Roboto Mono";
    ctx_ui_status.fillRect(25, 100, c.width, 25);
    
    //green
    ctx_ui_status.fillStyle = "green";
    ctx_ui_status.font = "30px Roboto Mono";
    ctx_ui_status.fillRect(25, 100, Math.round((this.body.health / this.health_total) * c.width), 25);
//Showing health amount.
    ctx_ui_status.fillStyle = "white";
    ctx_ui_status.font = "40px Roboto Mono";
    ctx_ui_status.fillText(this.body.health, c.width + 30, 125, c_ui_status.height - 60);


    //Showing player Energy Levels

 
  //showing player health Levels
  ctx_ui_status.fillStyle = "gray";
  ctx_ui_status.font = "30px Roboto Mono";
  ctx_ui_status.fillRect(25, 150, c.width, 25);
  
  //green
  ctx_ui_status.fillStyle = "blue";
  ctx_ui_status.font = "30px Roboto Mono";
  ctx_ui_status.fillRect(25, 150, Math.round((this.body.energy / this.total_energy) * c.width), 25);
//Showing health amount.
  ctx_ui_status.fillStyle = "white";
  ctx_ui_status.font = "40px Roboto Mono";
  ctx_ui_status.fillText(this.body.energy, c.width + 30, 176, c_ui_status.height - 60);

}
shotting(){

for(var counting_updating = 0 ; counting_updating < this.gun_on.length; counting_updating++){
this.gun_on[counting_updating].updateShot(
      this, 
      this.explosionn[counting_updating],
      this.explosionn2[counting_updating]
      )
// is not deleting the used shots.
if(this.gun_on[counting_updating].getDeleteShotStatus()){
    this.gun_on.splice(counting_updating , 1);
    this.explosionn.splice(counting_updating , 1);
    this.explosionn2.splice(counting_updating , 1);

}

}
}

shottingCollition(monster){
    for(var countingss = 0; countingss < this.gun_on.length; countingss++){
 this.gun_on[countingss].collisionMonsterShot(monster)
    }
}

shottingiinterval(){
    if(keys.shotting.pressed){
    this.shotting_interval++
    
    if(this.shotting_interval == 1){
      this.gunsType(this.body.m_gun_type);
    }
    if(this.shotting_interval == 20){
        this.shotting_interval = 0;
    }

}else{
    this.shotting_interval = 0;
}
    }


gunsType(type)
{



    // constructor(start_posx, start_posy, shotype, shotdirection, explosion_type, shot_damage, shot_speed, width, height, burst_selection, burst_position.x, burst position.y){
//Default Gun  shotDamage == 1
if(type == 1){
    this.gun_on.push(new shots(this.position.x, this.position.y, 11, 0, 8, 1, 40, 100, 100, 1, -50, -150));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    }

//GUN machine gun double regular bullet each shotDamage == 1
if(type == 2){
    this.gun_on.push(new shots(this.position.x + this.body.lef_side_wign_shot, this.position.y, 11, 0, 8, 1, 40, 100, 100, 1, -50 , -100));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    
    
setTimeout(() => {
    this.gun_on.push(new shots(this.position.x + this.body.right_side_wign_shot, this.position.y, 11, 0, 8, 1, 40, 100, 100, 1, -50, -100));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
}, 200)
}

//GUN 3 single Lazer shot WORKING ON shotDamage == 5 energy used 
    if(type == 3){
        var EnergyUse_3 = 5;
    this.gun_on.push(new shots(this.position.x + 25 , this.position.y, 3,0 ,1, 5, 0, 50, 100));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    this.body.energy -= EnergyUse_3;
    }

//gun 4 Double Lazer Shot shotDamage == 5 energy use 10 -- CURRENTLY WORKING ON.
if(type == 2){
    this.gun_on.push(new shots(this.position.x + this.body.lef_side_wign_shot, this.position.y, 11, 0, 8, 1, 40, 100, 100, 1, -50 , -100));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    
    
setTimeout(() => {
    this.gun_on.push(new shots(this.position.x + this.body.right_side_wign_shot, this.position.y, 11, 0, 8, 1, 40, 100, 100, 1, -50, -100));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
}, 200)
}


    //Gun 10
    if(type == 10){
        var EnergyUse_10 = 30;
    this.gun_on.push(
    new shots(this.position.x + this.body.lef_side_wign_shot, this.position.y, 3, 0, 6, 10, 0), 
    new shots(this.position.x + this.body.right_side_wign_shot, this.position.y, 3, 0, 6, 10, 0), 
    new shots(this.position.x, this.position.y, 4, 0, 6, 10, 0),
    new shots(this.position.x, this.position.y, 10, 3, 7, 10, 0),
    new shots(this.position.x, this.position.y, 10, -3, 7, 10, 0));

    this.explosionn.push(new Animation(),new Animation(),new Animation(), new Animation(), new Animation());
    this.explosionn2.push(new Animation(),new Animation(),new Animation(), new Animation(), new Animation());
    this.body.energy -= EnergyUse;
    }
}

update(animation_Sparks_low, animation_Sparks_high, thruster_animation, player_death_explosionAnimation){

this.shotting();
this.draw();
thruster_animation.setPlayersThruster(this.body.thruster, this.position.x - this.thruster_position_x, this.position.y + this.thruster_position_y, this.thruster_size, this.thruster_size);       
this.playerOnDeath();
this.lifeBar();
this.energyBar();
this.playerMovemements();
this.playerEffectSparks(animation_Sparks_low, animation_Sparks_high);
this.playerDeathExplosion(player_death_explosionAnimation);

//UI Status
this.playerStatus();
this.shottingiinterval();
//UI STORAGE
this.showPlayerHealth();
this.showPlayerEnergy();
this.energyUsage()

console.log(this.gun_on.length);
    }
    }