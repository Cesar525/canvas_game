class shots {
    constructor(){
    this.position = {
        x : 0,
        y : 0
    }
    this.velocity = {
        x : 40,
        y : 40
    }
    this.damage = 20;
    this.shot_width = 70;
    this.shot_height = 70;
    }
    drawShot(){
     
ctx.fillStyle = "red";
this.position.y -= this.velocity.y;

const shotimage = new Image();
shotimage.src = "assets/shots/beanone.png";

ctx.drawImage(shotimage,this.position.x, this.position.y ,this.shot_width, this.shot_height);
if(this.position.y <  - this.shot_height){
this.position.y = player.position.y;
this.position.x =  15 + player.position.x;
        }
    }
    updateShot(){
    this.drawShot();
    }
    }
