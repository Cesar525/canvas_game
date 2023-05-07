class shots{
    constructor(){
    this.position = {
        x :  -100,
        y : -100
    }
    this.velocity = {
        x : 20,
        y : 20
    }
    this.m_damage;
    this.width = 50;
    this.height = 100;
    this.clearRect = false;

    this.collition = {
        shot_collided : false,
        collision_posx : NaN,
        collision_posy : NaN

    }
    this.random = true;
    this.randomNum;
    this.damagesHit;


this.gameFrame = 0;
this.staggerFrame = 10

    this.collision_posx;
    this.collision_posy;
    this.counter = 0;
    // here we add all guns images sprites
    this.shotImages = {
    1 : "assets/shots/bean_1.png",
    2 : "assets/shots/bean_2.png",
    3 : "assets/shots/bean_3.png",
    4 : "assets/shots/bean_4.png",
    5 : "assets/shots/bean_5.png",
    6 : "assets/shots/bean_6.png",
    7 : "assets/shots/bean_7.png",
    8 : "assets/shots/bean_8.png",
    9 : "assets/shots/bean_9.png",
    10 : "assets/shots/bean_10.png"
    }
    }

bullethitmonsters(){return this.collition.shot_collided;}

shotSelection(player,select_shot, damage, speed){
if(select_shot && damage && speed ){
   if(!this.clearRect){
    this.velocity.x = speed;
    this.velocity.y = speed;
    this.shotDirectionUp();
    const shotimage = new Image()
    shotimage.src = this.shotImages[select_shot];
    ctx.drawImage(shotimage, this.position.x, this.position.y ,this.width, this.height);
this.m_damage = damage

    //shot starting point
    if(this.position.y <  - this.height){
    this.position.y = player.position.y;
    this.position.x =  25 + player.position.x;
            }
            
        }
        
    }

}

randomHit(from, to){
    this.randomNum = Math.floor(Math.random() * to) + from   
    return this.randomNum;
  }

gunTypes(player,selectingGun){
    switch(selectingGun){
case 1 : 
var gun_damage = 5;
var totalDamage = player.body.m_damage + gun_damage;
this.damages = this.randomHit(1, totalDamage);
this.shotSelection(player,1,this.damages, player.body.m_gun_speed);
break;
    }
}

setDamageHit(damagehit){
    this.damagesHit = damagehit;
}
getDamageHit(){return this.damagesHit;}
shotDirectionUp(direction){
  this.position.y -= this.velocity.y;  
}

setCollisionPosition(posx, posy){
    this.collition.collision_posx = posx;
    this.collition.collision_posy = posy;

}

shotDamageRandomizer(damage_set){

}

clearCollisionShot(){ 
    this.collition.collision_posx = NaN;
    this.collition.collision_posy = NaN;

}



updateShot(){
    // ctx.fillStyle = "white";
    // ctx.fillRect(this.collition.collision_posx, this.collition.collision_posy, 50, 50);
    }
}