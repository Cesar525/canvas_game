var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 1000
c.height = 1000
const gravity = 10;




const backg = new Background();
const shield = new Shields();
const death = new Death();
//game
const playerDeathAnimation = new Animation();

// const player = new Player("Player One", 123,  8, 500);
const thruster = new Thruster();






//players
const players = [
    //CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
new Player("Player One", 1230,  6, 100, 500, 1, 3, 100, 500, 5),
]
//Monsters
const sparks = new Animation();

const monsters = [
new Monsters(1, 100, 100 , 10, "invaderOne", 10, "orange", "none", 700 , 100),
// new Monsters( 4, 300, 100, 1000, "BOSS", 10, "red", "none", 100 , 100),
// new Monsters( 3, 400, 100, 1000, "MONSTER 3", 10, "blue", "none", 100 , 100),
// new Monsters( 4, 800, 100, 100, "MOSTER 4", 10, "red", "none", 100 , 100),
// new Monsters( 4, 800, 100, 1000, "BOSS", 10, "red", "none", 500 ,500)
];

const monsterDeadAnimation = [];
const monsterDeadAnimation2 = [];
const playerDeadAnimation = [];
const playerDeadAnimation2 = [];
const animationExplosionHit = [];

const hitExplosionAnimation = [];
const hitExplosionAnimation2 = [];


//Monsters Animation for loop
for(var i = 0; i < monsters.length + 1; i++){
hitExplosionAnimation.push(new Animation());
hitExplosionAnimation2.push(new Animation());
monsterDeadAnimation.push(new Animation());
monsterDeadAnimation2.push(new Animation());
}

//SHOTTING
const guns = [
]
for(var player_loop = 0; player_loop < players.length; player_loop++){
guns.push(new shots());
playerDeadAnimation.push(new Animation());
playerDeadAnimation2.push(new Animation());
animationExplosionHit.push(new Animation());
}

//BUFFERRRR
function buffer(){
    requestAnimationFrame(buffer)
    //GAME
    ctx.clearRect(0,0,c.width, c.height)
 
    backg.update_backg(); // background image
     //adding objects
    // player.update();
    // shotting
    
     

    //Monsters for loops for collision and monster updates
    for(var i = 0; i < monsters.length; i++){
        monsters[i].updateMonster();
        monsterDeathExplosion(monsterDeadAnimation[i], monsterDeadAnimation2[i],monsters[i].monsterDeath(), monsters[i].deadposX, monsters[i].deadposY); 


        collisionMonster(monsters[0], players[0], guns[0]);
       // collisionMonster(monsters[0], players[1], guns[1]);
        for(var player_loop = 0; player_loop < players.length; player_loop++){
            
           
            monsterHit(hitExplosionAnimation[i], hitExplosionAnimation2[i], monsters[i].collision_bool, guns[player_loop].collision_posx, guns[player_loop].collision_posy , 6, players.length, guns[player_loop]);
            
            
            //    guns[player_loop].collision_posY += 2;
        }
        
    }
    
     
        //############################################################
//PLAYERS WORK
     //players for lopp
for(var player_loop = 0; player_loop < players.length; player_loop++){
    playerDeathExplosion(playerDeadAnimation[player_loop], playerDeadAnimation2[player_loop], players[player_loop].playerOnDeath(),players[player_loop].deathpositionX, players[player_loop].deathpositiony);
    players[player_loop].update(player_loop);
    guns[player_loop].updateShot();
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
if(players[player_loop].position.x + players[player_loop].velocity.x > c.width - players[player_loop].width + players[player_loop].velocity.x){

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

//sparks.updateAnimation();

} 

buffer();


