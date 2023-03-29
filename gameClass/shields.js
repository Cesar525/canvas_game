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
this.sprite_right = 0;
this.sprite_bottom = 0;
}
// shield animation
drawShield(){
    const shieldImage = new Image();
shieldImage.src = "assets/shields/bluebean.png";
ctx.globalAlpha = 1;

this.sprite_right ++
if(this.sprite_right == 6){
    this.sprite_right = 0
   // this.sprite_bottom ++
}
// if(this.sprite_bottom == 3){
//     this.sprite_bottom = 0;
//     this.sprite_right = 0;
// }

console.log("bottom" + this.sprite_bottom);
console.log( "right" + this.sprite_right);

ctx.drawImage(shieldImage, 1 * (192 * 4), 1 * (192 * 2), this.width, this.height, player.position.x - 45 - (192 * this.sprite_right), player.position.y - 40 - (192 *  this.sprite_bottom), this.width, this.height );
ctx.globalAlpha = 1;
}
updateshield(){
    this.drawShield();
}


};