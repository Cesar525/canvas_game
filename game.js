var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

var gameFrame = 0;

c.width = 3000
c.height = 2000
const gravity = 10;
const fps = 60;
const backg = new Background();
const shield = new Shields();
const death = new Death();
//game
const playerDeathAnimation = new Animation();
const thruster = new Thruster();

// const sprite = [ // this is only use for sprite testing

//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation()

// ];

//players
const players = [
    //CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
new Player("Player One", 1230,  6, 200, 400, 1, 2, 500, 900, 10),

]
//Monsters
const sparks = new Animation();

const monsters = [
 new Monsters(2, asteroid_one,  500, 100 , 10000, "Asteroid Lvl 1", 10, "orange", "none", 200, 200, 2),
 new Monsters(2, asteroid_one,  1000, 100 , 10000, "Asteroid Lvl 1", 10, "orange", "none", 200, 200, 2),

]



const missiles = [];

for(var m = 0; m < monsters.length; m++){
  missiles.push(new shots());
}
// ALL PLAYERS ANIMATIONS
const playerDeadAnimation = [];
const animation_playerspark_1_lowhealth = [];
// Player Gun shots && explosion


// player animation loop to player length
for(var player_loop = 0; player_loop < players.length; player_loop++){
playerDeadAnimation.push(new Animation());
animation_playerspark_1_lowhealth.push(new Animation());


}


//BUFFERRRR
function buffer(){
    setTimeout(() => {
        requestAnimationFrame(buffer)
       
      }, 1000 / fps);
    //GAME 
    gameFrame ++;
    ctx.clearRect(0,0,c.width, c.height)
    backg.update_backg(); // background image





    monsters[0].updateMonster();
    var player_loop = 0
        players[player_loop].playerCollitionMonsters(monsters[0]);
      players[player_loop].playerGun(missiles[0])
      missiles[player_loop].updateShot(0);
  

//############################################################

//players for lopp
for(var player_loop = 0; player_loop < players.length; player_loop++){
        players[player_loop].playerDeathExplosion(playerDeadAnimation[player_loop], players[player_loop].playerOnDeath(),players[player_loop].body.deathPositionX, players[player_loop].body.deathPositionY += backg.velocity.y);
        players[player_loop].update();
        

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


