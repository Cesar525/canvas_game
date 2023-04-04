var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 1000
c.height = 1000
const gravity = 20


const player = new Player();
const shot = new shots();
const backg = new Background();
const collision = new Collision();
const shield = new Shields();
const death = new Death();
const cesar = new Monsters("cesar", 100, 100, 20 , "supershot", "sidebyside", "100", "100");
const manka = new Monsters("manka", 100, 100, 20 , "supershot", "sidebyside", "500", "500");

function buffer(){
    requestAnimationFrame(buffer)
    ctx.clearRect(0,0,c.width, c.height)
    backg.update_backg();
    player.update();
    cesar.updateMonster();
    manka.updateMonster();
    
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
// currently working on





}

buffer()

