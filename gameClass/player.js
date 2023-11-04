class Player {
    constructor(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed){

        this.position ={
        x: posx,//(c.width / 2),  //
        y: posy//c.height + c.height / 2, //
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
        shield_on_off : true,
        m_shield_type : 2,
         lef_side_wign_shot : - 50,
         right_side_wign_shot : + 50,
         powerBombEnergy : 950,
         total_set_powerbombenergy : 1000
    }
    this.collition = {
        collition_mons3ters : false,
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
    this.StartingPlayer = {
        player_start_status : true,
        playerSet_onStarting_position : true,
        player_starting_pos : {
            x : c.width / 2 - (this.width / 2),
            y : c.height + c.height / 2
        },
        playerStart_blinking : 0,
player_no_damage : false,
player_blinking_start : false,
timer_to_start : 0

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
    this.gun_carry = 0;

//shields
this.shields_class = [];

    //Guns
    this.gun_on = [];
    this.explosionn = [];
    this.explosionn2 = [];

    this.player_storage = [1, 2, 3];
    this.set_amount = 0;


    this.alert = false;
    this.alert_counting = 0;
    this.alert_on_off = false;

//sparks animation
this.gameFrame_sparks = 0;
this.staggerFrame_sparks = 1;

this.showDamageAnimation = {
    gameFrameAnimationTime : 0,
    damage_recorded : 0
}
this.showdamage__ ;
this.random_number = 0;



this.inventorySlots = [
    new Inventory((c.width - 1000), 0),
    new Inventory((c.width - 1000) + 100, 0),
    new Inventory((c.width - 1000) + 200, 0),
    new Inventory((c.width - 1000) + 300, 0),
    new Inventory((c.width - 1000) + 400, 0),
    new Inventory((c.width - 1000) + 500, 0),
    new Inventory((c.width - 1000), 100),
    new Inventory((c.width - 1000) + 100, 100),
    new Inventory((c.width - 1000) + 200, 100),
    new Inventory((c.width - 1000) + 300, 100),
    new Inventory((c.width - 1000) + 400, 100),
    new Inventory((c.width - 1000) + 500, 100),
];
this.inventory = ["Health", "Health", "Health"]


this.controller_movements = {
    mouse : false,
    keyboard : true
}


}


clearShield(){ this.shields_class.splice(0, 1); };

randomNumber(from, to){
    this.random_number = Math.floor(Math.random() * to) + from   
    return this.random_number;
  }
getPlayerPosX(){ return this.position.x; };
getPlayerPosY(){return this.position.y; };

setCollitionWithMonsters(set){this.collition.collition_monsters = set};
getCollitionWithMonsters(){return this.collition.collition_monsters;};
getGunType(){return this.body.m_gun_type;};
setGunType(set){ this.body.gun_set = set;};

getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect()
    if(this.playerDead == false){
    this.position.x = (event.clientX - rect.left) - 50
    this.position.y = (event.clientY - rect.top) - 250
    }
    //console.log("x: " + x + " y: " + y)
}
pushShield(type){
    this.shields_class.push(new Shields(type));
}
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
addPlayerHealth(amount){this.body.health += amount;};
subtractPlayerHealth(set){ this.body.health -= set;}

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
        ctx.font = "90px Anton"
        ctx.textAlign = "center";
    ctx.fillText("You are dead.", c.width/2 , c.height / 2 - 300)
    ctx.textAlign = "start";
    }
};




//about shields
getPlayerShieldType(){ return this.body.m_shield_type;};
setPlayerShieldType(set){this.body.m_shield_type = set;};
getPlayerShieldStatus(){return this.body.shield_on_off;};
setPlayerShieldStatus(set){this.body.shield_on_off = set;};
AddShield(setShieldType){
this.setPlayerShieldType(setShieldType);
this.setPlayerShieldStatus(true);
}

shieldOff(){
    this.setPlayerShieldStatus(false);
}
playerShield(){
    if(this.shields_class.length > 0){
if(this.getPlayerShieldStatus()){
    this.shields_class[0].drawShield(this);
 
}
    }
}

lifeBar(){
    //const lifebar = new Image();
    // live bar text colork
    if(Math.round((this.body.health / this.health_total) * 100) <= 100/2){
        ctx.fillStyle = "orange";
    }
    if(Math.round((this.body.health / this.health_total) * 100) <= 100/3){
        ctx.fillStyle = "red";
    }
    if(Math.round((this.body.health / this.health_total) * 100) <= 100/5){
        ctx.fillStyle = " #720000";
        this.alert = true;
    }else{
        this.alert = false;
    }
    if(Math.round((this.body.health / this.health_total) * 100) > 50){
        //ctx.fillStyle = "white"; 
        ctx.fillStyle = "#59ff59"
        }
   
        ctx.font = "15px Roboto Mono";
        ctx.fillText("Lvl:" + this.body.m_level, this.position.x - 70, this.position.y + 35);
        ctx.fillText(this.body.m_name, this.position.x - 70, this.position.y - 25);
        ctx.fillText("HP: "+ this.body.health, this.position.x - 70, this.position.y + 15);
      
        
        //Life bar
        ctx.fillStyle = "gray";
        ctx.fillRect(this.position.x - 70 , this.position.y - 10, 100, 9);
        //life

        if(Math.round((this.body.health / this.health_total) * 100) <= 100/2){
            ctx.fillStyle = "orange";
        }
        if(Math.round((this.body.health / this.health_total) * 100) <= 100/3){
            ctx.fillStyle = "red";
        }
        if(Math.round((this.body.health / this.health_total) * 100) <= 100/5){
            ctx.fillStyle = " #720000";
        }
        if(Math.round((this.body.health / this.health_total) * 100) > 100/2){
            ctx.fillStyle = "green"; 
         }
        ctx.fillRect(this.position.x - 70 , this.position.y - 10, Math.round((this.body.health / this.health_total) * 100), 9);
}

playerDeathExplosion(explosion_animation){
    explosion_animation.explosionEffect(3,  this.body.deathPositionX - 85, this.body.deathPositionY - 85, this.showdeathexplosion, 2);
    this.showdeathexplosion = false; 
}

playerCollitionMonsters(monsters){
    if(!this.StartingPlayer.player_no_damage){
    // player collision with monsters
  this.frames.gameFrame ++;
  this.frames.staggerFrame = 10;

    if(collisionTouch(this, monsters)){
   // if(Math.floor(this.frames.gameFrame/this.frames.staggerFrame) % 5 == 4){
       this.setCollitionWithMonsters(collisionTouch(this, monsters));
      let damage = this.randomNumber(1,monsters.getMonsterDamage()) ;
      this.showDamageAnimation.damage_recorded = damage;
        this.setPlayerDamage(damage); 
      //console.log("you have been damage your current life is  = " + this.body.health);
        
 //  }

  }
}
  }

  setPlayerHitDamage(set){this.showDamageAnimation.damage_recorded = set;};
playerMovemements(){
        // player movements
var keyboard_use = true;

if(this.StartingPlayer.player_start_status){
if(keyboard_use){
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
}else{
            addEventListener("mousemove", (event) => {
        //console.log(event);
        // console.log("X == " + event.clientX + "Y == " + event.clientY); 
        this.position.x = event.clientX;
        this.position.y = event.clientY;
          });
     
}
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

    if(Math.round((this.body.energy / this.total_energy) * 100) <= 100/2){
        ctx.fillStyle = "orange";
    }
        if(Math.round((this.body.energy / this.total_energy) * 100) <= 100/3){
            ctx.fillStyle = "red";
        }
        if(Math.round((this.body.energy / this.total_energy) * 100) <= 100/4){
            ctx.fillStyle = " #720000";
        }
        if(Math.round((this.body.energy / this.total_energy) * 100) > 50){
           ctx.fillStyle = "white"; 
        }
        
        //life bar background
        ctx.fillStyle = "gray";
        ctx.fillRect(this.position.x - 70 , this.position.y - 20, 100, 9);
        //life

        if(Math.round((this.body.energy / this.total_energy) * 100) <= 100/2){
            ctx.fillStyle = "orange";
        }
       
        if(Math.round((this.body.energy / this.total_energy) * 100) <= 100/3){
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
    // const health_images = new Image();
    // ctx_ui.font = "30px Roboto Mono";
    // health_images.src = 'assets/space_assets/10. Powerups/01 health 02/0000.png',
    // ctx_ui.drawImage(health_images, 0, 0, 100, 100)

    // ctx_ui.fillStyle = "white";
    // ctx_ui.fillText(this.storage.health, 0, 100)
}

showPlayerEnergy(){
    // const health_images = new Image();
    // ctx_ui.font = "30px Roboto Mono";
    // health_images.src = 'assets/space_assets/10. Powerups/03 flash 02/0000.png',
    // ctx_ui.drawImage(health_images, 100, 0, 100, 100)
    // ctx_ui.drawImage(health_images, 100, 0, 100, 100)
    // ctx_ui.fillStyle = "white";
    // ctx_ui.fillText(this.storage.energy, 0, 100)
}



playerStatus(){

var bar_width = 700;
var bar_height = 25

//Showing current Weapon

const image_weapon = new Image();
    ctx_ui_status.fillStyle = "white";
    ctx_ui_status.font = "40px Anton";
    image_weapon.src = UI.inventory_sprite_off;
    ctx_ui_status.drawImage(image_weapon,  ((c.width / 2) / 2) + 100 , 0, 200, 200)
    image_weapon.src = weapon_icon[2];
    ctx_ui_status.drawImage(image_weapon,  ((c.width / 2) / 2) + 100 , 0, 200, 200)



    ctx_ui_status.strokeStyle = "black"
    ctx_ui_status.fillText("Gun", ((c.width / 2) / 2) + 100, 50);
    ctx_ui_status.strokeText("Gun", ((c.width / 2) / 2) + 100, 50);
    //gun level
    ctx_ui_status.fillText("Level - 9", ((c.width / 2) / 2) + 100, 190);
    ctx_ui_status.strokeText("Level - 9", ((c.width / 2) / 2) + 100, 190);

//Showing current shield
    const image_shield= new Image();
    ctx_ui_status.fillStyle = "white";
    ctx_ui_status.font = "40px Anton";
    image_shield.src = UI.inventory_sprite_off;
    ctx_ui_status.drawImage(image_shield,  ((c.width / 2) / 2) + 350 , 0, 200, 200)
    image_shield.src = shield_spritesSheet.red_shield.icon;
    ctx_ui_status.drawImage(image_shield,  ((c.width / 2) / 2) + 350 , 0, 200, 200)
   


    ctx_ui_status.strokeStyle = "black"
    ctx_ui_status.fillText("Shield", ((c.width / 2) / 2) + 350, 50);
    ctx_ui_status.strokeText("Shield", ((c.width / 2) / 2) + 350, 50);
    //gun level
    ctx_ui_status.fillText("Expire: 9 - 5", ((c.width / 2) / 2) + 350, 190);
    ctx_ui_status.strokeText("Expire: 9 - 5 ", ((c.width / 2) / 2) + 350, 190);



  //showin gplayer money
    const image_money = new Image();
    ctx_ui_status.fillStyle = "white";
    ctx_ui_status.font = "30px Roboto Mono";
    image_money.src = 'assets/space_assets/10. Powerups/05 money 02/0000.png';
    ctx_ui_status.drawImage(image_money,  0, 0, 100, 100)
    ctx_ui_status.fillText("$"+this.storage.money, 100, 50,  c_ui_status.height - 60);

   
    //showing player health Levels
    ctx_ui_status.fillStyle = "gray"; 
 
    ctx_ui_status.font = "30px Roboto Mono";
    ctx_ui_status.fillRect(25, 100, bar_width, bar_height);
    
    //green
    // console.log(Math.round((this.body.health / this.health_total) * bar_width ))
    if(Math.round((this.body.health / this.health_total) * bar_width ) >= bar_width / 2){
         ctx_ui_status.fillStyle = "green";  
    }
    if(Math.round((this.body.health / this.health_total) * bar_width ) <= bar_width / 2){
        ctx_ui_status.fillStyle = "orange";  
    }
    if(Math.round((this.body.health / this.health_total) * bar_width ) <= bar_width / 3){
        ctx_ui_status.fillStyle = "red";  
    }
    if(Math.round((this.body.health / this.health_total) * bar_width ) <= bar_width / 5){
        ctx_ui_status.fillStyle = "#720000";  
    }
 
    ctx_ui_status.font = "30px Roboto Mono";
    ctx_ui_status.fillRect(25, 100, Math.round((this.body.health / this.health_total) * bar_width ), bar_height);
//Showing health amount.


if(Math.round((this.body.health / this.health_total) * bar_width ) >= bar_width / 2){
    ctx_ui_status.fillStyle = "white";  
}
if(Math.round((this.body.health / this.health_total) * bar_width ) <= bar_width / 2){
   ctx_ui_status.fillStyle = "orange";  
}
if(Math.round((this.body.health / this.health_total) * bar_width ) <= bar_width / 3){
   ctx_ui_status.fillStyle = "red";  
}
if(Math.round((this.body.health / this.health_total) * bar_width ) <= bar_width / 5){
   ctx_ui_status.fillStyle = "#720000";  
}
    ctx_ui_status.font = "40px Roboto Mono";
    ctx_ui_status.fillText(this.body.health, bar_width / 2,100);


    //Showing player Energy Levels

 
  //showing player energy Levels
  ctx_ui_status.fillStyle = "gray";
  ctx_ui_status.font = "30px Roboto Mono";
  ctx_ui_status.fillRect(25, 150, bar_width, bar_height);
  
  //green
  ctx_ui_status.fillStyle = "blue";
  ctx_ui_status.font = "30px Roboto Mono";
  ctx_ui_status.fillRect(25, 150, Math.round((this.body.energy / this.total_energy) * bar_width), bar_height);
//Showing energy amount.
  ctx_ui_status.fillStyle = "white";
  ctx_ui_status.font = "40px Roboto Mono";
  ctx_ui_status.fillText(this.body.energy, bar_width / 2, 150, c_ui_status.height - 60);

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
        if(monster){
 this.gun_on[countingss].collisionMonsterShot(monster)
        }
    }
}

shottingiinterval(){

if(this.body.m_gun_type == 1 || this.body.m_gun_type == 2){
    var shottinInterval = 5
}else{
   var shottinInterval = 10 
}

    
    if(keys.shotting.pressed){
    this.shotting_interval++
    
    if(this.shotting_interval == 1){
      this.gunsType(this.body.m_gun_type);
    }
    if(this.shotting_interval == shottinInterval){
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
    var damage_1 = 1;
    this.gun_on.push(new shots(this.position.x, this.position.y, 11, 0, 8, damage_1, 40, 100, 100, 1, -50, -150));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    }

//GUN machine gun double regular bullet each shotDamage == 1
if(type == 2){
    var damage_2 = 1;
    this.gun_on.push(new shots(this.position.x + this.body.lef_side_wign_shot, this.position.y, 11, 0, 8, damage_2, 40, 100, 100, 1, -50 , -100));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    
    
setTimeout(() => {
    this.gun_on.push(new shots(this.position.x + this.body.right_side_wign_shot, this.position.y, 11, 0, 8, damage_2, 40, 100, 100, 1, -50, -100));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
}, 200)
}

//GUN 3 single Lazer shot WORKING ON shotDamage == 5 energy used 
    if(type == 3){
        var EnergyUse_3 = 5;
        var damage_3 = 5
    this.gun_on.push(new shots(this.position.x , this.position.y, 3,0 ,12, damage_3, 0, 100, 100));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    this.body.energy -= EnergyUse_3;
    }

//gun 4 Double Lazer Shot shotDamage == 5 energy use 10 -- CURRENTLY WORKING ON.
if(type == 4){
    var EnergyUse_4 = 10;
    var damage_4 = 5;
    this.gun_on.push(new shots(this.position.x + this.body.lef_side_wign_shot, this.position.y, 3, 0, 12, damage_4, 0, 100, 150, 1, -50 , -100));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    this.body.energy -= EnergyUse_4;
    
setTimeout(() => {
    this.gun_on.push(new shots(this.position.x + this.body.right_side_wign_shot , this.position.y, 3, 0, 12, damage_4, 0, 100, 150, 1, -50, -100));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
}, 200)
}


//gun 5 single lazer purple damage 7 energy used 11
if(type == 5){
var EnergyUse_5 = 11;
this.body.energy -= EnergyUse_5
var damage_5 = 7;
    this.gun_on.push(new shots(this.position.x, this.position.y,5, 0, 7, damage_5, 40, 100, 200, 1, -50, -150));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    }

// gun 6 double single lazers damage 7 use 15 energy
if(type == 6){
    var EnergyUse_6 = 15;
    this.body.energy -= EnergyUse_6;
    var damage_6 = 7;
    this.gun_on.push(new shots(this.position.x + this.body.lef_side_wign_shot, this.position.y,5, 0, 7, damage_6, 40, 100, 150, 1, -50, -150));            
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    
setTimeout(() => {
    this.gun_on.push(new shots(this.position.x + this.body.right_side_wign_shot , this.position.y,5, 0, 7, damage_6, 40, 100, 150, 1, -50, -150));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
}, 200)
}

//gun 7 single Lava shots damage = 10 energy 18
if(type == 7){
    var EnergyUse_7 = 18;
    this.body.energy -= EnergyUse_7
    var damage_7 = 10;
            this.gun_on.push(
            new shots(this.position.x, this.position.y,7, 0, 10, damage_7, 40, 100, 300, 1, -50, -150));
            this.explosionn.push(new Animation());
            this.explosionn2.push(new Animation());
            }

//gun 8 lava double energy used 20
if(type == 8){
    var EnergyUse_8 = 20;
    this.body.energy -= EnergyUse_8;
    var damage_8 = 10;
    this.gun_on.push(
        new shots(this.position.x + this.body.lef_side_wign_shot, this.position.y,7, 0, 10, damage_8, 40, 100, 300, 1, -50, -150)
        );
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    
setTimeout(() => {
    this.gun_on.push(new shots(this.position.x + this.body.right_side_wign_shot, this.position.y,7, 0, 10, damage_8, 40, 100, 300, 1, -50, -150));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
}, 200)
}


//gun 9 green been damage 8 = use energy 19  
if(type == 9){
    var EnergyUse_9 = 18;
    this.body.energy -= EnergyUse_9
    var damage_9 = 8;
            this.gun_on.push(new shots(this.position.x, this.position.y,9, 0, 13, damage_9, 40, 100, 300, 1, -50, -150));
            this.explosionn.push(new Animation());
            this.explosionn2.push(new Animation());
            }

//gun 10

if(type == 10){
    var EnergyUse_10 = 19;
    this.body.energy -= EnergyUse_10;
    var damage_10 = 10;
    this.gun_on.push(new shots(this.position.x + this.body.lef_side_wign_shot, this.position.y,9, 0, 13, damage_10, 40, 100, 300, 1, -50, -150));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
    
setTimeout(() => {
    this.gun_on.push(new shots(this.position.x + this.body.right_side_wign_shot, this.position.y,9, 0, 13, damage_10, 40, 100, 300, 1, -50, -150));
    this.explosionn.push(new Animation());
    this.explosionn2.push(new Animation());
}, 200)
}

    //Gun 20 LAVA SPREAD
    if(type == 20){
        var EnergyUse_20 = 30;
    this.gun_on.push(
    new shots(this.position.x + this.body.lef_side_wign_shot, this.position.y,7, 0, 10, 10, 0, 100, 300, 1, -50, -150),
    new shots(this.position.x + this.body.right_side_wign_shot, this.position.y,7, 0, 10, 10, 0, 100, 300, 1, -50, -150),
    new shots(this.position.x, this.position.y, 7, 0, 10, 10, 0,  100, 300, 1, -50, -150),
    new shots(this.position.x, this.position.y, 7, 3, 10, 10, 0,  100, 300, 1, -50, -150),
    new shots(this.position.x, this.position.y, 7, -3, 10, 10, 0, 100, 300, 1, -50, -150));

    this.explosionn.push(new Animation(),new Animation(),new Animation(), new Animation(), new Animation());
    this.explosionn2.push(new Animation(),new Animation(),new Animation(), new Animation(), new Animation());
    this.body.energy -= EnergyUse_20;
    }
}


alerting(){
if(this.alert)
this.alert_counting ++
if(this.alert_counting > 10){
    this.alert_on_off = true;
    if(this.alert_counting > 20){
        this.alert_on_off = false;
        this.alert_counting = 0;
    }
}
if(this.alert_on_off){
    ctx_ui_status.fillStyle = "red";
    ctx_ui_status.font = "200px Anton";
    ctx_ui_status.fillText("!", 800, 190, 200, 200)
}
}

setShowAnimation(set){this.showdamage__ = set;};

damageShowAnimation(damage,pos_x, pos_y, color, if_true){
    
    if(if_true){this.setShowAnimation(true)}
    
    this.showDamageAnimation.gameFrameAnimationTime++;

    if(this.showdamage__ == true){  
        ctx.fillStyle = color;
        ctx.strokeStyle = "black"
        ctx.font = "90px anton";
        ctx.fillText("-"+ damage + " ! ", pos_x , pos_y);
        ctx.strokeText("-" + damage + " ! ", pos_x, pos_y);
    } 
    if(this.showDamageAnimation.gameFrameAnimationTime >= 300){
        this.showdamage__ = false;
        this.showDamageAnimation.gameFrameAnimationTime = 0;
        this.collition.collition_monsters = false;
            }
}

playerView(){
    this.lifeBar();
this.energyBar();   
if(this.getPlayerShieldStatus()){
    this.damageShowAnimation(this.showDamageAnimation.damage_recorded, this.position.x + 20, this.position.y + 90, "blue", this.collition.collition_monsters)
}else{
this.damageShowAnimation(this.showDamageAnimation.damage_recorded, this.position.x + 20, this.position.y + 90, "red", this.collition.collition_monsters)
}
}

// textWithStroke(text , textColor, strokeColor, text_size_and_style, which_canvas, text_posx, text_posy){
//     which_canvas.fillStyle = textColor;
//     which_canvas.font = text_size_and_style;
//     which_canvas.strokeStyle = strokeColor;
//     which_canvas.fillText(text, text_posx, text_posy)
//     which_canvas.strokeText(text, text_posx, text_posy)

// }

playerInventory(){

    ctx_ui_status.fillStyle = "black";
    ctx_ui_status.fillRect(c.width - 1000, 0, 600 , c.height)
    
    // // const slot_images = new Image();
    // // slot_images.src = "assets/inventory/mouseoffsquare.png";
    // // ctx_ui_status.drawImage(slot_images, this.inventory.posx, this.inventory.posy, 100, 100);
    // //Item
    // const slot_images_ITEM = new Image();
    // slot_images_ITEM.src = heart_powerup[0];
    // ctx_ui_status.drawImage(slot_images_ITEM, this.inventory.posx, this.inventory.posy, 100, 100);
    // //Item Count
    // ctx_ui_status.fillStyle = "white";
    // ctx_ui_status.font = "40px Roboto Mono";
    // ctx_ui_status.fillText("100", this.inventory.posx,this.inventory.posy + 100)
 
    // //usage_show
    // ctx_ui_status.fillStyle = "white";
    // ctx_ui_status.font = "40px Anton";
    // ctx_ui_status.strokeStyle = "black";
    // ctx_ui_status.fillText("F1", this.inventory.posx,this.inventory.posy + 40)
    // ctx_ui_status.strokeText("F1", this.inventory.posx,this.inventory.posy + 40)


    // const slot2_images = new Image();
    // slot2_images.src = "assets/inventory/mouseonsquare.png";
    // ctx_ui_status.drawImage(slot2_images, this.inventory.posx + 100, this.inventory.posy, 100, 100);
    
    // const slot3_images = new Image();
    // slot3_images.src = "assets/inventory/mouseoffsquare.png";
    // ctx_ui_status.drawImage(slot3_images, this.inventory.posx + 200, this.inventory.posy, 100, 100);
    
    // const slot4_images = new Image();
    // slot4_images.src = "assets/inventory/mouseoffsquare.png";
    // ctx_ui_status.drawImage(slot4_images, this.inventory.posx + 300, this.inventory.posy, 100, 100);
    
    // const slot5_images = new Image();
    // slot5_images.src = "assets/inventory/mouseoffsquare.png";
    // ctx_ui_status.drawImage(slot5_images, this.inventory.posx + 400, this.inventory.posy, 100, 100);
    
    // const slot6_images = new Image();
    // slot6_images.src = "assets/inventory/mouseoffsquare.png" ;
    // ctx_ui_status.drawImage(slot6_images, this.inventory.posx + 500, this.inventory.posy, 100, 100);
  
//bottom inventory
// const slot7_images = new Image();
// slot7_images.src = "assets/inventory/mouseoffsquare.png";
// ctx_ui_status.drawImage(slot7_images, this.inventory.posx, this.inventory.posy + 100, 100, 100);


// const slot8_images = new Image();
// slot8_images.src = "assets/inventory/mouseonsquare.png";
// ctx_ui_status.drawImage(slot8_images, this.inventory.posx + 100, this.inventory.posy + 100, 100, 100);

// const slot9_images = new Image();
// slot9_images.src = "assets/inventory/mouseoffsquare.png";
// ctx_ui_status.drawImage(slot9_images, this.inventory.posx + 200, this.inventory.posy + 100, 100, 100);

// const slot10_images = new Image();
// slot10_images.src = "assets/inventory/mouseoffsquare.png";
// ctx_ui_status.drawImage(slot10_images, this.inventory.posx + 300, this.inventory.posy + 100, 100, 100);

// const slot11_images = new Image();
// slot11_images.src = "assets/inventory/mouseoffsquare.png";
// ctx_ui_status.drawImage(slot11_images, this.inventory.posx + 400, this.inventory.posy + 100, 100, 100);

// const slot12_images = new Image();
// slot12_images.src = "assets/inventory/mouseoffsquare.png" ;
// ctx_ui_status.drawImage(slot12_images, this.inventory.posx + 500, this.inventory.posy + 100, 100, 100);
//     for(var counting_inventory = 0 ; counting_inventory < this.player_inventory.length; counting_inventory++){
    

//     }



}



powerBombBar(){

    
    
ctx_ui_status.fillStyle = "black";
ctx_ui_status.fillRect(c.width - 1105, 5, 60, 190);
   
//bombenergy bar
ctx_ui_status.fillStyle = "#00e7f2";
ctx_ui_status.fillRect(c.width - 1100, 10, 50, 180);

    //background Bar

ctx_ui_status.fillStyle = "black";
ctx_ui_status.fillRect(c.width - 1105, 5, 60, 200 - Math.round((this.body.powerBombEnergy / this.body.total_set_powerbombenergy) * 190 ));
   
ctx_ui_status.fillStyle = "red";
ctx_ui_status.fillRect(c.width - 1100, 10, 50, 180 - Math.round((this.body.powerBombEnergy / this.body.total_set_powerbombenergy) * 180 ));
ctx_ui_status.fillStyle = "white";
ctx_ui_status.font = "30px Roboto Mono"
ctx_ui_status.strokeStyle = "black"
ctx_ui_status.fillText(this.body.powerBombEnergy + "/" + this.body.total_set_powerbombenergy, c.width - 1150, 190)
ctx_ui_status.strokeText(this.body.powerBombEnergy + "/" + this.body.total_set_powerbombenergy, c.width - 1150, 190)


}


playerInventoryProccess(){// need to setup an algorithm to make it work.
    for(var counting_inventories = 0; counting_inventories < this.inventorySlots.length; counting_inventories++){
        mousePad.updateMouse();
    this.inventorySlots[counting_inventories].updateInventory();
    this.inventorySlots[counting_inventories].collisionWithMousePad(collisionTouch(mousePad, this.inventorySlots[counting_inventories]))
    }

if(this.inventory.length > 0){
for(var counting_inventory_ = 0; counting_inventory_ < this.inventory.length; counting_inventory_++ ){
    if(this.inventorySlots[0].emptySlot()){
       //setup inventory
    }
}


}


}


setPlatyerStart(set){ this.StartingPlayer.player_start_status = set;};
getPlayerStart(){return this.StartingPlayer.player_start_status;};

playerStart(){
    //pushing player foawrd
    if(this.getPlayerStart() == false){
        //getting player into place
        this.position.y -= this.velocity.y;
        console.log("updating position");   
    }
    if(this.position.y == ((c.height / 2) + ((c.height / 2) / 2))){
        console.log("destination reached");
       this.StartingPlayer.player_start_status = true; 
    }
    console.log(this.position.x);
    }

update(animation_Sparks_low, animation_Sparks_high, thruster_animation, player_death_explosionAnimation){
      
this.powerBombBar();
this.playerInventory();
this.alerting();
this.shotting();


if(this.StartingPlayer.player_blinking_start){
    this.StartingPlayer.playerStart_blinking ++
    if(this.StartingPlayer.playerStart_blinking > 5){
        if(this.StartingPlayer.playerStart_blinking > 7){
        this.StartingPlayer.playerStart_blinking = 0;
        }
        
        this.StartingPlayer.timer_to_start ++
        if(this.StartingPlayer.timer_to_start == 90){
            this.StartingPlayer.player_start_status = true;
            this.StartingPlayer.player_no_damage = false;
            this.StartingPlayer.player_blinking_start = false;
          
        }
        this.draw();
        thruster_animation.setPlayersThruster(this.body.thruster, this.position.x - this.thruster_position_x, this.position.y + this.thruster_position_y, this.thruster_size, this.thruster_size);       
    }
    }else{
        this.draw();
        thruster_animation.setPlayersThruster(this.body.thruster, this.position.x - this.thruster_position_x, this.position.y + this.thruster_position_y, this.thruster_size, this.thruster_size);       

    }
this.playerOnDeath();

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
this.playerInventoryProccess();
this.playerShield();
 this.playerStart();

for(var f = 0; f < powerUp.length; f++){  
    powerUp[f].updatePowerUpsFunctionality(this);
  }
      if(this.shields_class.length > 0){
if(this.shields_class[0].getDeleteObject()){
    this.shields_class.splice(0, 1)
}
this.setPlayerShieldStatus(true);
      }else{
        this.setPlayerShieldStatus(false);
      }
    }
   

///Inventory processing


    }

    