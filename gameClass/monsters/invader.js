

const Invader_sprites = {
    normal_state : "assets/monsters/boss/bukara.png",
    diying_state : "assets/monsters/boss/bukarared.png",
    damage_state : "path/"
}

const Invader = {

    position : {
        x : -500,
        y : - 500
    },
    size : {
        height : 400,
        width : 400,
    },
    thruster : {
        thruster_positionX : 0,
        thruster_positionY : 0,
    },
    movements : "SideBysideGoingDown",
    name : "Invader",
    Gun : "Space pistol",
    sprite: Invader_sprites.normal_state,
    health : 10000000,
    boss : false,
    speed : 50,
    damage : 20,
    shotting_interval : 6,
    
    //Guns
    addGuns  : {
    addGun : true,
    gun_type : 1,
    Show_shottingFrom : false,  // thi sis to show where the shot is gonna come from.
    shot_one  : {
        active : false,
    x : 0,
    y : 200
    },
    shot_two  : {
        active : true,
    x : 300,
    y : 200
    },
    shot_three  : {
        active: false,
    x : 100,
    y : (800 - 100)
    },
    }, 
    
    //Monster Power up
    speed_Change : {
    sprite_change : Invader_sprites.diying_state,
    speedChange : true,
    SpeedChange : 50,
    onHealth : 3000,
    ShottingSpeedChangeInterval  : 10
    } ,
    
    //Monster Loot
    loot : {
    dropping_loot : true,
    dropping_loot_rating : 300,
    } 
    }
