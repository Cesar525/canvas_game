
function Gunss(gun_type){
    //Gun 1
if(gun_type == 1){
    const gun_on = [
        new shots(0, 0, 1, 1, 6, 10, 0, 2)
    ];

    const explosionn = [
        new Animation(),
      ];

    const explosionn2 = [
        new Animation(),
      ];
}


//Gun 10
if(gun_type == 10){
    var gun_damage = 10;
    const gun_on = [
        new shots(-60, 0, 3, 0, 6, gun_damage, 0, 2), 
        new shots(60, 0, 3, 0, 6, gun_damage, 0, 2), 
        new shots(0, 0, 4, 0, 6, gun_damage, 0, 2),
        new shots(0, 0, 10, 3, 6, gun_damage, 0, 2),
        new shots(0, 0, 10, -3, 6, gun_damage, 0, 2),
    ];

    const explosionn = [new Animation(),new Animation(),new Animation(), new Animation(), new Animation()];
    const explosionn2 = [new Animation(),new Animation(),new Animation(), new Animation(), new Animation()];
}
}