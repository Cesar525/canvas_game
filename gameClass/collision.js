class Collision{

constructor(){


}


objectCollisionPLayerTOuchingMonster(objectone, objecttwo){
    var player_posx1 = objectone.position.x;
    var player_posx2 = objectone.position.x + objectone.width;
    var monster_posx1 = objecttwo.position.x;
    var monster_posx2 = objecttwo.position.x + objecttwo.width; 
    var playerposty1 = objectone.position.y;
    var playerposty2 = objectone.position.y + objectone.height;
    var monsterposty1 = objecttwo.position.y;
    var monsterposty2 = objecttwo.position.y + objecttwo.width;
    var touch_x = false;
    var touch_y = false;
    if(player_posx1 <= monster_posx2 && player_posx1 >= monster_posx1 || player_posx2 <= monster_posx2 && player_posx2 >= monster_posx1){
        touch_x = true;
    }
    if(playerposty1 <= monsterposty2 && playerposty1 >= monsterposty1 || playerposty2 <= monsterposty2 && playerposty2 >= monsterposty1){
        touch_y = true;
    }

    if(touch_x && touch_y){
      // console.log("TOUCHING AHHHHHHHHHHHHHHHHHHHHH");
        return true;
    }else{
        return false;
    }

}


}