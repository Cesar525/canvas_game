const getMonsters = {

//BUKARA
"Bukara" : {

position : {
    x : 0,
    y : 500
},
size : {
    height : 400,
    width : 400,
},
movements : "SideBysideGoingDown",
name : "Bukara",
Gun : "Space pistol",
sprite: Monsters_Sprites.Bukara.normal_state,
health : 10000,
boss : false,
speed : 10,
damage : 20,
shotting_interval : 2,

//Guns
addGuns  : {
addGun : true,
gun_type : 2,
Show_shottingFrom : true,  // thi sis to show where the shot is gonna come from.
shot_one  : {
x : (800 / 2 - 50),
y : (800 / 2  + 200)
},
shot_two  : {
x : (800 - 200),
y : (800 - 100)
},
shot_three  : {
x : 100,
y : (800 - 100)
},
}, 

//Monster Power up
speed_Change : {
sprite_change : Monsters_Sprites.Bukara.diying_state,
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
},


"Invader" : {

    position : {
        x : 0,
        y : 500
    },
    size : {
        height : 400,
        width : 400,
    },
    movements : "SideBysideGoingDown",
    name : "Invader",
    Gun : "Space pistol",
    sprite: Monsters_Sprites.Invader_one.normal_state,
    health : 10000,
    boss : false,
    speed : 10,
    damage : 20,
    shotting_interval : 10,
    
    //Guns
    addGuns  : {
    addGun : true,
    gun_type : 2,
    Show_shottingFrom : false,  // thi sis to show where the shot is gonna come from.
    shot_one  : {
        active : true,
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
    sprite_change : Monsters_Sprites.Invader_one.normal_state,
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







}