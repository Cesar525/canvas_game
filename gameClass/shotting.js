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
if(collision.objectCollisionPLayerTOuchingMonster(shot, monster)){
    console.log("HIT MONSTERS"); 
    }

    
    }
    updateShot(){
        this.drawShot();
    }
    }
