class Effects extends Animation {
constructor(effect_type, posx, posy, width, height, damage, color){
super();
this.position = {
    x : posx,
    y : posy
}
this.size = {
    width : width - 200,
    height : height - 200
}
this.effect_selected = effect_type;
this.destroy_object = false;
this.damage = damage;
this.textColor = color;

}

setDestoryObject(set){ this.destroy_object = set;};
getDestroyObject(){return this.destroy_object;};
deleteOnceShows(){
    if(!this.getAnimationStatus()){
        this.setDestoryObject(true);
    }
}

effects(){
switch(this.effect_selected){
case "HEALTH_TAKEN_EFFECT" : 
this.spritePage("assets/capture_effects/capture_health/spritesheet.png", this.position.x , this.position.y, 11264, 512, 22, 1, 512, 512, 2, true, this.size.width, this.size.height);
this.deleteOnceShows();
break;
case "ENERGY_TAKEN_EFFECT" : 
this.spritePage("assets/capture_effects/capture_energy/spritesheet.png", this.position.x, this.position.y, 11264, 512, 22, 1, 512, 512, 2, true, this.size.width, this.size.height);
this.deleteOnceShows();
break;
case "MONEY_TAKEN_EFFECT" : 
this.spritePage("assets/capture_effects/capture_money/spritesheet.png", this.position.x, this.position.y, 11264, 512, 22, 1, 512, 512, 2, true, this.size.width, this.size.height);
this.deleteOnceShows();
break;
case "BLUE_SHIELD_TAKEN_EFFECT" : 
this.spritePage("assets/shields/shield_arm_top.png", this.position.x, this.position.y, 960, 768, 5, 4, 192, 192, 3, true, this.size.width, this.size.height);
this.deleteOnceShows();
break;
case "RED_SHIELD_TAKEN_EFFECT" : 
this.spritePage("assets/shields/redshield_arm_top.png", this.position.x, this.position.y, 960, 768, 5, 4, 192, 192, 3, true, this.size.width, this.size.height);
this.deleteOnceShows();
break;
}


}


healShowAnimation(){        
    ctx.fillStyle = this.textColor;
    ctx.strokeStyle = "black"
    ctx.font = "90px anton";
    ctx.fillText( this.damage, this.position.x + 100 , this.position.y + 200);
    ctx.strokeText(this.damage, this.position.x + 100 , this.position.y + 200);                       
}

followingPlayer(pos_x, pos_y){
    this.position.x = pos_x - 150;
    this.position.y = pos_y - 150;
}

getTargetName(){ this.getPlayerName;}
    updateEffects(){
        this.effects();
        this.healShowAnimation();

    }

}