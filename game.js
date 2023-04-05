var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 1000
c.height = 900
const gravity = 20



const shot = new shots();
const backg = new Background();
const collision = new Collision();
const shield = new Shields();
const death = new Death();
//game
const player = new Player();
const monster = new Monsters( 100, 100);
const monsterTwo = new Monsters(  300, 100);
const monsterThree = new Monsters( 500, 100);
const monsterFour = new Monsters(700, 100);

function buffer(){
requestAnimationFrame(buffer)
ctx.clearRect(0,0,c.width, c.height)
backg.update_backg();
//adding objects
player.update();
monster.updateMonster();
monsterTwo.updateMonster();
monsterThree.updateMonster();
monsterFour.updateMonster();

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

