class Animation {
constructor(){
    this.position = {
        x : 0,
        y : 0
    }
  
    this.frameX = 0;
    this.frameY = 0;
    this.gameFrame = 0;
    this.staggerFrame = 1;
   this.show = true;
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

//console.log(this.frameY);
//console.log(this.frameX);

//console.log( "Showing" + this.frameX);

this.gameFrame++;
if(this.frameX >= sprite_count_width - 1 && this.frameY >= sprite_count_height - 1){
    this.show = false;
}else{
    this.show = true;
}
}
}

explosionEffect(effect, posx, posy, send){
switch(effect){
case 1 :
this.spritePage("assets/explosions/explosion_1.png", posx , posy, 2048, 1280, 8, 5, 256, 256, 1, send);
break;
case 2 :
this.spritePage("assets/explosions/explosion_2.png", posx , posy, 2048, 1280, 8, 5, 256, 256, 1, send);
break;
case 3 : 
this.spritePage("assets/explosions/explosion_3.png", posx , posy, 2048, 1280, 8, 5, 256, 256, 1, send);
break;
case 4 : 
this.spritePage("assets/explosions/explosion_4.png", posx , posy, 2048, 1280, 8, 5, 256, 256, 1, send);
break;
case 5 : 
this.spritePage("assets/explosions/explosion_5.png", posx , posy, 2048, 1280, 8, 5, 256, 256, 5, send);
break;
}
}


shieldsEffect(effect, posx, posy){
switch(effect){
case 1 :
this.spritePage("assets/shield/shield_one.png", posx , posy, 2048, 1280, 8, 5, 256, 256, 3, send);
break;
}
}

updateAnimation(){
    
    this.explosionEffect(1, 600, 500);

}
}