class shots {
    constructor(){
    this.position = {
        x : 600,
        y : 450
    }
    this.velocity = {
        x : 40,
        y : 40
    }
    this.damage = 20;
    this.shot_width = 30;
    this.shot_height = 30;
    }
    drawShot(){
     
ctx.fillStyle = "red";
this.position.y -= this.velocity.y;
ctx.fillRect(this.position.x, this.position.y ,this.shot_width, this.shot_height);
if(this.position.y <  - this.shot_height){
this.position.y = player.position.y;
this.position.x =  35 + player.position.x;
        }
    }
    updateShot(){
    this.drawShot();
    }
    }
