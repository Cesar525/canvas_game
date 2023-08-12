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
}
// shield animation
frame(){

}

drawShield(player){
    const shieldImage = new Image();
shieldImage.src = "assets/shields/shieldupdated.png";

ctx.globalAlpha = 0.5;



//console.log("bottom" + this.sprite_bottom);
//console.log( "right" + this.sprite_right);

let positionX = Math.floor(this.gameFrame/this.staggerFrame) % 5;
let positionY = Math.floor(this.gameFrame/(this.staggerFrame * 5)) % this.counting_sprite_height;

this.position.x = player.position.x - 145;
this.position.y = player.position.y - 150;

ctx.drawImage(shieldImage, 1 * (192 * this.frameX), 1 * (192 * this.frameY), this.width, this.height, this.position.x, this.position.y, this.width + this.size_width, this.height + this.size_height );
ctx.globalAlpha = 1;
this.frameX = positionX;
this.frameY = positionY;

//console.log( "Showing" + this.frameX);

this.gameFrame++;
}





drawShield2(player){
    const shieldImage = new Image();
shieldImage.src = "assets/shields/shield_on.png";

ctx.globalAlpha = 0.5;



//console.log("bottom" + this.sprite_bottom);
//console.log( "right" + this.sprite_right);

let positionX = Math.floor(this.gameFrame/this.staggerFrame) % 5;
let positionY = Math.floor(this.gameFrame/(this.staggerFrame * 5)) % this.counting_sprite_height;

this.position.x = player.position.x - 145;
this.position.y = player.position.y - 150;

ctx.drawImage(shieldImage, 1 * (192 * this.frameX), 1 * (192 * this.frameY), this.width, this.height, this.position.x, this.position.y, this.width + this.size_width, this.height + this.size_height );
ctx.globalAlpha = 1;
this.frameX = positionX;
this.frameY = positionY;

//console.log( "Showing" + this.frameX);

this.gameFrame++;
}
updateshield(player){
    
    //this.drawShield();
    this.drawShield2(player);



}


};