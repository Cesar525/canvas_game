var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

var gameFrame = 0;

c.width = 1000
c.height = 2000
const gravity = 10;
const fps = 50;
const backg = new Background();

//testing




//players
//CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
const players = [
  new Player("Player One", 1230,  6, 100, 400, 10, 1, 100, 900, 30),
  new Player("Player One", 1230,  6, 100, 400, 10, 2, 400, 900, 30),
  // new Player("Player One", 1230,  6, 100, 400, 10, 1, 900, 900, 100),
  // new Player("Player One", 1230,  6, 100, 400, 10, 2, 1500, 900, 100),
]
//Monsters
//CREATING A MONSTERS Monstrs( id, sprite,  pos_x, pos_y, health, name, speed, color, movements, s_width, s_height, damage)
const monsters = [
    new Monsters(2, asteroid_one,  100, 100 , 100, "Asteroid 1", 10, "orange", "none", 200, 200, 2),
    new Monsters(2, asteroid_two,  400, 100 , 100, "Asteroid 1", 10, "orange", "none", 200, 200, 2),
  ];

  //POWER UPS
const powerUps = [
new PowerUps(),

];

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
 var shieldon;
var showani;
//BUFFERRRR
function buffer(){
    setTimeout(() => {
        requestAnimationFrame(buffer)
       
      }, 1000 / fps);
    //GAME 
    gameFrame ++;
    ctx.clearRect(0,0,c.width, c.height)
    backg.update_backg(); // background image


//colliton Monsters wiht Players && Projectiles
for(var m = 0; m < monsters.length; m++){
  monsters[m].updateMonster(sprite_animation[m], explosion_onDeath_animation[m]);
    for(var pjct = 0; pjct < projectiles.length; pjct++){
      projectiles[pjct].collisionMonsterShot(monsters[m])
      players[pjct].playerCollitionMonsters(monsters[m])
    }
}

for(var p = 0; p < players.length; p++){
      projectiles[p].updateShot(explosion_1[p], explosion_2[p]);
      players[p].update(projectiles[p], sparks_low[p], sparks_high[p], thruster_animation[p], deathExplosionAnimation[p]);        
}

//collition Players With PowerUps
for(var powers = 0;powers < powerUps.length; powers++){


}


powerUps[0].health(100, 500, 500, collisionTouch(players[0], powerUps[0]), players[0]);

// end of buffer fucntion
} 

buffer();















