class Shields {
constructor(shield_type){
this.position = {
x : 1,
y : 1
},
this.velocity = {
    x : 0,
    y : 0
}

this.m_shieldType = shield_type;
this.counting_sprite_width = 5;
this.counting_sprite_height = 3;
this.width = 960 / this.counting_sprite_width;
this.height = 576 / this.counting_sprite_height;
this.frameX = 0;
this.frameY = 2;
this.gameFrame = 0;
this.staggerFrame = 3;
this.size_height = 200;
this.size_width = 200;


this.showDamageAnimation = {
    gameFrameAnimationTime : 0,
    damage_recorded : 0
}
this.showdamage__ ;
this.timerSettings = {
    timerTicking : 0,
    seconds : 0,
    minutes : 0,
    hours : 0
    }
this.shield_time = 0;
this.deleteObject = false;
}

timer(){
   
    this.timerSettings.timerTicking ++;
    //adding seconds
    if(this.timerSettings.timerTicking == 100){
        this.timerSettings.seconds += 1;
        this.timerSettings.timerTicking = 0;
    }
    //adding minute
    if(this.timerSettings.seconds == 60){
        this.timerSettings.minutes += 1;
        this.timerSettings.seconds = 0;
    }
    //adding hours
    if(this.timerSettings.minutes == 60){
        this.timerSettings.hours += 1
        this.timerSettings.minutes = 0;
    }
    }



setShieldtime(set){this.shield_time = set;};
getshieldtime(){return this.shield_time;};
setShieldType(set){this.m_shieldType = set;};
getShieldType(){return this.m_shieldType;};
drawShield(player){
    
    //Shield Apearance
if(player.getPlayerShieldStatus() == false){
}else{

//geting player cordinates for shields    
const shieldImage = new Image();

if(this.getShieldType() == 1){
shieldImage.src = shield_spritesSheet.blue_shield.sprite;
this.setShieldtime(shield_spritesSheet.blue_shield.time)
}
if(this.getShieldType() == 2){
    shieldImage.src = shield_spritesSheet.red_shield.sprite;
    this.setShieldtime(shield_spritesSheet.red_shield.time)
}

ctx.globalAlpha = 0.5;

let positionX = Math.floor(this.gameFrame/this.staggerFrame) % 5;
let positionY = Math.floor(this.gameFrame/(this.staggerFrame * 5)) % this.counting_sprite_height;

this.position.x = player.position.x - 145;
this.position.y = player.position.y - 150;

ctx.drawImage(shieldImage, 1 * (192 * this.frameX), 1 * (192 * this.frameY), this.width, this.height, this.position.x, this.position.y, this.width + this.size_width, this.height + this.size_height );
ctx.globalAlpha = 1;
this.frameX = positionX;
this.frameY = positionY;

 this.timer(); 

this.gameFrame++;

//showing countdown
this.damageShowAnimation(this.timerSettings.seconds,player.position.x, player.position.y, "white", true);
}

if(this.getshieldtime() == this.timerSettings.seconds){
    this.doDeleteObjecT();
    console.log(this.getDeleteObject());
}  
}

damageShowAnimation(damage,pos_x, pos_y, color, if_true){
    
    if(if_true){this.setShowAnimation(true)} 
    this.showDamageAnimation.gameFrameAnimationTime++;
    if(this.showdamage__ == true){  
        ctx.fillStyle = color;
        ctx.strokeStyle = "black"
        ctx.font = "90px anton";
        ctx.fillText(this.getshieldtime() + " - " + damage + " ! ", pos_x + 100, pos_y + 300);
        ctx.strokeText(this.getshieldtime() + " - " + damage + " ! ", pos_x + 100, pos_y + 300);
    } 
}

doDeleteObjecT(){ this.deleteObject = true;};
getDeleteObject(){return this.deleteObject;};
setShowAnimation(set){this.showdamage__ = set;};
updateshield(player){}
};

//Shield Sprites
const shield_spritesSheet = {
 blue_shield : {
    sprite :   "assets/shields/blueshield.png",
    time : 5,
    icon : "assets/shields/icon/blueshield.png",
 },
 red_shield  : {
    sprite : "assets/shields/redshield.png",
    time : 5,
    icon : "assets/shields/icon/redshield.png",
 }
}