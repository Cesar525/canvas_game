var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

var gameFrame = 0;

c.width = 1000
c.height = 1500
const gravity = 10;
const fps = 256;

//perfect Window size
// 2000 -> width
// 1500 -> height


const backg = new Background();
const nebula = [new Background(), new Background(), new Background()];
//testing
const animation_TESTING = new Animation();



//players
//CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
const players = [
  new Player("Player One", 1230,  6, 100, 400, 50, 1, 100, 900, 60),
   new Player("Player One", 1230,  6, 100, 400, 10, 2, 400, 900, 30),
   new Player("Player One", 1230,  6, 100, 400, 10, 1, 900, 900, 100),
   new Player("Player One", 1230,  6, 100, 400, 10, 2, 1500, 900, 100),
]
//Monsters
//CREATING A MONSTERS Monstrs( id, sprite,  pos_x, pos_y, health, name, speed, color, movements, s_width, s_height, damage)
const monsters = [
    new Monsters(2, asteroid_one,  100, 100 , 100, "Invaders LvL 1", 10, "orange", "none", 200, 200, 2),
 
    
    // new Monsters(2, asteroid_one,  200, 200 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),
    // new Monsters(2, asteroid_one,  300, 300 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),
    // new Monsters(2, asteroid_one,  400, 400 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),
    // new Monsters(2, asteroid_one,  500, 500 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),
    // new Monsters(2, asteroid_one,  600, 600 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),
    // new Monsters(2, asteroid_one,  700, 700 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),
    // new Monsters(2, asteroid_one,  800, 800 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),
    // new Monsters(2, asteroid_one,  100, 100 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),
    // new Monsters(2, asteroid_one,  100, 100 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),
    // new Monsters(2, asteroid_one,  100, 100 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),
    // new Monsters(2, asteroid_one,  100, 100 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),
    // new Monsters(2, asteroid_one,  100, 100 , 100, "Invaders LvL 1", 10, "orange", "sidebyside", 200, 200, 2),


  ];

  //POWER UPS


//Player Missiles & its effects
const projectiles = [];
const explosion_1 = [];
const explosion_2 = [];
for(var p = 0; p < players.length; p++){
projectiles.push(new shots());
explosion_1.push(new Animation());
explosion_2.push(new Animation());
}

//onPlayer Animation sparks
const sparks_low = [];
const sparks_high = [];
const thruster_animation = [];
const deathExplosionAnimation = [];
const player_shield_effect_one = [];
const player_shield_effect_two = [];
for(var p = 0; p < players.length; p++){
  sparks_low.push(new Animation());
  sparks_high.push(new Animation());
  thruster_animation.push(new Animation());
  deathExplosionAnimation.push(new Animation());
  player_shield_effect_one.push(new Animation());
  player_shield_effect_two.push(new Animation());
}

//onMonster animation
const sprite_animation = [];
const explosion_onDeath_animation = [];

for(var m = 0; m < monsters.length; m++){
sprite_animation.push(new Animation());
explosion_onDeath_animation.push(new Animation());
}


//Monster PowerUp Drop
const powerups = [];
const powerup_taken_effect = [];
for(var m = 0; m < monsters.length; m++){
powerups.push(new PowerUps());
powerup_taken_effect.push(new Animation());
}


//BUFFERRRR
function buffer(){
    setTimeout(() => {
        requestAnimationFrame(buffer)
       
      }, 1000 / fps);
    //GAME 
    gameFrame ++;
    ctx.clearRect(0,0,c.width, c.height)
    nebula[0].drawNebulas(10);
    nebula[1].drawNebulasBlue(2);
    backg.drawBackground(5); // background image
   nebula[2].drawNebulaMulti(2)

//colliton Monsters wiht Players && Projectiles
for(var m = 0; m < monsters.length; m++){
  monsters[m].updateMonster(
    sprite_animation[m],
    explosion_onDeath_animation[m], 
    powerups[m]
    );



    for(var pjct = 0; pjct < projectiles.length; pjct++){
      projectiles[pjct].collisionMonsterShot(monsters[m])
      players[pjct].playerCollitionMonsters(monsters[m])
     

    }
}

for(var p = 0; p < players.length; p++){
  projectiles[p].updateShot(explosion_1[p], explosion_2[p]);
  players[p].update(projectiles[p], sparks_low[p], sparks_high[p], thruster_animation[p], deathExplosionAnimation[p]);        
}


for(var m = 0; m < monsters.length; m++){

  for(var pjct = 0; pjct < projectiles.length; pjct++){
 powerups[m].updatePowerUps(players[pjct], powerup_taken_effect[m]);
  }


}

//animation_TESTING.spriteProccessor(taken_money, 2, players[0].position.x - 450, players[0].position.y - 450, 1000, 1000);















// end of buffer fucntion
} 

buffer();















