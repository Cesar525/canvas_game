var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 2000
c.height = 2000
const gravity = 20




const backg = new Background();
const shield = new Shields();
const death = new Death();
//game
const playerDeathAnimation = new Animation();
const collision = new Collision();
const player = new Player("Player One", 123,  8, 500);


const thruster = new Thruster();
const shot = new shots();
const monst = new Monsters();

//players
const players = [
    new Player("Player Two", 1230,  8, 500)
]
//Monsters

const monsters = [
new Monsters(1, 100, 100 , 100, "MONSTER 1", 10, "orange", "sidebyside"),
new Monsters( 2, 300, 100, 100, "MONSTER 3", 10, "green", "none"),
new Monsters( 3, 600, 100, 100, "MONSTER 3", 10, "blue", "none"),
new Monsters( 4, 800, 100, 100, "MOSTER 4", 10, "red", "none"),
new Monsters( 4, 300, 300, 1000, "BOSS", 10, "red", "none")
];

const animation = [];
const animation2 = [];
const monsterDeadAnimation = [];
const monsterDeadAnimation2 = [];

//Monsters Animation for loop
for(var i = 0; i < monsters.length + 1; i++){
animation.push(new Animation());
animation2.push(new Animation());
monsterDeadAnimation.push(new Animation());
monsterDeadAnimation2.push(new Animation());
}



//BUFFERRRR
function buffer(){
    requestAnimationFrame(buffer)
    //GAME
    ctx.clearRect(0,0,c.width, c.height)
 
    backg.update_backg(); // background image
     //adding objects
    player.update();
    // shotting
    shot.updateShot(); 

    //Monsters for loops
    for(var i = 0; i < monsters.length; i++){
    collisionMonster(monsters[i]);
   monsters[i].updateMonster();
   monsterHit(animation[i], animation2[i], monsters[i].collision_bool, monsters[i].collision_posX, monsters[i].collision_posY , 5);
   monsterDeathExplosion(monsterDeadAnimation[i], monsterDeadAnimation2[i],monsters[i].monsterDeath(), monsters[i].deadposX, monsters[i].deadposY);
    }


//############################################################
//PLAYERS WORK
     //players for lopp
for(var player_loop = 0; player_loop < players.length; player_loop++){
    players[player_loop].update();

    // player movements
if(keys.right.pressed){
    players[player_loop].position.x += players[player_loop].velocity.x
}
if(keys.left.pressed){
    players[player_loop].position.x -= players[player_loop].velocity.x
}
if(keys.up.pressed){
    players[player_loop].position.y -= players[player_loop].velocity.y
}
if(keys.down.pressed){
    players[player_loop].position.y += players[player_loop].velocity.y
}
if(true){
    
 }


// player need to stay inside the canvas
if(players[player_loop].position.x + players[player_loop].velocity.x > c.width - player.width + players[player_loop].velocity.x){

players[player_loop].position.x = c.width - players[player_loop].width
}
if(players[player_loop].position.x < 0){
players[player_loop].position.x = 0

}
if(players[player_loop].position.y + players[player_loop].velocity.y > c.height - players[player_loop].height){
players[player_loop].position.y =  c.height - players[player_loop].height

}
if(players[player_loop].position.y < 0){
players[player_loop].position.y =  0

}

}
} 

buffer();


