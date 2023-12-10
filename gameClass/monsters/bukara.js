//BUKARA SPRITES

const Bukara_sprites = {
  normal_state: "assets/monsters/boss/bukara.png",
  diying_state: "assets/monsters/boss/bukarared.png",
  damage_state: "path/",
};

//BUKARA DATA
const Bukara = {
  flag : 0,
  position: {
    x: -1000,
    y: -1000,
  },
  size: {
    height: 800,
    width: 800,
  },
  movements: monster_movements.testingmode,
  name: "Bukara",
  Gun: "Space pistol",

  sprite: Bukara_sprites.normal_state,
  health: 10000,
  boss: true,
  speed: 10,
  damage: 20,
  shotting_interval: 10,

  //Guns
  addGuns: {
    addGun: true,
    gun_type: 1,
    Show_shottingFrom: true, // thi sis to show where the shot is gonna come from.

    shot_one: {
      active: false,
      x: 800 / 2 - 50,
      y: 800 / 2 + 200,
      shottype: NaN,
      damage: NaN,
      interval: NaN,
    },
    shot_two: {
      active: true,
      x: 800 - 200,
      y: 800 - 100,
      shottype: NaN,
      damage: NaN,
      interval: NaN,
    },
    shot_three: {
      active: false,
      x: 100,
      y: 800 - 100,
      shottype: NaN,
      damage: NaN,
      interval: NaN,
    },
  },
  damageSprite: Bukara_sprites.diying_state,

  //Monster Power up
  speed_Change: {
    sprite_change: Bukara_sprites.diying_state,
    speedChange: true,
    SpeedChange: 50,
    onHealth: 3000,
    ShottingSpeedChangeInterval: 10,
  },

  //Monster Loot
  loot: {
    dropping_loot: true,
    dropping_loot_rating: 300,
  },
};
