class Animation {
constructor(){
    this.position = {
        x : NaN,
        y : NaN
    }
  
    this.frameX = 0;
    this.frameY = 0;
    this.gameFrame = 0;
    this.staggerFrame = 1;
   this.show = false;
   this.onAnimation = false;
   this.animationTwo;
   this.animationThree;


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

sparks(){
const sparks = new Image();

const sparksOne = [
sparks.src = "assets/sparks/MetallicHit01/MetallicHit010000.png"
]
ctx.drawImage(sparksOne[0], 100,100, 100, 100);

}




updateAnimation(){   
//this.sparks();
}


}