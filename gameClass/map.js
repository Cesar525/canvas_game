class Background extends Monsters{
    constructor(posx, posy, width, height, speed){
        super();
    this.position = {
        x : 0,
        y : 0
    },
    this.velocity = {
        x : 0,
        y : 0
    }
    this.countingBackground  = 0;
    this.gameFramee = 0;
    this.width = width;
    this.height = height;
    }

getVelocity(){
    return this.velocity.y;
}
    
    drawStars(speed){
        this.velocity.x = speed;
        this.velocity.y = speed;
        const background_image = new Image();
        background_image.src = "assets/backgrounds/nebula/Stars.png";
        this.position.y += this.velocity.y;
console.log("reading it")
        ctx.drawImage(background_image, this.position.x, this.position.y, c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - c.height, c.width, c.height);
  if(this.position.y == c.height){
    this.position.y = 0;
  }
        }


        drawNebulas(speed){
            this.velocity.x = speed;
            this.velocity.y = speed;
            this.gameFramee++
          
            if(this.gameFramee == 2){
                this.position.x = this.randomSpawnPositionX(0, c.width)
            }
            const background_image = new Image();
            background_image.src = "assets/backgrounds/nebula/nebula1.png";
            this.position.y += speed;
    
            ctx.drawImage(background_image, this.position.x, this.position.y, this.width, this.height);
           if(this.position.y > c.height){
            this.position.x = this.randomSpawnPositionX(0, c.width)
            this.position.y = 0;
           }
            }
    drawNebulasBlue(speed){
        this.velocity.x = speed;
        this.velocity.y = speed;
        this.gameFramee++
        if(this.gameFramee == 2){
            this.position.x = this.randomSpawnPositionX(0, c.width)
        }
        const background_image = new Image();
        background_image.src = "assets/backgrounds/nebula/Nebula2.png";
        this.position.y += speed;

        ctx.drawImage(background_image, this.position.x, this.position.y, this.width, this.height);
        if(this.position.y > c.height){
        this.position.x = this.randomSpawnPositionX(0, c.width)
        this.position.y = 0;
        }
        }

        drawNebulaMulti(speed){
            this.gameFramee++

            if(this.gameFramee > 200){
            this.velocity.x = speed;
            this.velocity.y = speed;
            if(this.gameFramee == 2){
                this.position.x = this.randomSpawnPositionX(0, c.width)
            }
            const background_image = new Image();
            background_image.src = "assets/backgrounds/nebula/Nebula3.png";
            this.position.y += speed;
    
            ctx.drawImage(background_image, this.position.x, this.position.y, this.width, this.height);
            if(this.position.y > c.height){
            this.position.x = this.randomSpawnPositionX(0, c.width - 500)
            this.position.y = 0;
            }
        }
            }

            drawPlanetOne(speed, pick_planet){
                this.velocity.x = speed;
                this.velocity.y = speed;
                this.gameFramee++
                if(this.gameFramee == 2){
                    this.position.x = this.randomSpawnPositionX(0, c.width)
                }
                const background_image = new Image();
                switch(pick_planet){
                    case 1 : 
                    background_image.src = "assets/planets/planet04.png";
                    break;
                    case 2 : 
                    background_image.src = "assets/planets/planet02.png";
                    break;
                }
                this.position.y += speed;
        
                ctx.drawImage(background_image, this.position.x, this.position.y, this.width, this.height);
                if(this.position.y > c.height){
                this.position.x = this.randomSpawnPositionX(0, c.width)
                this.position.y = 0;
                }
                }
        
        update_backg(){
            this.gameFrame ++;
        
        }

}