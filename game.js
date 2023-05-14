var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

var gameFrame = 0;

c.width = 3000
c.height = 2000
const gravity = 10;
const fps = 1000;
const backg = new Background();
const shield = new Shields();
const death = new Death();
//game
const playerDeathAnimation = new Animation();
const thruster = new Thruster();

const sprite = [ // this is only use for sprite testing

    new Animation(),
    new Animation(),
    new Animation(),
    new Animation(),
    new Animation(),
    new Animation(),
    new Animation(),
    new Animation(),
    new Animation(),
    new Animation(),
    new Animation()

];

//players
const players = [
    //CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
new Player("Player One", 1230,  6, 200, 400, 50, 2, 200, 900, 60),
new Player("Player One", 1230,  6, 200, 400, 50, 1, 400, 900, 60),


]
//Monsters
const sparks = new Animation();

const monsters = [
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2), new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2), new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
 new Monsters(2, asteroid_one,  200, 100 , 1, "Asteroid Lvl 1", 10, "orange", "straightDown", 200, 200, 2),
]

// ALL MONSTERS ANIMATION
const monsterDeadAnimation = [];
const monsterAnimationDamage = [];
const hitDamageAnimation = [];
const hitExplosionAnimation = [];
const hitExplosionAnimation2 = [];
const spriteanimAtionMonsters = [];

//Monsters Animation for loop to monsters length
for(var m = 0; m < monsters.length; m++){
monsterDeadAnimation.push(new Animation());
monsterAnimationDamage.push(new Animation());
hitDamageAnimation.push(new Animation());
hitExplosionAnimation.push(new Animation());
hitExplosionAnimation2.push(new Animation());
spriteanimAtionMonsters.push(new Animation());
}



// ALL PLAYERS ANIMATIONS
const playerDeadAnimation = [];
const animation_playerspark_1_lowhealth = [];

// Player Gun shots && explosion
const guns = [];


// player animation loop to player length
for(var player_loop = 0; player_loop < players.length; player_loop++){
guns.push(new shots());
playerDeadAnimation.push(new Animation());
animation_playerspark_1_lowhealth.push(new Animation());
}

//BUFFERRRR
function buffer(){
    setTimeout(() => {
        requestAnimationFrame(buffer)
        gameFrame ++;
      }, 1000 / fps);
    //GAME
    ctx.clearRect(0,0,c.width, c.height)
    backg.update_backg(); // background image
  
    //proccessing monsters
for(var m = 0; m < monsters.length; m++){
    monsters[m].updateMonster();
    monsterDeathExplosion(monsterDeadAnimation[m], monsters[m].monsterDeath(), monsters[m].body.m_deadPosX, monsters[m].body.m_deadPosY += backg.velocity.y); 
    monsters[m].monsterlifeBar();
    monsters[m].drawMonster(spriteanimAtionMonsters[m]);
}

//Monsters for loops for collision
for(var m = 0; m < monsters.length; m++){       
    for(var player_loop = 0; player_loop < players.length; player_loop++){ 
        bulletHitMonsterEffect(hitExplosionAnimation[player_loop], hitExplosionAnimation2[player_loop],guns[player_loop].getCollitionPosX(), guns[player_loop].getCollitionPosY() ,guns[player_loop].getCollitionWithMonster(), guns[player_loop].damage_effect, monsters.length+5)
        hitDamageAnimation[player_loop].damageShowAnimation(guns[player_loop].getDamageHit(), guns[player_loop].getCollitionPosX(), guns[player_loop].getCollitionPosY(), "red",guns[player_loop].getCollitionWithMonster());
        players[player_loop].playerCollitionMonsters(monsters[m]);
    }   
    collisionMonsterShot(monsters[m], guns[0]);
    // bad 
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









// SETTING UP SPRITES
// sprite[0].spritePro(asteroid_one, 1, 200, 0, 200, 200);
// sprite[1].spritePro(asteroid_two, 1, 400, 0, 200, 200);
// sprite[2].spritePro(asteroid_three, 1, 800, 0, 200, 200);
// sprite[3].spritePro(asteroid_four,1, 600, 0, 200, 200);
// sprite[4].spritePro(asteroid_five, 1, 1000, 0, 200, 200);
// sprite[5].spritePro(asteroid_six, 1, 1200, 0, 200, 200);
// sprite[6].spritePro(asteroid_seven, 1, 1400, 0, 200, 200);
// sprite[7].spritePro(asteroid_eight, 1, 1600, 0, 200, 200);
// sprite[8].spritePro(asteroid_nine, 1, 1800, 0, 200, 200);
// sprite[9].spritePro(asteroid_ten, 1, 0, 200, 200, 200);
// spritesProccessing(asteroid_one, 1, 500, 500, 800, 800);





} 

buffer();


