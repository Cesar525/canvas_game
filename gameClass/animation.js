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
}
spritePage(sprite_path, posx, posy, sprite_page_width, sprite_page_height, sprite_count_width, sprite_count_height, sprite_size_w, sprite_size_h, speed){
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

//console.log( "Showing" + this.frameX);

this.gameFrame++;
}



}