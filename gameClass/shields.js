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
this.width = 960;
this.height = 576;
}
// shield animation
drawShield(){
    const shieldImage = new Image();
shieldImage.src = "assets/shields/bluebean.png";
ctx.globalAlpha = 0.2;
var sprite_right = 4;
var sprite_bottom = 2;


ctx.drawImage(shieldImage, 1 * (192 * 0), 1 * (192 * 0), this.width, this.height, player.position.x - 45 - (192 * 3), player.position.y - 40 - (192 * 0), this.width, this.height );
ctx.globalAlpha = 1;
}
updateshield(){
    this.drawShield();
}


};