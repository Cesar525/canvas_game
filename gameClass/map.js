class Background_Objects extends Animation{
    constructor(posx, posy, width, height, speed, seconds, minutes){
        super();
    this.position = {
        x : posx,
        y : posy
    },
    this.velocity = {
        x : 0,
        y : 0
    }
    this.countingBackground  = 0;
    this.gameFramee = 0;
    this.width = width;
    this.height = height;
    this.posx_set = posx;
    this.posy_set = posy;
    this.timerSettings = {
    timerTicking : 0,
    seconds : 0,
    minutes : 0,
    hours : 0
    }

    if(seconds){
    this.showObjectsAtSeconds = seconds;
    }else{
        this.showObjectsAtSeconds = NaN;
    }
    if(minutes){
this.showobjectsAtMinutes = minutes
    }else{
         this.showObjectsAtMinutes = NaN;
    }
this.dispaear_object = false;

}
getMinutes(){ return this.timerSettings.minutes;};
getSeconds(){return this.timerSettings.seconds;};

getDispaearObject(){return this.dispaear_object;}
setDisapearObject(set){ this.dispaear_object = set}
getVelocity(){ return this.velocity.y;}
    
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


        drawWater(speed, type_stars){
            this.velocity.x = speed;
            this.velocity.y = speed;
            const background_image = new Image()
            switch(type_stars){
    case 1 : 
    background_image.src = "assets/backgrounds/water.png";
    break;
    case 2 : 
    background_image.src = "assets/backgrounds/water.png";
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
    ctx.globalAlpha = 1
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

bigAsteroidsOnFire(){
      // player_shield_effect_one[0].drawShield(players[0]);
//WORKIG ON
this.position.x -= 3;
this.position.y += 20;

  ctx.rotate((45 * Math.PI) / 180);
  this.spritePage("assets/firesprites/PNG/1.png", this.position.x , this.position.y, 2048, 2048, 8, 4, 256, 512, 1, true, 1000, 1900)
  ctx.setTransform(1, 0, 0, 1, 0, 0); 
  this.decreasePos(1)
   // animation_TESTING.explosionEffect(3, 500 + 100, 500 + 100, true, 4)
 
 
}

timer(){
   

this.timerSettings.timerTicking ++;

//adding seconds
if(this.timerSettings.timerTicking == 100){
    this.timerSettings.seconds += 1;
    this.timerSettings.timerTicking = 0;
}
//adding minute
if(this.timerSettings.seconds == 60){
    this.timerSettings.minutes += 1;
    this.timerSettings.seconds = 0;
}
//adding hours
if(this.timerSettings.minutes == 60){
    this.timerSettings.hours += 1
    this.timerSettings.minutes = 0;
}
//Show timer
ctx_ui_status.fillStyle = "white";
ctx_ui_status.font = "70px Roboto Mono"
ctx_ui_status.fillText(this.timerSettings.hours + ":" + this.timerSettings.minutes + ":" + this.timerSettings.seconds, c_ui_status.width - 250 , 70, 200, 100)

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
        
        updateBackground(){
            this.gameFrame ++;
        this.timer();








        }

}