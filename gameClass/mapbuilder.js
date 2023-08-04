class Mapbuilder{
constructor(){

this.map_one = [
    new Background_Objects (100, -900, 500, 500), 
    new Background_Objects (200, -900, 200, 200), 
    new Background_Objects (300, -900, 200, 200), 
    new Background_Objects (0, 0), // stars
    new Background_Objects (400, -900, 100, 100),
    new Background_Objects (900, -900, 900, 900),
    new Background_Objects (0, 0), // stars
    new Background_Objects (0, -900, 500, 500),// plannet
    new Background_Objects (-100, 100, 100, 100),
    new Background_Objects (-100, -100, 100, 100),
    new Background_Objects (-100, -100, 100, 100),
    new Background_Objects (-100, -100, 100, 100),
    new Background_Objects (-100, -100, 100, 100),
    new Background_Objects (-100, -100, 100, 100),
    new Background_Objects (-100, -100, 100, 100),
    new Background_Objects (-100, -100, 100, 100),
    new Background_Objects (-100, -100, 100, 100),
    new Background_Objects (-100, -100, 100, 100),
    new Background_Objects (0, 0)
]

this.gameFrame = 0;
this.gamestagged = 0;
this.randomNum_map;
}

randomSpawnPosition(from, to){
    this.randomNum_map = Math.floor(Math.random() * to) + from   
    return this.randomNum_map;
  }


//MAP ONE
mapOneLoad(){
this.map_one[0].timer();
var map_minutes = this.map_one[0].getMinutes();
var map_seconds = this.map_one[0].getSeconds()
this.map_one[6].drawStars(2, 1); // background image
if(this.gameFrame > 400){
if(this.gameFrame > 0){
this.map_one[7].drawPlanet(2, 3);
this.map_one[5].drawPlanet(1, 2);
this.map_one[4].drawPlanet(1, 1);
}
if(this.gameFrame > 800){
this.map_one[0].drawNebulas(5);
this.map_one[1].drawNebulasBlue(7);
this.map_one[2].drawNebulaMulti(7);
}
if(this.gameFrame > 600){
this.map_one[8].asteroids(10);
this.map_one[9].asteroids(10);
this.map_one[10].asteroids(10);
this.map_one[11].asteroids(15);
this.map_one[12].asteroids(5);
this.map_one[13].asteroids(3);
this.map_one[14].asteroids(20);
this.map_one[15].asteroids(3);
}
}
this.map_one[3].drawStars(10, 2); // background image

//pushing monsters in to map one.
if(this.gameFrame == 300){
    monsters.push(
        new Monsters(2, asteroid_two,  this.randomSpawnPosition(100, c.width - 100), 200 , 100, "Asteroid", 2, "orange", "straightDown", 200, 200, 7, 10),
        new Monsters(2, asteroid_two,  this.randomSpawnPosition(100, c.width - 100), 200 , 100, "Asteroid", 2, "orange", "straightDown", 200, 200, 7, 10),

        
    )
    for(var m = 0; m < monsters.length; m++){
        sprite_animation.push(new Animation());
        explosion_onDeath_animation.push(new Animation());
        }
}



}

updateMap(mapSelected){
this.gameFrame++
ctx.font = "90px Roboto Mono";
ctx.fillStyle = "white";
ctx.fillText(this.gameFrame, c.width - 200, 100);

 //SHOW FRAMES




if(mapSelected == 1){ this.mapOneLoad(); }

}


}