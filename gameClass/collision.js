class Collision{

constructor(){


}

objectCollisionPLayerTOuchingMonster(){
    var player_posx1 = player.position.x;
    var player_posx2 = player.position.x + player.width;
    var monster_posx1 = monster.position.x;
    var monster_posx2 = monster.position.x + monster.width; 
    var playerposty1 = player.position.y;
    var playerposty2 = player.position.y + player.height;
    var monsterposty1 = monster.position.y;
    var monsterposty2 = monster.position.y + monster.width;
    var touch_x = false;
    var touch_y = false;
    if(player_posx1 <= monster_posx2 && player_posx1 >= monster_posx1 || player_posx2 <= monster_posx2 && player_posx2 >= monster_posx1){
        touch_x = true;
    }
    if(playerposty1 <= monsterposty2 && playerposty1 >= monsterposty1 || playerposty2 <= monsterposty2 && playerposty2 >= monsterposty1){
        touch_y = true;
    }
    if(touch_x && touch_y){
        console.log("touching");
        return true;
    }else{
        return false;
    }

}



}