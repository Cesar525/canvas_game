class PowerUps{
constructor(){
    this.position = {
        x : NaN,
        y : NaN 
    }
    this.power = {
     amount_adding : NaN,
        m_sprite : NaN
    }
    this.velocity = {
        y : 10,
        x : 10
    }
    this.collision ={
        collision_posX : NaN,
        collision_posY : NaN,
        collision_with_player : NaN

    }
    this.look = NaN;
    this.width = 100;
    this.height = 100;
    this.clearItem = false;
    this.powerUp_taken = false;
    this.display_orNot;
    this.display_item = NaN;
}
setPos(posx, posy){
    this.position.x = posx;
    this .position.y = posy;
}
getPosX(){return this.position.x;};
getPosY(){return this.position.y;};
dropHealth(posx, posy, dead_orNot){
this.position.x = posx;
this.position.y = posy;
this.display_orNot = dead_orNot;
}


health(player){
var got_it = false;

    if(this.display_orNot){ 
        ctx.fillStyle = "pink";
            ctx.fillRect(this.position.x, this.position.y, this.width , this.height)
        }
      if(this.collision.collision_with_player){
        var health_points = 100;
        console.log("health Taken <EFFECT HERE>");
        this.collision.collision_posX = this.position.x;
        this.collision.collision_posY = this.position.y;
        this.powerUp_taken = true;
        player.body.health += health_points;
        this.display_orNot = false;
        this.clearItems();
      }
   
}

clearItems(){
        this.clearItem = true;
        this.display_orNot = false;
        this.powerUp_taken = false;

        
}


PowerUpcollisionWithPlayer(player){
    if(collisionTouch(this, player)){
console.log("its coliding");
this.collision.collision_with_player = true;
    }
}

updatePowerUps(player){
this.PowerUpcollisionWithPlayer(player)
this.health(player);
this.clearItems();

}

}