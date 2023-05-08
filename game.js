var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 2000
c.height = 1500
const gravity = 10;

const backg = new Background();
const shield = new Shields();
const death = new Death();
//game
const playerDeathAnimation = new Animation();
const thruster = new Thruster();

//players
const players = [
    //CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
new Player("Player One", 1230,  6, 100, 500, 10, 1, 100, 900, 100),
new Player("Player Two", 1230,  6, 100, 500, 10, 1, 500, 900, 100), 
// new Player("Player Two", 1230,  6, 100, 500, 1000, 1, 900, 900, 100),
// new Player("Player Two", 1230,  6, 100, 500, 1000, 1, 1000, 900, 100),
// new Player("Player Two", 1230,  6, 100, 500, 1000, 1, 1100, 900, 300)
]
//Monsters
const sparks = new Animation();

const monsters = [

 new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
 new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
 new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
//  new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
//  new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
//  new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
//  new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
//  new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
//  new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
//  new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
//  new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
//  new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),
//  new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),


//  new Monsters(2, 100, 100 , 100, "invaderOne", 10, "orange", "straightDown", 100 , 100, 2),




  new Monsters( 4, 400,0, 10000, "BOSS", 10, "red", "none", 400 , 400, 2),
// new Monsters( 3, 400, 100, 1000, "MONSTER 3", 10, "blue", "none", 100 , 100),
// new Monsters( 4, 800, 100, 100, "MOSTER 4", 10, "red", "none", 100 , 100),
// new Monsters( 4, 800, 100, 1000, "BOSS", 10, "red", "none", 500 ,500)
];

// ALL MONSTERS ANIMATION
const monsterDeadAnimation = [];
const monsterAnimationDamage = [];

//Monsters Animation for loop to monsters length
for(var m = 0; m < monsters.length; m++){
    monsterDeadAnimation.push(new Animation());
monsterAnimationDamage.push(new Animation());

}



// ALL PLAYERS ANIMATIONS
const playerDeadAnimation = [];
const animation_playerspark_1_lowhealth = [];

// Player Gun shots && explosion
const guns = [];
const hitExplosionAnimation = [];
const hitExplosionAnimation2 = [];
const hitDamageAnimation = [];
// player animation loop to player length

for(var player_loop = 0; player_loop < players.length; player_loop++){

guns.push(new shots());
playerDeadAnimation.push(new Animation());
animation_playerspark_1_lowhealth.push(new Animation());
hitExplosionAnimation.push(new Animation());
hitExplosionAnimation2.push(new Animation());
hitDamageAnimation.push(new Animation());
}

//BUFFERRRR
function buffer(){
    requestAnimationFrame(buffer)
    //GAME
    ctx.clearRect(0,0,c.width, c.height)
    backg.update_backg(); // background image
  
for(var m = 0; m < monsters.length; m++){
    monsters[m].updateMonster();
    monsterDeathExplosion(monsterDeadAnimation[m], monsters[m].monsterDeath(), monsters[m].body.m_deadPosX, monsters[m].body.m_deadPosY += backg.velocity.y); 
    monsters[m].monsterlifeBar();
}


for(var player_loop = 0; player_loop < players.length; player_loop++){ 
    guns[player_loop].bulletHitMonsterEffect(hitExplosionAnimation[player_loop], hitExplosionAnimation2[player_loop] , 6, 1)
    hitDamageAnimation[player_loop].damageShowAnimation(guns[player_loop].getDamageHit(), guns[player_loop].getCollitionPosX(), guns[player_loop].getCollitionPosY(), "red",guns[player_loop].getCollitionWithMonster());
}

//Monsters for loops for collision
for(var m = 0; m < monsters.length; m++){       
    for(var player_loop = 0; player_loop < players.length; player_loop++){ 
            console.log("times")
            players[player_loop].playerCollitionMonsters(monsters[m]);
            collisionMonsterShot(monsters[m], guns[player_loop]);
        }    
    }
    
    
    //############################################################
    
    //players for lopp
    for(var player_loop = 0; player_loop < players.length; player_loop++){
        players[player_loop].playerDeathExplosion(playerDeadAnimation[player_loop], players[player_loop].playerOnDeath(),players[player_loop].body.deathPositionX, players[player_loop].body.deathPositionY += backg.velocity.y);
        players[player_loop].update(player_loop);
        guns[player_loop].updateShot();
     
        


    //if players health 50 or under 50 sparks will come out.
    if(Math.round((players[player_loop].body.health / players[player_loop].health_total) * 100) <= 50){
    animation_playerspark_1_lowhealth[player_loop].playerSparks(players[player_loop].position.x, players[player_loop].position.y);
    }
    if(Math.round((players[player_loop].body.health / players[player_loop].health_total) * 100) <= 10){
        animation_playerspark_1_lowhealth[player_loop].playerSparksHigh(players[player_loop].position.x, players[player_loop].position.y);
      }


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


