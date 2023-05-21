class PowerUps{
constructor(posx, posy, health){
    this.position = {
        x : 100,
        y : 100 
    }
    this.power = {
        m_health : NaN,
        m_speed : NaN,
        m_money : NaN,
        m_shield_type : NaN,
        m_weapon_type : NaN,
        m_massive_nuclear_type : NaN
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
}



health(health_points, posx, posy, collision, player){
    
    if(!this.clearItem){ 
            //this.position.x = posx;
            // this.position.y = posy;
            ctx.fillStyle = "pink";
            ctx.fillRect(posx, posy += this.velocity.y, this.width , this.height)
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

clearItems(){
    this.collision.collision_with_player = true;
    this.clearItem = true;
    this.position.x = NaN;
    this.position.y = NaN;
}



updatePowerUps(){

}

}