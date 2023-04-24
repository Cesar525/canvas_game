function spritePageFunction(sprite_path, posx, posy, sprite_page_width, sprite_page_height, sprite_count_width, sprite_count_height, sprite_size_w, sprite_size_h, speed, show){
    var shows = true;
    var frameX = 0;
    var frameY = 0;
    var gameFrame = 0;
    var staggerFrame = 1;
    var show = true;
    var show2 = true;
  console.log(shows);
    if(shows){
        const animation = new Image();
        if(speed){
    staggerFrame = 20;
        }
    animation.src = sprite_path;
    ctx.globalAlpha = 1;
    
    let m_width = sprite_page_width / sprite_count_width;
    let m_height = sprite_page_height/ sprite_count_height;
    let positionX = Math.floor(gameFrame/staggerFrame) % sprite_count_width;
    let positionY = Math.floor(gameFrame/(staggerFrame * sprite_count_width)) % sprite_count_height;

    
    ctx.drawImage(animation, 1 * (sprite_size_w * frameX), 1 * (sprite_size_h * frameY), m_width, m_height, posx, posy, m_width + 20, m_height + 20 );
    ctx.globalAlpha = 1;
    frameX = positionX;
    frameY = positionY;
    
    //console.log(this.frameY);
    //console.log(this.frameX);
    
    //console.log( "Showing" + this.frameX);
    
    gameFrame++;
    if(frameX >= sprite_count_width - 1 && frameY >= sprite_count_height - 1){
       shows = false;
    }else{
       shows = true;
    }
    }
    
    //console.log("animation respond " + shows);
    }