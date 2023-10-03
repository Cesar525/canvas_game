class Effects extends Animation {
constructor(effect_type, posx, posy, width, height){
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


}

setDestoryObject(set){ this.destroy_object = set;};
getDestroyObject(){return this.destroy_object;};
deleteOnceShows(){
    // if(!this.getAnimationStatus()){
    //     this.setDestoryObject(true);
    // }
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
///SET ALL EXPLOSION HERE ALSO
case "EXPLOSION_ONE_EFFECT" : 
this.explosionEffect(1, this.position.x , this.position.y, true, 2, this.size.width, this.size.height)
this.deleteOnceShows();
break;


}


}

    updateEffects(){
    
        this.effects();
console.log("Hello This are the effects");
    }

}