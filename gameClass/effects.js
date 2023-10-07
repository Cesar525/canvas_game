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
}


}


healShowAnimation(){
        
                ctx.fillStyle = this.textColor;
                ctx.strokeStyle = "black"
                ctx.font = "90px anton";
                ctx.fillText( this.damage, this.position.x + 100 , this.position.y + 200);
                ctx.strokeText(this.damage, this.position.x + 100 , this.position.y + 200);                       
  
}

    updateEffects(){
        this.effects();
        this.healShowAnimation();
    }

}