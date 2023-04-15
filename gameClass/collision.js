class Collision{

constructor(){


}


collisionTouch(posx, posy, p1width, p1height, p2posx, p2posy, p2width, p2height){
    var player_posx1 = posx;
    var player_posx2 = posx + p1width;
    var playerposty1 = posy;
    var playerposty2 = posy + p1height;
    var monster_posx1 = p2posx;
    var monster_posx2 = p2posx + p2width; 
    var monsterposty1 = p2posy;
    var monsterposty2 = p2posy + p2height;
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