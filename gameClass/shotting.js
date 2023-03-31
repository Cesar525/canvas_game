class shots {
    constructor(){
    this.position = {
        x : 0,
        y : 0
    }
    this.velocity = {
        x : 100,
        y : 100
    }
    this.damage = 20;
    this.width = 70;
    this.height = 70;
    }
    drawShot(){
     
ctx.fillStyle = "red";
this.position.y -= this.velocity.y;

const shotimage = new Image();
shotimage.src = "assets/shots/beanone.png";

ctx.drawImage(shotimage,this.position.x, this.position.y ,this.width, this.height);
if(this.position.y <  - this.height){
this.position.y = player.position.y;
this.position.x =  15 + player.position.x;
        }
    }
    updateShot(){
        if(!collision.objectCollisionPLayerTOuchingMonster(shot, monster)){
        }
        this.drawShot();

    }
    }
