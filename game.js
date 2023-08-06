
//game play canvas
var c = document.getElementById("canvasGame");
var ctx = c.getContext("2d");

//ui Life bar
var c_ui_status = document.getElementById("canvasUILifeBar");
var ctx_ui_status = c_ui_status.getContext("2d");

var gameFrame = 0;

//Gam Canvas size
c.width = 2000
c.height = 1500

//playerStatus Bar
c_ui_status.width = c.width;
c_ui_status.height = 200;


// c.width = window.innerWidth;
// c.height = window.innerHeight;
const gravity = 10;
const fps = 256;
var map_speed = 5;
//perfect Window size
// 2000 -> width
// 1500 -> height
var mode_set = 2;

//mapOne
var map_selected = 1
const map_selection = new Mapbuilder();


//testing
const animation_TESTING = new Animation();


//players
//CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
const players = [
  new Player("PLAYER ONE", 1230,  8, 1000, 2000, 1500, 20, 600, 900, 30),
  // new Player("PLAYER ONE", 1230,  6, 100, 400, 100, 10, 800, 1000, 50),

]
//Monsters
//CREATING A MONSTERS Monstrs( id, sprite,  pos_x, pos_y, health, name, speed, color, movements, s_width, s_height, damage)


const monsters = [
   new Monsters(2, asteroid_one,  -200, -200 , 10, "Asteroid Boss", 2, "orange", "none", 200, 200, 7, NaN, true),
  //  new Monsters(2, asteroid_two,  200, 200 , 100, "Asteroid", 2, "orange", "straightDown", 200, 200, 7, 10),
  ];
  
//onMonster animation
const sprite_animation = [];
const explosion_onDeath_animation = [];

for(var m = 0; m < monsters.length; m++){
sprite_animation.push(new Animation());
explosion_onDeath_animation.push(new Animation());
}
//----------------------------------\

  //POWER UPS DROP---------
const powerUp = [
  new PowerUps(400, 100, "health", 100),
 new PowerUps(700, 100, "money", 100),
 new PowerUps(900, 100, "energy", 100),
 new PowerUps(1000, 100, "energyLava", 100, 200, 200),
 new PowerUps(1500, 100, "energyGreen", 100, 200, 200),
 new PowerUps(1500, 500, "energyGreen", 100, 200, 200),
];

const powerup_capture_effect = [];
for(var f = 0; f < powerUp.length; f++){
  powerup_capture_effect.push(new Animation());
}
//---------------------------------

const particles = [new Particles(400, 400, "rocks")];

//---
const pushing_random_explsions = [];
const explosions_animations_pushing =[]
//---

// for(var counting_explosions_animation = 0; counting_explosions_animation < pushing_random_explsions.length; counting_explosions_animation++){
//   explosions_animations_pushing.push(new Animation());
// }


//onPlayer Animation sparks Global
const sparks_low = [];
const sparks_high = [];
const thruster_animation = [];
const deathExplosionAnimation = [];
const player_shield_effect_one = [new Shields()];
const player_shield_effect_two = [];
for(var p = 0; p < players.length; p++){
  sparks_low.push(new Animation());
  sparks_high.push(new Animation());
  thruster_animation.push(new Animation());
  deathExplosionAnimation.push(new Animation());
  player_shield_effect_one.push(new Animation());
  player_shield_effect_two.push(new Animation());
}

const burst_fire_test = new Animation();

//Monster PowerUp Drop

//BUFFERRRR
function buffer(){
    setTimeout(() => {
        requestAnimationFrame(buffer)
       
      }, 1000 / fps);
    //GAME 
    gameFrame ++;
    ctx.clearRect(0,0,c.width, c.height)
    ctx_ui_status.clearRect(0,0,c_ui_status.width, c_ui_status.height)

 
powerUp.filter(function(){
  return true;
})


if(true){


  map_selection.updateMap(map_selected)

//colliton Monsters wiht Players && Projectiles
for(var m = 0; m < monsters.length; m++){
  monsters[m].updateMonster(
    sprite_animation[m]
    );
    if(monsters[m].getDeleteObject() == true){
monsters.splice(m, 1);
sprite_animation.splice(m, 1);
explosion_onDeath_animation.splice(m, 1);
    }
    
    for(var pjct = 0; pjct  < players.length ; pjct ++){
      players[pjct].playerCollitionMonsters(monsters[m])
      players[pjct].shottingCollition(monsters[m]);
      
    }
  }
  
for(var m = 0; m < monsters.length; m++){
  if(monsters[m].getBossMode()){
    monsters[m].monsterBossDeathExplosion(explosion_onDeath_animation[m]);
  }else{
    monsters[m].monsterDeathExplosion(explosion_onDeath_animation[m]);
  }
      } 
  
  //powerUps updates and collision
  for(var p = 0; p < players.length; p++){
    for(var f = 0; f < powerUp.length; f++){      
      powerUp[f].PowerUpcollisionWithPlayer(players[p]);
      if(powerUp[f].destroyPush){
        powerUp.splice(f, 1);
        powerup_capture_effect.splice(f, 1);
      }
    }
    players[p].update(
      sparks_low[p], 
      sparks_high[p], 
      thruster_animation[p], 
      deathExplosionAnimation[p]
      ); 

      
  }
console.log(powerUp.length)
console.log("Monsters  " + monsters.length)

// for(var particlesCoutning = 0; particlesCoutning < particles.length; particlesCoutning++){
//   particles[particlesCoutning].particleUpdates();
// }



//Random explosions
for(var counting_explosions = 0 ; counting_explosions < pushing_random_explsions.length; counting_explosions++)
{
pushing_random_explsions[counting_explosions].updateExplosions(explosions_animations_pushing[counting_explosions]);

if(explosions_animations_pushing[counting_explosions].getAnimationStatus() == false){
explosions_animations_pushing.splice(counting_explosions, 1);
pushing_random_explsions.splice(counting_explosions, 1);
  }
console.log("counting   " + explosions_animations_pushing.length + "  " + pushing_random_explsions.length)

}

animation_TESTING.spritePage("assets/firesprites/PNG/1.png", 100 , -500, 2048, 2048, 8, 4, 256, 512, 1, true, 1000, 1900)
// animation_TESTING.explosionEffect(3, 500 + 100, 500 + 100, true, 4)
}




} 

buffer();















