class Background extends Animation{
    constructor(posx, posy, width, height, speed){
        super();
    this.position = {
        x : posx,
        y : posy
    },
    this.velocity = {
        x : 500,
        y : 500
    }
    this.countingBackground  = 0;
    this.gameFramee = 0;
    this.width = width;
    this.height = height;
    this.posx_set = posx;
    this.posy_set = posy;
    }

getVelocity(){
    return this.velocity.y;
}
    
    drawStars(speed, type_stars){
        this.velocity.x = speed;
        this.velocity.y = speed;
        const background_image = new Image()
        switch(type_stars){
case 1 : 
background_image.src = "assets/backgrounds/nebula/stars.png";
break;
case 2 : 
background_image.src = "assets/backgrounds/nebula/starsTwo.png";
break;
        }
        this.position.y += this.velocity.y;
        ctx.drawImage(background_image, this.position.x, this.position.y, c.width, c.height);
        ctx.drawImage(background_image, this.position.x, this.position.y - c.height, c.width, c.height);
  if(this.position.y == c.height){
    this.position.y = 0;
  }
        }
        randomSpawnPositionX(from, to){
            this.randomNum = Math.floor(Math.random() * to) + from   
            return this.randomNum;
          }

asteroids(speed){
    this.velocity.x = speed;
    this.velocity.y = speed;
    ctx.globalAlpha = 0.5
    this.spriteProccessor(asteroid_one, 2, this.position.x, this.position.y += this.velocity.y, this.width, this.height);
    ctx.globalAlpha = 1
    if(this.position.y == c.height){
        this.position.x = this.randomSpawnPositionX(0, c.width)
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
            this.position.y = this.posy_set;
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
        this.position.y = this.posy_set;
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
            this.position.y = this.posy_set;
            }
        }
            }

            drawPlanet(speed, pick_planet){
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
                    case 3 : 
                    background_image.src = "assets/planets/planet14R.png";
                    break;
                }
                this.position.y += speed;
        
                ctx.drawImage(background_image, this.position.x, this.position.y, this.width, this.height);
                if(this.position.y > c.height){
                this.position.x = this.randomSpawnPositionX(0, c.width)
                this.position.y = this.posy_set;
                }
                }
        
        update_backg(){
            this.gameFrame ++;
        
        }

}