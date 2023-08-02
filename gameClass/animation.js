class Animation {
constructor(){
    this.position = {
        x : NaN,
        y : NaN
    };
  
    this.frameX = 0;
    this.frameY = 0;
    this.gameFrame = 0;
    this.staggerFrame = 1;
    this.show = false;
    this.onAnimation = false;
    this.counting;
    //thruster animation
    this.thruster_size =150;
    this.thruster_animation = 0;
this.onSpriteProccessor = false;
this.show_burst = false;
this.explosion_used = false;

}

spritePage(sprite_path, posx, posy, sprite_page_width, sprite_page_height, sprite_count_width, sprite_count_height, sprite_size_w, sprite_size_h, speed, show, sprite_size_set_width, sprite_size_set_height, set_transparency){
if(!sprite_size_set_width && !sprite_size_set_height && !set_transparency ){
sprite_size_set_width = 0;
sprite_size_set_height = 0;
set_transparency = 1;
}

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

this.position.x = posx;
this.position.y = posy;
ctx.globalAlpha = set_transparency;
ctx.drawImage(animation, 1 * (sprite_size_w * this.frameX), 1 * (sprite_size_h * this.frameY), m_width, m_height, this.position.x, this.position.y, (m_width + 20) + sprite_size_set_width, (m_height + 20) + sprite_size_set_height);
ctx.globalAlpha = 1;
this.frameX = positionX;
this.frameY = positionY;
this.gameFrame += 1;

if(this.frameX >= sprite_count_width - 1 && this.frameY >= sprite_count_height - 1){
    this.show = false;
    this.explosion_used = true;
    this.reset();
    this.onAnimation = false;
    return false;
}else{

    return true;
}
}


//console.log("animation respond show = " + this.show);
}
getFrameY(){
    return this.frameY;
}


reset(){
    this.frameX = 0;
    this.frameY = 0;
    this.gameFrame = 0;
    this.staggerFrame = 1;
}
resetPost(){
this.position.x = NaN;
this.position.y = NaN;
}

getExplosionUseStatus(){return this.explosion_used;}
monsterHit(animationOne, animationTwoo ,col, posx_, posy_, hiteffect, speed, shot){
    var animationTwo;
    
    animationOne.explosionEffect(hiteffect,  posx_ - 85, posy_ - 85, col, speed);
    if(animationOne.getAnimationStatus() && col){
     animationTwoo.reset();
    animationTwo = true;
     }
      animationTwoo.explosionEffect(hiteffect, posx_ - 85, posy_ - 85, animationTwo, speed);
      if(!(animationOne.getAnimationStatus() && animationTwoo.getAnimationStatus())){
        shot.clearCollisionShot();
      } 
}



monsterDeathExplosion(animationOne, animationTwoo ,col, posx_, posy_){
    var animationTwo;
    animationOne.explosionEffect(3,  posx_ - 85, posy_ - 85, col);
    if(animationOne.getAnimationStatus() && col){
     animationTwoo.reset();
    animationTwo = true;
     }
      animationTwoo.explosionEffect(3, posx_ - 85, posy_ - 85, animationTwo);
      
}


explosionEffect(effect, posx, posy, send, speed, size_w, size_h){
 
switch(effect){
case 1 :
this.spritePage("assets/explosions/explosion_1.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
break;
case 2 :
this.spritePage("assets/explosions/explosion_2.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
break;
case 3 : 
this.spritePage("assets/explosions/explosion_33.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send, size_w, size_h);
break;
case 4 : 
this.spritePage("assets/explosions/explosion_4.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
break;
case 5 : 
this.spritePage("assets/explosions/explosion_5.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
break;
case 6 : 
this.spritePage("assets/explosions/explosion_6.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send, size_w, size_h);
break;
case 7 : 
this.spritePage("assets/explosions/explosion_7.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send, size_w, size_h);
break;
case 8 : 
this.sparkForBullets(speed, posx + 50, posy, 200, 200, send);
break;
case 9 : 
this.spritePage("assets/explosions/lavaexplosion.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
break;
case 10 : 
this.spritePage("assets/explosions/lavaexplosion2.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
break;
case 11 : 
this.spritePage("assets/explosions/lavaexplosion3.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
break;
case 12 : 
this.spritePage("assets/explosions/explosion_yellow.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
break;
case 13 : 
this.spritePage("assets/explosions/explosion_green.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
break;
case 14 : 
this.spritePage("assets/explosions/radiation_explosion.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
break;
case 15 : 
this.spritePage("assets/explosionparticles/explosion3.png", posx , posy, 1000, 800, 10, 8, 100, 100, speed, send, 400, 400)
break;


}
}

burstEffect(effect, posx, posy, send, speed){
    switch(effect){
    case 1 : 
    this.burstForBullets(speed, posx, posy, 200,200, send);
    break;
    }
}



getAnimationStatus(){
    return this.onAnimation;
}

shieldsEffect(effect, posx, posy){
switch(effect){
case 1 :
this.spritePage("assets/shield/shield_one.png", posx , posy, 2048, 1280, 8, 5, 256, 256, 4, send);
break;

}
}


burstForBullets(speed, posx, posy, width, height, send){
if(send){
    var turn_on_effect = send;
if(turn_on_effect == true){
    this.show_burst = true;
}
}
     if(this.show_burst){
 
    const burst_bullets = new Image();

    const burst_sprites = [
    "assets/machinegun/burstbullet/MachineOne90000.png",
    "assets/machinegun/burstbullet/MachineOne90001.png",
    "assets/machinegun/burstbullet/MachineOne90002.png",
    "assets/machinegun/burstbullet/MachineOne90003.png",
    "assets/machinegun/burstbullet/MachineOne90004.png",
    "assets/machinegun/burstbullet/MachineOne90004.png",
    "assets/machinegun/burstbullet/MachineOne90005.png",
    "assets/machinegun/burstbullet/MachineOne90006.png",
    "assets/machinegun/burstbullet/MachineOne90007.png",
]
         this.gameFrame ++;
         this.staggerFrame = speed;

         burst_bullets.src = burst_sprites[Math.floor(this.gameFrame/this.staggerFrame) % burst_sprites.length];
         ctx.drawImage(burst_bullets, posx, posy, width, height);
 
         if((Math.floor(this.gameFrame/this.staggerFrame) % 12) == burst_sprites.length - 1){
             this.show_burst = false;
             //console.log("show == false")
         }
     
     }
}

getShowBurst(){return this.show_burst;};
sparkForBullets(speed, posx, posy, width, height, send){
   var turn_on = send;

if(turn_on == true){
    this.show = true;
}

    if(this.show){

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
        this.gameFrame ++;
        this.staggerFrame = speed;
        sparks.src = spark1[Math.floor(this.gameFrame/this.staggerFrame) % 12];
        ctx.drawImage(sparks, posx,posy, width, height);

        if((Math.floor(this.gameFrame/this.staggerFrame) % 12) == spark1.length - 1){
            this.show = false;
        }
    
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
    this.gameFrame ++;
    this.staggerFrame = speed;
  
    sparks.src = spark1[Math.floor(this.gameFrame/this.staggerFrame) % 12];
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
        this.gameFrame ++;
        this.staggerFrame = speed;
      
        sparksTwo.src = spark2[Math.floor(this.gameFrame/this.staggerFrame) % 20];
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
getSpriteProccessorStatus(){return this.onSpriteProccessor;};
setSpriteProccessorStatus(set){this.onSpriteProccessor = set;};

spriteProccessor(sprite, speed, posx, posy, width, height){

    const sparksTwo = new Image();
    
        this.gameFrame ++;
        this.staggerFrame = speed;
        sparksTwo.src = sprite[Math.floor(this.gameFrame/this.staggerFrame) % sprite.length];
        ctx.drawImage(sparksTwo, posx,posy, width, height); 
if(sprite.length - 1 == Math.floor(this.gameFrame/this.staggerFrame) % sprite.length){
    return true;
}else{
    return false;
}
    }


setPlayersThruster(select_thruster, player_posx, player_posy, sizew, sizeh){
    const thruster = new Image();
    const thrusters = { //truster types
        1 : "assets/thrusters/thruster01.png",
        2 : "assets/thrusters/thruster02.png",
        3 : "assets/thrusters/thruster03.png",
        4 :  "assets/thrusters/thruster04.png",
        5 :  "assets/thrusters/thruster05.png",
        6 :  "assets/thrusters/thruster06.png",
        7 :  "assets/thrusters/thruster07.png",
        8 :  "assets/thrusters/thruster08.png",
        9 :  "assets/thrusters/thruster09.png",
        10 :  "assets/thrusters/thruster10.png",
        11 :  "assets/thrusters/thruster11.png",
        12 :  "assets/thrusters/thruster12.png",
        13 : "assets/thrusters/thruster13.png",
        14 : "assets/thrusters/thruster14.png",
        15 : "assets/thrusters/thruster15.png",
        16 :  "assets/thrusters/thruster16.png",
    };
    thruster.src = thrusters[select_thruster];
    ctx.drawImage(thruster , player_posx, player_posy , sizew, sizeh + this.thruster_animation);
if(this.thruster_animation <= 20){
    this.thruster_animation += 1
}if(this.thruster_animation == 20){
    this.thruster_animation = 13;
}
    } 
    
shieldStartingEffectSelection(shield_Animation_selection, on_off, posx, posy){
   switch(shield_Animation_selection){
case 1: this.spritePage("assets/shields/shield_arm_top.png", posx, posy, 960, 768, 5, 4, 192, 192, 3, on_off, 200, 200, 0.4);

break;
   };

}

shieldConstantEffectSelectiion(shield_Animation_selection, on_off, posx, posy){
    switch(shield_Animation_selection){
        case 1 : this.spritePage("assets/shields/shield_on.png", posx, posy, 960, 576, 5, 3, 192, 192, 3, on_off, 200, 200, 0.5);
 break;
    };
 
 }

updateAnimation(){   
}


}
//this.spritePage("assets/shields/shield_on.png", 500, 500, 960, 576, 5, 3, 192, 192, 3, true, 200, 200, 1)