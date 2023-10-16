
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
const fps = 200;

//gameset
var map_speed = 5;
var mode_set = 2;

//mapOne
var map_selected = 1
const map_selection = new Mapbuilder();

//Game Effects
const effects_global = [];

//testing
const animation_TESTING = new Animation();


//players
//CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
const players = [
  new Player("PLAYER ONE", 1230,  8, 2000, 400000, 500, 1, 100, 900, 30),
  // new Player("PLAYER TWO", 1230,  8, 2000, 400000, 5000, 20, 300, 900, 30),
  // new Player("PLAYER TWO", 1230,  8, 2000, 400000, 5000, 20, 600, 900, 30),
  // new Player("PLAYER TWO", 1230,  8, 2000, 400000, 5000, 20, 900, 900, 30),
  // new Player("PLAYER TWO", 1230,  8, 2000, 400000, 5000, 20, 1200, 900, 30),
  // new Player("PLAYER TWO", 1230,  8, 2000, 400000, 5000, 20, 1400, 900, 30),
  // new Player("PLAYER TWO", 1230,  8, 2000, 400000, 5000, 20, 1600, 900, 30),
  // new Player("PLAYER TWO", 1230,  8, 2000, 400000, 5000, 20, 1800, 900, 30),
  // new Player("PLAYER TWO", 1230,  8, 2000, 400000, 5000, 20, 2000, 900, 30),
  // new Player("PLAYER TWO", 1230,  8, 2000, 400000, 5000, 20, 2200, 900, 30),
  // new Player("PLAYER TWO", 1230,  8, 2000, 400000, 5000, 20, 2400, 900, 30),
]


//Monsters
//CREATING A MONSTERS Monstrs( id, sprite,  pos_x, pos_y, health, name, speed, color, movements, s_width, s_height, damage)
const monsters = [
// new Monsters(2, bukara.normal_state,  -1000, -1000 , 100000, "Bukara", 7, "orange", "sidebyside", 800, 800, 30, NaN, true,1),
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
const powerUp = [
  new PowerUps(100, 100, powerUpsSelect.HEALTH, 100, 100, 100),
  new PowerUps(200, 100, powerUpsSelect.ENERGY, 100, 100, 100),
  new PowerUps(300, 100, powerUpsSelect.MONEY, 100, 100, 100),
  new PowerUps(400, 100, powerUpsSelect.MACHINE_GUN, 100, 100, 100),
  new PowerUps(500, 100, powerUpsSelect.LAZER_GUN, 100, 100, 100),
  new PowerUps(600, 100, powerUpsSelect.PLASMA_GUN, 100, 100, 100),
  new PowerUps(700, 100, powerUpsSelect.LAVA_GUN, 100, 100, 100),
  new PowerUps(800, 100, powerUpsSelect.GREEN_GUN, 100, 100, 100),
  new PowerUps(900, 100, powerUpsSelect.BLUE_SHIELD, 100, 100, 100),
  new PowerUps(1000, 100, powerUpsSelect.RED_SHIELD, 100, 100, 100),

];

//---
const pushing_random_explsions = [];
const explosions_animations_pushing =[]
//---

// for(var i_animation = 0; i_animation < pushing_random_explsions.length; i_animation++){
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
  
// PowerUps draw
for(var f = 0; f < powerUp.length; f++){  
  powerUp[f].updatePowerUps();
}

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
for(var i = 0 ; i < pushing_random_explsions.length; i++)
{
pushing_random_explsions[i].updateExplosions(explosions_animations_pushing[i]);

if(explosions_animations_pushing[i].getAnimationStatus() == false){
explosions_animations_pushing.splice(i, 1);
pushing_random_explsions.splice(i, 1);
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








// EFFECTS
if(effects_global.length > 0){
for(var i = 0 ; i < effects_global.length; i ++){
effects_global[i].updateEffects();
if(effects_global[i].getDestroyObject()){
  effects_global.splice(i, 1);
}}



}







} 

buffer();















