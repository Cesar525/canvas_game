class Background{
    constructor(){
    this.position = {
        x : 0,
        y : 0
    },
    this.velocity = {
        x : 10,
        y : 10
    }
    this.countingBackground  = 0;
    }
    drawBackground(){
        const background_image = new Image();
        background_image.src = "assets/background.png";
        this.position.y += this.velocity.y;

        ctx.drawImage(background_image, this.position.x, this.position.y, c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 1), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 2), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 3), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 4), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 5), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 6), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 7), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 8), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 9), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 10), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 11), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 12), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 13), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 14), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 15), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 16), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 17), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 18), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 19), c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - (c.height * 20), c.width, c.height);

        }
        
        update_backg(){
            this.drawBackground()
        }

}