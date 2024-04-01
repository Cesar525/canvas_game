//game play canvas
var c = document.getElementById("canvasGame");
var ctx = c.getContext("2d");

var gameFrame = 0;

// var heightRatio = 1.5;
// c.height = canvas.width * heightRatio;
c.width = 2500;
c.height = 2500;

var player_name = document.getElementById("playerName").innerHTML;
console.log(player_name);

// c.width = window.innerWidth;
// c.height = window.innerHeight;

const fps = 200;

//gameset
var map_speed = 5;
var mode_set = 2;

//mapOne
var map_selected = 1;
const map_selection = new Mapbuilder();

//Game Effects
const effects_global = [];
const Shots_global = [];

//TE$STING
//const animation_TESTING = new Animation();
//const shotTESTING = new shots(1000, 2000, 7, 0, 10, 10, 0, 100, 300, 1, -50, -150, true, 1);
//const testingAnimations = [new Animation(), new Animation()];

//players
//CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
const players = [
  new Player(
    player_name,
    1230,
    8,
    2000,
    400000,
    500,
    10,
    500,
    900,
    30,
    game_config.flags.players
  ),
];

//Monsters
//CREATING A MONSTERS Monstrs( id, sprite,  pos_x, pos_y, health, name, speed, color, movements, s_width, s_height, damage)
const monsters = [
  //new Monsters(Monsters_Loads["Bukara"]),
  //new Monsters(2, bukara.normal_state,  -1000, -1000 , 100000, "Bukara", 7, "orange", "sidebyside", 800, 800, 30, NaN, true,1),
  //  new Monsters(2, asteroid_two,  200, 200 , 100, "Asteroid", 2, "orange", "straightDown", 200, 200, 7, 10),
  //new Monsters(2, asteroid_eleven,  100, 100 , 1000, "Bukara", 7, "orange", "none", 300, 300, 30, NaN, false),
];

const Monsters_loads = [
  // new Monsters_Load(Invader),
  // new Monsters_Load(Bukara),
];
//TESTING MODE PURPOSE ONLY FOR ANIMATIONS TESTING
const animation_TESTING = new Animation();

//onMonster Loads  animation
const sprite_animation_L = [];
const explosion_onDeath_animation_L = [];

for (var m = 0; m < Monsters_loads.length; m++) {
  sprite_animation_L.push(new Animation());
  explosion_onDeath_animation_L.push(new Animation());
}

//onMonster animation
const sprite_animation = [];
const explosion_onDeath_animation = [];

for (var m = 0; m < monsters.length; m++) {
  sprite_animation.push(new Animation());
  explosion_onDeath_animation.push(new Animation());
}

//----------------------------------\

//POWER UPS DROP---------
const powerUp = [];

//---
const pushing_random_explsions = [];
const explosions_animations_pushing = [];
//---

//onPlayer Animation sparks Global
const mousePad = new Mouse();
const sparks_low = [];
const sparks_high = [];
const thruster_animation = [];
const deathExplosionAnimation = [];
const player_shield_effect_one = [new Shields()];
const player_shield_effect_two = [];
for (var p = 0; p < players.length; p++) {
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
function buffer() {
  setTimeout(() => {
    requestAnimationFrame(buffer);
  }, 1000 / fps);
  //GAME
  gameFrame++;
  ctx.clearRect(0, 0, c.width, c.height);

  powerUp.filter(function () {
    return true;
  });

  if (true) {
    if (!game_config.test_mode) {
      map_selection.updateMap(map_selected);
    }
    // PowerUps draw
    for (var f = 0; f < powerUp.length; f++) {
      powerUp[f].updatePowerUps();
    }

    //colliton Monsters wiht Players
    for (var m = 0; m < monsters.length; m++) {
      monsters[m].updateMonster(sprite_animation[m]);
      // deleting destroyed monsters
      if (monsters[m].getDeleteObject() == true) {
        monsters.splice(m, 1);
        sprite_animation.splice(m, 1);
        explosion_onDeath_animation.splice(m, 1);
      }

      for (var pjct = 0; pjct < players.length; pjct++) {
        players[pjct].playerCollitionMonsters(monsters[m]);
        players[pjct].shottingCollition(monsters[m]);
        if (monsters.length != 0) {
          monsters[m].shottingCollition(players[pjct]);
        }
      }
    }

    //colliton Monsters_Loads and deletions
    for (var m = 0; m < Monsters_loads.length; m++) {
      Monsters_loads[m].updateMonster(sprite_animation_L[m]);
      if (Monsters_loads[m].getDeleteObject() == true) {
        Monsters_loads.splice(m, 1);
        sprite_animation_L.splice(m, 1);
        explosion_onDeath_animation_L.splice(m, 1);
      }
      //collition shot monsters to player an dplayer to monsters
      for (var pjct = 0; pjct < players.length; pjct++) {
        players[pjct].playerCollitionMonsters(Monsters_loads[m]);
        players[pjct].shottingCollition(Monsters_loads[m]);
        if (Monsters_loads.length != 0) {
          Monsters_loads[m].shottingCollition(players[pjct]);
        }
      }
    }

    //powerUps updates and collision with player
    for (var p = 0; p < players.length; p++) {
      for (var f = 0; f < powerUp.length; f++) {
        powerUp[f].PowerUpcollisionWithPlayer(players[p]);
        if (powerUp[f].destroyPush) {
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

    for (var m = 0; m < monsters.length; m++) {
      if (monsters[m].getBossMode()) {
        monsters[m].monsterBossDeathExplosion(explosion_onDeath_animation[m]);
      } else {
        monsters[m].monsterDeathExplosion(explosion_onDeath_animation[m]);
      }
    }
    // Monster Loads
    for (var m = 0; m < Monsters_loads.length; m++) {
      if (Monsters_loads[m].getBossMode()) {
        Monsters_loads[m].monsterBossDeathExplosion(
          explosion_onDeath_animation_L[m]
        );
      } else {
        Monsters_loads[m].monsterDeathExplosion(
          explosion_onDeath_animation_L[m]
        );
      }
    }

    //showing shield example.s
    //player_shield_effect_one[0].drawShield(players[0]);

    //Random explosions
    for (var i = 0; i < pushing_random_explsions.length; i++) {
      pushing_random_explsions[i].updateExplosions(
        explosions_animations_pushing[i]
      );

      if (explosions_animations_pushing[i].getAnimationStatus() == false) {
        explosions_animations_pushing.splice(i, 1);
        pushing_random_explsions.splice(i, 1);
      }
    }

    //LIFE BARS AND STATUS ON TOP OF MONSTERS AND PLAYER
    for (var m = 0; m < monsters.length; m++) {
      monsters[m].monsterView();
    }
    //Monster Loads
    for (var m = 0; m < Monsters_loads.length; m++) {
      Monsters_loads[m].monsterView();
    }
    for (var p = 0; p < players.length; p++) {
      players[p].playerView();
    }
  }

  // EFFECTS
  //update Effects
  if (effects_global.length > 0) {
    for (var i = 0; i < effects_global.length; i++) {
      effects_global[i].updateEffects();
      if (effects_global[i].getDestroyObject()) {
        effects_global.splice(i, 1);
      }
    }
  }

  // TESTING ANIMATION MODE ONLY PURPOSES
  if (game_config.test_mode) {
    //   animation_TESTING.spritePage(
    //     "assets/powerBombsEffect/fullychargedsprite/white.png",
    //     players[0].position.x - 170,
    //     players[0].position.y - 150,
    //     2575,
    //     2575,
    //     5,
    //     5,
    //     515,
    //     515,
    //     0,
    //     true,
    //     -100,
    //     -100
    //   );
  }
}

buffer();
