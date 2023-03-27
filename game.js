var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 1000
c.height = 900
const gravity = 20


const player = new Player;
const shot = new shots();
const backg = new Background();
const monster = new Monsters();

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
    monster.updateMonster();

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
    if(true){
        shot.updateShot();
     }
    //console.log("position y =" + player.position.y)
    //console.log("position x =" + player.position.x)

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

}

animate()

addEventListener("keydown", function ({keyCode}){
   //console.log(keyCode);
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
  //  console.log(keyCode);
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
 