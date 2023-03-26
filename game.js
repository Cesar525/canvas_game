var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 2000
c.height = 2000
const gravity = 20


class shots {
    constructor(){
    this.position = {
        x : 1000,
        y : 1000
    }
    this.velocity = {
        x : 30,
        y : 30
    }
    this.damage = 20;
    this.shot_width = 100;
    this.shot_height = 100;
    }
    drawShot(){
        ctx.fillStyle = "red";
        this.position.y -= this.velocity.y;
        ctx.fillRect(this.position.x, this.position.y ,this.shot_width, this.shot_height);
    }
    updateShot(){
    this.drawShot()
    }
    
    }
class Player{
constructor(){
this.position ={
    x:100,
    y:100
}
this.velocity ={
    x:50,
    y:50  
}
this.width = 300
this.height = 300
}
draw(){
    //ctx.fillStyle = "red";
    //ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    const image = new Image();
    image.src = "assets/spaceshipone.png";
    ctx.drawImage(image, this.position.x, this.position.y , player.width, player.height);

}

update(){
this.draw()
//  this.position.y += this.velocity.y
//  if(this.position.y + this.height + this.velocity.y <= c.height){
//     this.velocity.y += gravity
//  }else{
//     this.velocity.y = 0;
//  }

}
}
const player = new Player;
const shot = new shots();

const keys = {
right : {
    pressed:false
},
left : {
    pressed:false
},
up : {
    pressed:false
},
down : {
    pressed:false
},
jumping : {
    pressed: false
}

}

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,c.width, c.height)
    player.update();
   
    
    if(keys.right.pressed){
        player.position.x += player.velocity.x
        
    }
    if(keys.left.pressed){
        player.position.x -= player.velocity.x
    }
    if(keys.up.pressed){
        player.position.y -= player.velocity.y
        
    }
    if(keys.down.pressed){
        player.position.y += player.velocity.y
    }
    if(keys.jumping.pressed){
        shot.updateShot();
     }
    console.log("position y =" + player.position.y)
console.log("position x =" + player.position.x)

// player ned to stay insidew the canvas
if(player.position.x + player.velocity.x > c.width - player.width + player.velocity.x){
   
    player.position.x = c.width - player.width
}
if(player.position.x < 0){
    player.position.x = 0
    
}
if(player.position.y + player.velocity.y > c.height - player.height){
    player.position.y =  c.height - player.height
   
}
if(player.position.y < 0){
    player.position.y =  0
   
}

// if(player.position.y != c.height - 100){
//     player.position.y += gravity

}
animate()

addEventListener("keydown", function ({keyCode}){
   console.log(keyCode);
    switch(keyCode){
        case 38 : console.log("arrow up")
        keys.up.pressed = true;
        break;
        case 40 : console.log ("arrow down")
        keys.down.pressed = true;
        break;
        case 37 : console.log("arrow left")
        keys.left.pressed = true
        break;
        case 39 : console.log("arrow right")
        keys.right.pressed = true
        break;
        case 32 : console.log("jumping space button")
        keys.jumping.pressed = true
        break;
        
    }
    
});

addEventListener("keyup", function ({keyCode}){
    console.log(keyCode);
     switch(keyCode){
         case 38 : console.log("arrow up");
         keys.up.pressed = false;
         break;
         case 40 : console.log ("arrow down");
         keys.down.pressed = false;
         break;
         case 37 : console.log("left arrow");
         keys.left.pressed = false;
         break;
         case 39 : console.log("right arrow");
         keys.right.pressed = false;
         break;
     }
     
 });
 console.log(keyCode)