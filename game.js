var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 1000
c.height = 900
const gravity = 20




const backg = new Background();
const shield = new Shields();
const death = new Death();
//game
const collision = new Collision();
const player = new Player(7);

//Monsters
const monsters = 
[
new Monsters(1, 0, 0 , 20, "invaderone", 10, "red"),
new Monsters( 2, -100, -100, 10, "invaderTwo", 10, "green"),
new Monsters( 2, -200, -200, 10, "invaderThree", 10, "blue"),
new Monsters( 2, -300, -300, 10, "invaderfour", 10, "orange")
];



const animation = new Animation();
const thruster = new Thruster();
const shot = new shots();

function buffer(){
    requestAnimationFrame(buffer)
    //GAME
    ctx.clearRect(0,0,c.width, c.height)
 
    backg.update_backg(); // background image
    shot.updateShot(); // shotting
    
    
    //adding objects
    player.update();




//collison monsters and shots
for(let i = 0 ; i < monsters.length; i ++){
monsters[i].updateMonster();
if(collision.collisionTouch(shot, monsters[i])){
monsters[i].setMonsterHealth(1); // set up the hit depend on the shot
console.log(monsters[i].body.m_name + " ramina life =  " + monsters[i].getMonsterHealth());
}  

shot.counter += 1;
if(shot.counter > 5 && shot.clearRect){
console.log("reset");
shot.clearRect = false;
}

if(collision.collisionTouch(shot, monsters[i])){
shot.clearRect = true;
//console.log("Bullet banished..");
shot.position.x = -50;
shot.position.y = - 50;
}  
}




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

buffer();


