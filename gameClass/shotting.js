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
    this.random = false;
    
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

gunTypes(player,selectingGun){
    
    switch(selectingGun){
case 1 : 
let damage = randomHit(11, 20, this.bullethitmonsters());
this.shotSelection(player,1,damage, 20);
break;
    }
}


shotDirectionUp(direction){
  this.position.y -= this.velocity.y;  
}

getCollisionPosition(posx, posy){
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