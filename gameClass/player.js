class Player{
    constructor(){
    this.position ={
        x:100,
        y:100
    },
    this.velocity ={
        x:20,
        y:20  
    },
    this.body = {
        health : 100,
    }
    this.width = 100
    this.height = 100
    }
    draw(){
        //ctx.fillStyle = "red";
        //ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        const image = new Image();
        image.src = "assets/spaceship/spaceshipone.png";
        ctx.drawImage(image, this.position.x, this.position.y , player.width, player.height);
    }
    setPlayerVelocity(velocity){
        this.velocity.x = velocity;
        this.velocity.y = velocity;
    }
    update(){
    this.draw()
    }
    }