
//game play canvas
var c = document.getElementById("canvasGame");
var ctx = c.getContext("2d");

//ui Life bar
var c_ui_status = document.getElementById("canvasUILifeBar");
var ctx_ui_status = c_ui_status.getContext("2d");

var gameFrame = 0;

//Gam Canvas size


// var heightRatio = 1.5;
// c.height = canvas.width * heightRatio;
c.width = 3000;
c.height = 3000;

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
var map_selected = 0
const map_selection = new Mapbuilder();



//testing
const animation_TESTING = new Animation();


//players
//CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
const players = [
  new Player("PLAYER ONE", 1230,  8, 2000, 400000, 5000, 20, 600, 900, 30),
]


//Monsters
//CREATING A MONSTERS Monstrs( id, sprite,  pos_x, pos_y, health, name, speed, color, movements, s_width, s_height, damage)
const monsters = [
 new Monsters(2, bukara.normal_state,  -1000, -1000 , 100000, "Bukara", 7, "orange", "sidebyside", 800, 800, 30, NaN, true,1),
  //  new Monsters(2, asteroid_two,  200, 200 , 100, "Asteroid", 2, "orange", "straightDown", 200, 200, 7, 10),
  //new Monsters(2, asteroid_eleven,  100, 100 , 1000, "Bukara", 7, "orange", "none", 300, 300, 30, NaN, false),
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
const powerUp = [];
const powerup_capture_effect = [];
//---
const pushing_random_explsions = [];
const explosions_animations_pushing =[]
//---

// for(var counting_explosions_animation = 0; counting_explosions_animation < pushing_random_explsions.length; counting_explosions_animation++){
//   explosions_animations_pushing.push(new Animation());
// }


//onPlayer Animation sparks Global
const mousePad = new Mouse();
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
      if(monsters.length != 0){
      monsters[m].shottingCollition(players[pjct]);
      }
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
  
  for(var m = 0; m < monsters.length; m++){
  if(monsters[m].getBossMode()){
    monsters[m].monsterBossDeathExplosion(explosion_onDeath_animation[m]);
  }else{
    monsters[m].monsterDeathExplosion(explosion_onDeath_animation[m]);
  }
      } 

//showing shield example.s     
//player_shield_effect_one[0].drawShield(players[0]);


//Random explosions
for(var counting_explosions = 0 ; counting_explosions < pushing_random_explsions.length; counting_explosions++)
{
pushing_random_explsions[counting_explosions].updateExplosions(explosions_animations_pushing[counting_explosions]);

if(explosions_animations_pushing[counting_explosions].getAnimationStatus() == false){
explosions_animations_pushing.splice(counting_explosions, 1);
pushing_random_explsions.splice(counting_explosions, 1);
  }


}

//LIFE BARS AND STATUS ON TOP OF MONSTERS AND PLAYER
for(var m = 0; m < monsters.length; m++){
monsters[m].monsterView();
}
for(var p = 0; p < players.length; p++){
players[p].playerView();
}


    }

 
} 

buffer();















