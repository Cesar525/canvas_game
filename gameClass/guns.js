// all the guns are going to be stored here players and monsters will be able to share them.

function gunsType(type, cid, start_posx, start_posy, name, flag) {
  // constructor(start_posx, start_posy, shotype, shotdirection, explosion_type, shot_damage, shot_speed, width, height, burst_selection, burst_position.x, burst position.y){
  //Default Gun  shotDamage == 1
  if (type == 1) {
    var damage_1 = 1;
    cid.gun_on.push(
      new shots(
        start_posx,
        start_posy,
        11,
        0,
        8,
        damage_1,
        40,
        100,
        100,
        1,
        -50,
        -150,
        false,
        false,
        name,
        flag
      )
    );
  }

  // //GUN machine gun double regular bullet each shotDamage == 1
  // if (type == 2) {
  //   var damage_2 = 1;
  //   cid.gun_on.push(
  //     new shots(
  //       start_posx + cid.body.lef_side_wign_shot,
  //       start_posy,
  //       11,
  //       0,
  //       8,
  //       damage_2,
  //       40,
  //       100,
  //       100,
  //       1,
  //       -50,
  //       -100,
  //       false,
  //       false,
  //       name,
  //       flag
  //     )
  //   );

  //   cid.gun_on.push(
  //     new shots(
  //       start_posx + cid.body.right_side_wign_shot,
  //       start_posy,
  //       11,
  //       0,
  //       8,
  //       damage_2,
  //       40,
  //       100,
  //       100,
  //       1,
  //       -50,
  //       -100
  //     )
  //   );
  // }

  // //GUN 3 single Lazer shot WORKING ON shotDamage == 5 energy used
  // if (type == 3) {
  //   var EnergyUse_3 = 5;
  //   var damage_3 = 5;
  //   cid.gun_on.push(
  //     new shots(start_posx, start_posy, 3, 0, 12, damage_3, 0, 100, 100)
  //   );

  //   cid.body.energy -= EnergyUse_3;
  // }

  // //gun 4 Double Lazer Shot shotDamage == 5 energy use 10 -- CURRENTLY WORKING ON.
  // if (type == 4) {
  //   var EnergyUse_4 = 10;
  //   var damage_4 = 5;
  //   cid.gun_on.push(
  //     new shots(
  //       start_posx + cid.body.lef_side_wign_shot,
  //       start_posy,
  //       3,
  //       0,
  //       12,
  //       damage_4,
  //       0,
  //       100,
  //       150,
  //       1,
  //       -50,
  //       -100
  //     )
  //   );

  //   cid.body.energy -= EnergyUse_4;

  //   cid.gun_on.push(
  //     new shots(
  //       start_posx + cid.body.right_side_wign_shot,
  //       start_posy,
  //       3,
  //       0,
  //       12,
  //       damage_4,
  //       0,
  //       100,
  //       150,
  //       1,
  //       -50,
  //       -100
  //     )
  //   );
  // }

  // //gun 5 single lazer purple damage 7 energy used 11
  // if (type == 5) {
  //   var EnergyUse_5 = 11;
  //   cid.body.energy -= EnergyUse_5;
  //   var damage_5 = 7;
  //   cid.gun_on.push(
  //     new shots(
  //       start_posx,
  //       start_posy,
  //       5,
  //       0,
  //       7,
  //       damage_5,
  //       40,
  //       100,
  //       200,
  //       1,
  //       -50,
  //       -150
  //     )
  //   );
  // }

  // // gun 6 double single lazers damage 7 use 15 energy
  // if (type == 6) {
  //   var EnergyUse_6 = 15;
  //   cid.body.energy -= EnergyUse_6;
  //   var damage_6 = 7;
  //   cid.gun_on.push(
  //     new shots(
  //       start_posx + cid.body.lef_side_wign_shot,
  //       start_posy,
  //       5,
  //       0,
  //       7,
  //       damage_6,
  //       40,
  //       100,
  //       150,
  //       1,
  //       -50,
  //       -150
  //     )
  //   );

  //   cid.gun_on.push(
  //     new shots(
  //       start_posx + cid.body.right_side_wign_shot,
  //       start_posy,
  //       5,
  //       0,
  //       7,
  //       damage_6,
  //       40,
  //       100,
  //       150,
  //       1,
  //       -50,
  //       -150
  //     )
  //   );
  // }

  // //gun 7 single Lava shots damage = 10 energy 18
  // if (type == 7) {
  //   var EnergyUse_7 = 18;
  //   cid.body.energy -= EnergyUse_7;
  //   var damage_7 = 10;
  //   cid.gun_on.push(
  //     new shots(
  //       start_posx,
  //       start_posy,
  //       7,
  //       0,
  //       10,
  //       damage_7,
  //       40,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150
  //     )
  //   );
  // }

  // //gun 8 lava double energy used 20
  // if (type == 8) {
  //   var EnergyUse_8 = 20;
  //   cid.body.energy -= EnergyUse_8;
  //   var damage_8 = 10;
  //   cid.gun_on.push(
  //     new shots(
  //       start_posx + cid.body.lef_side_wign_shot,
  //       start_posy,
  //       7,
  //       0,
  //       10,
  //       damage_8,
  //       40,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150
  //     )
  //   );

  //   cid.gun_on.push(
  //     new shots(
  //       start_posx + cid.body.right_side_wign_shot,
  //       start_posy,
  //       7,
  //       0,
  //       10,
  //       damage_8,
  //       40,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150
  //     )
  //   );
  // }

  // //gun 9 green been damage 8 = use energy 19
  // if (type == 9) {
  //   var EnergyUse_9 = 18;
  //   cid.body.energy -= EnergyUse_9;
  //   var damage_9 = 8;
  //   cid.gun_on.push(
  //     new shots(
  //       start_posx,
  //       start_posy,
  //       9,
  //       0,
  //       13,
  //       damage_9,
  //       40,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150
  //     )
  //   );
  // }

  // //gun 10

  // if (type == 10) {
  //   var EnergyUse_10 = 19;
  //   cid.body.energy -= EnergyUse_10;
  //   var damage_10 = 10;
  //   cid.gun_on.push(
  //     new shots(
  //       start_posx + cid.body.lef_side_wign_shot,
  //       start_posy,
  //       9,
  //       0,
  //       13,
  //       damage_10,
  //       40,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150
  //     )
  //   );

  //   cid.gun_on.push(
  //     new shots(
  //       start_posx + cid.body.right_side_wign_shot,
  //       start_posy,
  //       9,
  //       0,
  //       13,
  //       damage_10,
  //       40,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150
  //     )
  //   );
  // }

  // //Gun 20 LAVA SPREAD
  // if (type == 11) {
  //   var EnergyUse_20 = 30;
  //   cid.gun_on.push(
  //     new shots(
  //       start_posx + cid.body.lef_side_wign_shot,
  //       start_posy,
  //       7,
  //       0,
  //       10,
  //       10,
  //       0,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150
  //     ),
  //     new shots(
  //       start_posx + cid.body.right_side_wign_shot,
  //       start_posy,
  //       7,
  //       0,
  //       10,
  //       10,
  //       0,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150
  //     ),
  //     new shots(
  //       start_posx,
  //       start_posy,
  //       7,
  //       0,
  //       10,
  //       10,
  //       0,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150
  //     ),
  //     new shots(
  //       start_posx,
  //       start_posy,
  //       7,
  //       3,
  //       10,
  //       10,
  //       0,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150
  //     ),
  //     new shots(
  //       start_posx,
  //       start_posy,
  //       7,
  //       -3,
  //       10,
  //       10,
  //       0,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150
  //     )
  //   );

  //   cid.body.energy -= EnergyUse_20;
  // }
  // // END OF SHOTS

  // //POWER BOMB
  // if (cid.body.powerBombEnergy >= 1000 && keys.powerbombactivation.pressed) {
  //   cid.controller_movements.keyboard = false;
  //   var damage_1 = 1;
  //   cid.gun_on.push(
  //     new shots(
  //       start_posx - 150,
  //       start_posy - 230,
  //       7,
  //       0,
  //       10,
  //       10,
  //       0,
  //       100,
  //       300,
  //       1,
  //       -50,
  //       -150,
  //       true,
  //       1
  //     )
  //   );

  //   cid.body.powerBombEnergy = 0;

  //   cid.controller_movements.keyboard = true;
  // }
}
