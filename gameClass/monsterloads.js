const bukara = {
    normal_state : "assets/monsters/boss/bukara.png",
    diying_state : "assets/monsters/boss/bukarared.png"
}


const Monsters_Loads= {

//BUKARA
"Bukara" : {

position : {
    x : - 1000,
    y : - 1000
},
size : {
    height : 800,
    width : 800,
},
movements : "sidebyside",
name : "Bukaraaaaa",
Gun : "Space pistol",
sprite: "assets/monsters/boss/bukara.png",
health : 10000,
boss : true,
speed : 10,
damage : 300,
shotting_interval : 20,
//Guns
addGuns  : {
addGun : false,
gun_type : 1,
Show_shottingFrom : false,  // thi sis to show where the shot is gonna come from.
shot_one  : {
posx : 0,
posy : 0
},
shot_one  : {
posx : 0,
posy : 0
},
shot_one  : {
posx : 0,
posy : 0
},
},   
speed_Change : {
speedChange : true,
Speed : 30,
onHealth : 3000,
ShottingSpeedChangeInterval  : 10
} ,
loot : {
dropping_loot : true,
dropping_loot_rating : 300,
} 
}
}