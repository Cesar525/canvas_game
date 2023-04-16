class Collision{

constructor(){


}


collisionTouch(obj1, obj2){
    var player_posx1 = obj1.position.x;
    var player_posx2 = obj1.position.x + obj1.width;
    var playerposty1 = obj1.position.y;
    var playerposty2 = obj1.position.y + obj1.height;
    var monster_posx1 = obj2.position.x;
    var monster_posx2 = obj2.position.x + obj2.width; 
    var monsterposty1 = obj2.position.y;
    var monsterposty2 = obj2.position.y + obj2.width;
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