class shots {
    constructor(){
    this.position = {
        x : 0,
        y : 0
    }
    this.velocity = {
        x : 10,
        y : 10
    }
    this.damage = 0;
    this.width = 70;
    this.height = 70;
    // here we add all guns images sprites
    this.shotImages = {
    1 : "assets/shots/bean_1.png",
    2 : "assets/shots/bean_2.png"
    }

    }


makeGuns(select_shot, damage, direction, speed){
if(select_shot && damage && direction && speed ){
    this.velocity.x = speed;
    this.velocity.y = speed;
    this.shotDirection(direction);
    ctx.fillStyle = "red";
    
    
    const shotimage = new Image()
    shotimage.src = this.shotImages[select_shot];
     
    ctx.drawImage(shotimage,this.position.x, this.position.y ,this.width, this.height);
    if(this.position.y <  - this.height){
    this.position.y = player.position.y;
    this.position.x =  15 + player.position.x;
            }
    
    }
}
shotDirection(direction){
if(direction == 1){
  this.position.y -= this.velocity.y;  
}
}


    updateShot(){

    }
    }
