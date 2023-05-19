class Background{
    constructor(){
    this.position = {
        x : 0,
        y : 0
    },
    this.velocity = {
        x : 20,
        y : 20
    }
    this.countingBackground  = 0;
    }

getVelocity(){
    return this.velocity.y;
}
    
    drawBackground(speed){
        this.velocity.x = speed;
        this.velocity.y = speed;
        const background_image = new Image();
        background_image.src = "assets/background.png";
        this.position.y += this.velocity.y;

        ctx.drawImage(background_image, this.position.x, this.position.y, c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - c.height, c.width, c.height);
  if(this.position.y == c.height){
    this.position.y = 0;
  }
        }
        
        update_backg(){
            this.drawBackground(this.velocity.y);
        }

}