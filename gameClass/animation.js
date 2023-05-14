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
    this.showDamage = false;
    this.animationSlowsGoesUp = 0;
    this.gameFrameDamageAnimation = 0;
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
ctx.globalAlpha = 1;
this.onAnimation = true;
let m_width = sprite_page_width / sprite_count_width;
let m_height = sprite_page_height/ sprite_count_height;
let positionX = Math.floor(this.gameFrame/this.staggerFrame) % sprite_count_width;
let positionY = Math.floor(this.gameFrame/(this.staggerFrame * sprite_count_width)) % sprite_count_height;

this.position.x = posx;
this.position.y = posy;

ctx.drawImage(animation, 1 * (sprite_size_w * this.frameX), 1 * (sprite_size_h * this.frameY), m_width, m_height, this.position.x, this.position.y, m_width + 20, m_height + 20 );
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
ctx.globalAlpha = 0.2;
this.spritePage("assets/explosions/explosion_6.png", posx , posy, 2048, 1280, 8, 5, 256, 256, speed, send);
ctx.globalAlpha = 1;
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

damageShowAnimation(damage,pos_x, pos_y, color, if_true){
this.gameFrameDamageAnimation++;
if(if_true){this.showDamage = true;}


        if(this.showDamage){
            ctx.fillStyle = color;
            ctx.strokeStyle = "black"
            ctx.font = "40px anton";
            ctx.fillText("-"+ damage, pos_x , pos_y);
            ctx.strokeText("-" + damage, pos_x, pos_y);       
        } 
        if(this.gameFrameDamageAnimation >= 400){
                 this.showDamage = false;
                 this.gameFrameDamageAnimation = 0;
                 this.animationSlowsGoesUp = 0
               }
        }

        spritePro(sprite, speed, posx, posy, width, height){
            const sparksTwo = new Image();
         
                this.gameFrame ++;
                this.staggerFrame = speed;
              
                sparksTwo.src = sprite[Math.floor(this.gameFrame/this.staggerFrame) % sprite.length];
                ctx.drawImage(sparksTwo, posx,posy, width, height);
            }

updateAnimation(){   

}


}