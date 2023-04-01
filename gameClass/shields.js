class Shields {
constructor(){
this.position = {
x : 1,
y : 1
},
this.velocity = {
    x : 0,
    y : 0
}
this.width = 960 / 5;
this.height = 576 / 3;
this.frameX = 0;
this.frameY = 2;
this.gameFrame = 0;
this.staggerFrame = 3;

}
// shield animation
frame(){

}

drawShield(){
    const shieldImage = new Image();
shieldImage.src = "assets/shields/bluebean.png";

ctx.globalAlpha = 0.5;



//console.log("bottom" + this.sprite_bottom);
//console.log( "right" + this.sprite_right);

let positionX = Math.floor(this.gameFrame/this.staggerFrame) % 5;
let positionY = Math.floor(this.gameFrame/(this.staggerFrame * 5)) % 4;

this.position.x = player.position.x - 55;
this.position.y = player.position.y - 55;

ctx.drawImage(shieldImage, 1 * (192 * this.frameX), 1 * (192 * this.frameY), this.width, this.height, this.position.x, this.position.y, this.width + 20, this.height + 20 );
ctx.globalAlpha = 1;
this.frameX = positionX;
this.frameY = positionY;

//console.log( "Showing" + this.frameX);

this.gameFrame++;
}
drawShield2(){
    const shieldImage = new Image();

shieldImage.src = "assets/shields/mino.png";
ctx.globalAlpha = 0.5;



//console.log("bottom" + this.sprite_bottom);
//console.log( "right" + this.sprite_right);

let positionX = Math.floor(this.gameFrame/this.staggerFrame) % 5;
let positionY = Math.floor(this.gameFrame/(this.staggerFrame * 5)) % 4;

this.position.x = player.position.x - 55;
this.position.y = player.position.y - 55;

ctx.drawImage(shieldImage, 1 * (192 * this.frameX), 1 * (192 * this.frameY), this.width, this.height, this.position.x, this.position.y, this.width + 20, this.height + 20 );
ctx.globalAlpha = 1;
this.frameX = positionX;
this.frameY = positionY;

//console.log( "Showing" + this.frameX);

this.gameFrame++;
}
updateshield(){
    
    //this.drawShield();
    this.drawShield2();
}


};