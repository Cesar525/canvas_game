//BUKARA SPRITES

const Bukara_sprites = {
  normal_state: "assets/monsters/boss/bukara.png",
  diying_state: "assets/monsters/boss/bukarared.png",
  damage_state: "path/",
};

//BUKARA DATA
const Bukara = {
  flag: 0,
  position: {
    x: -1000,
    y: -1000,
  },
  size: {
    height: 800,
    width: 800,
  },
  movements: monster_movements.sidebyside_boss,
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
      active: true,
      x: 800 / 2 - 50,
      y: 800 / 2 + 200,
      shottype: 3,
      damage: NaN,
      interval: NaN,
      speed: NaN,
    },
    shot_two: {
      active: true,
      x: 800 - 200,
      y: 800 - 100,
      shottype: 3,
      damage: NaN,
      interval: NaN,
      speed: NaN,
    },
    shot_three: {
      active: true,
      x: 100,
      y: 800 - 100,
      shottype: 3,
      damage: NaN,
      interval: NaN,
      speed: NaN,
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
