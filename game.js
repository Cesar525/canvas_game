//game play canvas
var c = document.getElementById("canvasGame");
var ctx = c.getContext("2d");
//ui
var c_ui = document.getElementById("canvasUI");
var ctx_ui = c_ui.getContext("2d");

//ui Life bar
var c_ui_status = document.getElementById("canvasUILifeBar");
var ctx_ui_status = c_ui_status.getContext("2d");

var gameFrame = 0;

//Gam Canvas size
c.width = 2000
c.height = 1500

//Storage canvas size
c_ui.width = 300
c_ui.height = c.height

//playerStatus Bar
c_ui_status.width = c.width + c_ui.width + 8;
c_ui_status.height = 200;


// c.width = window.innerWidth;
// c.height = window.innerHeight;
const gravity = 10;
const fps = 256;
var map_speed = 5;
//perfect Window size
// 2000 -> width
// 1500 -> height


//mapOne
const map_one = [
  //(posx, posy, width, height, speed)
  new Background(100, -900, 500, 500), 
  new Background(200, -900, 200, 200), 
  new Background(300, -900, 200, 200), 
  new Background(0, 0), // stars
  new Background(400, -900, 100, 100),
  new Background(900, -900, 900, 900),
  new Background(0, 0), // stars
  new Background(0, -900, 100, 100),
  new Background(-100, 100, 100, 100),
  new Background(-100, -100, 100, 100),
  new Background(-100, -100, 100, 100),
  new Background(-100, -100, 100, 100),
  new Background(-100, -100, 100, 100),
  new Background(-100, -100, 100, 100),
  new Background(-100, -100, 100, 100),
  new Background(-100, -100, 100, 100),
  new Background(-100, -100, 100, 100),
  new Background(-100, -100, 100, 100)
];

//testing
const animation_TESTING = new Animation();


//players
//CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
const players = [
  new Player("PLAYER ONE", 1230,  6, 100, 10000, 30, 10, 600, 900, 20),
  // new Player("PLAYER ONE", 1230,  6, 100, 400, 100, 10, 800, 1000, 50),

]
//Monsters
//CREATING A MONSTERS Monstrs( id, sprite,  pos_x, pos_y, health, name, speed, color, movements, s_width, s_height, damage)
const monsters = [
   new Monsters(2, asteroid_one,  200, 200 , 5000000, "Asteroid", 1, "orange", "none", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  //  new Monsters(2, asteroid_one,  200, 200 , 100, "Asteroid", 1, "orange", "straightDown", 100, 100, 2),
  ];

  //POWER UPS DROP
const powerUp = [
  //new PowerUps(400, 100, "health"),
 // new PowerUps(700, 100, "money"),
 // new PowerUps(900, 100, "energy"),
];

const powerup_capture_effect = [];
// for(var f = 0; f < powerUp.length; f++){
//   powerup_capture_effect.push(new Animation());
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

//onMonster animation
const sprite_animation = [];
const explosion_onDeath_animation = [];

for(var m = 0; m < monsters.length; m++){
sprite_animation.push(new Animation());
explosion_onDeath_animation.push(new Animation());
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
    ctx_ui.clearRect(0,0,c_ui.width, c_ui.height)
    ctx_ui_status.clearRect(0,0,c_ui_status.width, c_ui_status.height)

ctx.font = "90px Roboto Mono";
ctx.fillStyle = "white";
ctx.fillText(gameFrame, 50, 100);

powerUp.filter(function(){
  return true;
})


if(true){

  map_one[6].drawStars(2, 1); // background image
  if(gameFrame > 400){
    if(gameFrame > 1500){
    map_one[7].drawPlanet(2, 3);
    map_one[5].drawPlanet(1, 2);
    map_one[4].drawPlanet(1, 1);
    }
    if(gameFrame > 800){
    map_one[0].drawNebulas(5);
    map_one[1].drawNebulasBlue(2);
    map_one[2].drawNebulaMulti(2);
    }
//     if(gameFrame > 600){
//     // map_one[8].asteroids(10);
//     // map_one[9].asteroids(10);
//     // map_one[10].asteroids(10);
//     // map_one[11].asteroids(15);
//     // map_one[12].asteroids(5);
//     // map_one[13].asteroids(3);
//     // map_one[14].asteroids(20);
//     // map_one[15].asteroids(3);
//   }
}
map_one[3].drawStars(3, 2); // background image
  
for(var f = 0; f < powerUp.length; f++){      
  powerUp[f].updatePowerUps(players[0],powerup_capture_effect[f]);
}

//colliton Monsters wiht Players && Projectiles
for(var m = 0; m < monsters.length; m++){
  monsters[m].updateMonster(
    sprite_animation[m],
    explosion_onDeath_animation[m]
    );
    
    for(var pjct = 0; pjct  < players.length ; pjct ++){
      players[pjct].playerCollitionMonsters(monsters[m])
      players[pjct].shottingCollition(monsters[m]);
      
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
 
//player_shield_effect_one[0].updateshield(players[0]);
  //animation_TESTING.spriteProccessor(taken_money, 2, players[0].position.x - 450, players[0].position.y - 450, 1000, 1000);
  //animation_TESTING.spritePage("assets/capture_effects/capture_health/spritesheet.png", players[0].position.x - 65, players[0].position.y - 60, 11264, 512, 22, 1, 512, 512, 2, true, -300, -300)
  
  // explosionEffect(effect, posx, posy, send, speed)
   burst_fire_test.explosionEffect(9, 500, 500, true, 1);
  
  
  
  
  
}






// end of buffer fucntion
} 

buffer();















