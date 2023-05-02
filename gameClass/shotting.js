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
    this.m_damage = 0;
    this.width = 50;
    this.height = 100;
    this.clearRect = false;
    this.collision_bool = true;
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

shotSelection(player,select_shot, damage, speed){
if(select_shot && damage && speed ){
   if(!this.clearRect){
    this.velocity.x = speed;
    this.velocity.y = speed;
    this.shotDirection();
    const shotimage = new Image()
    shotimage.src = this.shotImages[select_shot];
    ctx.fillStyle = "borderColor";
    ctx.fillStyle = 'white';
    //ctx.fillRect( this.position.x - 1, this.position.y - 1 ,this.width + 2, this.height + 2);
    ctx.fillStyle = 'black';
    //ctx.fillRect( this.position.x, this.position.y ,this.width , this.height);
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
shotDirection(direction){
  this.position.y -= this.velocity.y;  
}

getCollisionPosition(posx, posy){
    this.collision_posx = posx;
    this.collision_posy = posy;

}

clearCollisionShot(){
    this.collision_posx = NaN;
    this.collision_posy = NaN;
}


updateShot(){

    ctx.fillStyle = "red";
    ctx.fillRect(this.collision_posx, this.collision_posy, this.width, this.height);


}
    }
