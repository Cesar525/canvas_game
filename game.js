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
  new Background(100, 100, 100, 100),
  new Background(100, 100, 100, 100),
  new Background(100, 100, 100, 100),
  new Background(100, 100, 100, 100),
  new Background(100, 100, 100, 100),
  new Background(100, 100, 100, 100),
  new Background(100, 100, 100, 100),
  new Background(100, 100, 100, 100),
  new Background(100, 100, 100, 100),
  new Background(100, 100, 100, 100)
];

//testing
const animation_TESTING = new Animation();


//players
//CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
const players = [
  new Player("Player One", 1230,  6, 100, 400, 50, 3, 100, 900, 50),
  //  new Player("Player One", 1230,  6, 100, 400, 10, 2, 400, 900, 30),
  //  new Player("Player One", 1230,  6, 100, 400, 10, 1, 900, 900, 100),
  //  new Player("Player One", 1230,  6, 100, 400, 10, 2, 1500, 900, 100),
]
//Monsters
//CREATING A MONSTERS Monstrs( id, sprite,  pos_x, pos_y, health, name, speed, color, movements, s_width, s_height, damage)
const monsters = [  
   new Monsters(2, asteroid_one,  100, 100 , 500000000, "Asteroid", 5, "orange", "none", 200, 200, 2),
  //  new Monsters(2, asteroid_two,  100, 100 , 50, "Asteroid 2", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_three,  100, 100 , 50, "Asteroid 3", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_four,  100, 100 , 50, "Asteroid 4", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_five,  100, 100 , 50, "Asteroid 5", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_six,  100, 100 , 50, "Asteroid 6", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_seven,  100, 100 , 50, "Asteroid 7", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_eight,  100, 100 , 50, "Asteroid 8", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_nine,  100, 100 , 50, "Asteroid 9", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_ten,  100, 100 , 50, "Asteroid 10", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_eleven,  100, 100 , 50, "Asteroid 11", 5, "orange", "straightDown", 200, 200, 2),

  //  new Monsters(2, asteroid_one,  100, 100 , 50, "Asteroid", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_two,  100, 100 , 50, "Asteroid 2", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_three,  100, 100 , 50, "Asteroid 3", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_four,  100, 100 , 50, "Asteroid 4", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_five,  100, 100 , 50, "Asteroid 5", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_six,  100, 100 , 50, "Asteroid 6", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_seven,  100, 100 , 50, "Asteroid 7", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_eight,  100, 100 , 50, "Asteroid 8", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_nine,  100, 100 , 50, "Asteroid 9", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_ten,  100, 100 , 50, "Asteroid 10", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_eleven,  100, 100 , 50, "Asteroid 11", 5, "orange", "straightDown", 200, 200, 2),

  //  new Monsters(2, asteroid_one,  100, 100 , 50, "Asteroid", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_two,  100, 100 , 50, "Asteroid 2", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_three,  100, 100 , 50, "Asteroid 3", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_four,  100, 100 , 50, "Asteroid 4", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_five,  100, 100 , 50, "Asteroid 5", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_six,  100, 100 , 50, "Asteroid 6", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_seven,  100, 100 , 50, "Asteroid 7", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_eight,  100, 100 , 50, "Asteroid 8", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_nine,  100, 100 , 50, "Asteroid 9", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_ten,  100, 100 , 50, "Asteroid 10", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_eleven,  100, 100 , 50, "Asteroid 11", 5, "orange", "straightDown", 200, 200, 2),

  //  new Monsters(2, asteroid_one,  100, 100 , 50, "Asteroid", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_two,  100, 100 , 50, "Asteroid 2", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_three,  100, 100 , 50, "Asteroid 3", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_four,  100, 100 , 50, "Asteroid 4", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_five,  100, 100 , 50, "Asteroid 5", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_six,  100, 100 , 50, "Asteroid 6", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_seven,  100, 100 , 50, "Asteroid 7", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_eight,  100, 100 , 50, "Asteroid 8", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_nine,  100, 100 , 50, "Asteroid 9", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_ten,  100, 100 , 50, "Asteroid 10", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_eleven,  100, 100 , 50, "Asteroid 11", 5, "orange", "straightDown", 200, 200, 2),

  //  new Monsters(2, asteroid_one,  100, 100 , 50, "Asteroid", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_two,  100, 100 , 50, "Asteroid 2", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_three,  100, 100 , 50, "Asteroid 3", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_four,  100, 100 , 50, "Asteroid 4", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_five,  100, 100 , 50, "Asteroid 5", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_six,  100, 100 , 50, "Asteroid 6", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_seven,  100, 100 , 50, "Asteroid 7", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_eight,  100, 100 , 50, "Asteroid 8", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_nine,  100, 100 , 50, "Asteroid 9", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_ten,  100, 100 , 50, "Asteroid 10", 5, "orange", "straightDown", 200, 200, 2),
  //  new Monsters(2, asteroid_eleven,  100, 100 , 50, "Asteroid 11", 5, "orange", "straightDown", 200, 200, 2),


  ];

  //POWER UPS
const powerUp = [
  new PowerUps(100, 100, "health"),
  new PowerUps(300, 100, "energy"),
  new PowerUps(500, 100, "energy"),
  new PowerUps(700, 100, "money"),
  new PowerUps(900, 100, "money"),
  new PowerUps(1000, 100, "health")
];

const powerup_capture_effect = [];
for(var f = 0; f < powerUp.length; f++){
  powerup_capture_effect.push(new Animation());
}


//Player Missiles & its effects
const projectiles = [];
const explosion_1 = [];
const explosion_2 = [];
for(var p = 0; p < players.length; p++){
projectiles.push(new shots( 5, 25, 25, 10, 20));
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

//BUFFERRRR
function buffer(){
    setTimeout(() => {
        requestAnimationFrame(buffer)
       
      }, 1000 / fps);
    //GAME 
    gameFrame ++;
    ctx.clearRect(0,0,c.width, c.height)

ctx.font = "90px Roboto Mono";
ctx.fillStyle = "white";
ctx.fillText(gameFrame, 50, 100);




if(true){
    map_one[7].drawPlanet(2, 3);
    map_one[6].drawStars(1, 1); // background image
    map_one[5].drawPlanet(1, 2);
    map_one[4].drawPlanet(1, 1);
    map_one[0].drawNebulas(5);
    map_one[1].drawNebulasBlue(2);
    map_one[3].drawStars(2, 2); // background image
    map_one[2].drawNebulaMulti(2);
    // map_one[8].asteroids(10);
    // map_one[9].asteroids(10);
    // map_one[10].asteroids(10);
    // map_one[11].asteroids(15);
    // map_one[12].asteroids(5);
    // map_one[13].asteroids(3);
    // map_one[14].asteroids(20);
    // map_one[15].asteroids(3);



//colliton Monsters wiht Players && Projectiles
for(var m = 0; m < monsters.length; m++){
  monsters[m].updateMonster(
    sprite_animation[m],
    explosion_onDeath_animation[m]
    );

    
    
    for(var pjct = 0; pjct < projectiles.length; pjct++){
      projectiles[pjct].collisionMonsterShot(monsters[m])
      players[pjct].playerCollitionMonsters(monsters[m])
      
    }
  }
  
  
  for(var p = 0; p < players.length; p++){
    projectiles[p].updateShot(players[p],explosion_1[p], explosion_2[p]);
   

    players[p].update(projectiles[p], sparks_low[p], sparks_high[p], thruster_animation[p], deathExplosionAnimation[p]); 
    
    
    for(var f = 0; f < powerUp.length; f++){      
    powerUp[f].updatePowerUps(players[p],powerup_capture_effect[f]);
    powerUp[f].PowerUpcollisionWithPlayer(players[p]);
  
    
    if(powerUp[f].destroyPush){
      powerUp.splice(f, 1);
    }
    if(powerup_capture_effect[f].destroyPush){
      powerup_capture_effect.splice(f, 1);
    }
    }
  }
  
 //animation_TESTING.spriteProccessor(taken_money, 2, players[0].position.x - 450, players[0].position.y - 450, 1000, 1000);
  //animation_TESTING.spritePage("assets/capture_effects/capture_money/spritesheet2.png", players[0].position.x - 450, players[0].position.y - 450, 11264, 512, 22, 1, 512, 512, 4, true, 600, 600)
  
  
  
  
  
  
  
}






// end of buffer fucntion
} 

buffer();















