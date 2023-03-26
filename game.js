var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 1000
c.height = 900
const gravity = 20
class Background{
    constructor(){
    this.position = {
        x : 0,
        y : 0
    }  
    }
    drawBackground(){
        const background_image = new Image();
        background_image.src = "assets/background.png";
        this.position.y += 5;
        ctx.drawImage(background_image, this.position.x, this.position.y, c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - c.height, c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - c.height, c.width, c.height);

    }
        
        update_backg(){
            this.drawBackground()
        }

}


class Player{
constructor(){
this.position ={
    x:600,
    y:450
}
this.velocity ={
    x:20,
    y:20  
}
this.width = 100
this.height = 100
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
}
}

class shots {
    constructor(){
    this.position = {
        x : 600,
        y : 450
    }
    this.velocity = {
        x : 100,
        y : 100
    }
    this.damage = 20;
    this.shot_width = 30;
    this.shot_height = 30;
    }
    drawShot(){
     

        ctx.fillStyle = "red";
        this.position.y -= this.velocity.y;
        ctx.fillRect(this.position.x, this.position.y ,this.shot_width, this.shot_height);
        if(this.position.y <  - this.shot_height){
this.position.y = player.position.y;
this.position.x =  35 + player.position.x;
        }
    }
    updateShot(){
    this.drawShot();
    }
    }


const player = new Player;
const shot = new shots();
const backg = new Background();

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
shotting : {
    pressed: false
}

}

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,c.width, c.height)
    backg.update_backg();
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
    if(keys.shotting.pressed){
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
        case 83 : console.log("shotting space button")
        keys.shotting.pressed = true
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
         case 83 : console.log("shotting space button")
         keys.shotting.pressed = false
         break;
     }
     
 });
 console.log(keyCode)