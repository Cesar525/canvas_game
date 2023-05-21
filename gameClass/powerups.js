class PowerUps{
constructor(name, sprite_path, adding ){
    this.position = {
        x : NaN,
        y : NaN 
    }
    this.power = {
     amount_adding : adding,
        m_sprite : sprite_path
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
    this.display_orNot = false;
    this.display = false;
}



health(health_points, posx, posy, collision, player, display){


this.display_orNot = display;
if(this.display_orNot){
    
    if(!this.clearItem){ 
        this.position.x = posx;
        this.position.y = posy;
        ctx.fillStyle = "pink";
            ctx.fillRect(this.position.x, this.position.y += 10, this.width , this.height)
        }
    if(collision){
        console.log("health Taken");
        this.collision.collision_posX = this.position.x;
        this.collision.collision_posY = this.position.y;
        this.powerUp_taken = true;
        this.clearItems();
        player.body.health += health_points;
    } 
    }
}

clearItems(){
    this.collision.collision_with_player = true;
    this.clearItem = true;
    this.position.x = NaN;
    this.position.y = NaN;
    this.display_orNot = false;
}


updatePowerUps(){

}

}