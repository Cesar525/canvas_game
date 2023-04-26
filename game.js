var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 1000
c.height = 900
const gravity = 20




const backg = new Background();
const shield = new Shields();
const death = new Death();
//game
const playerDeathAnimation = new Animation();
const collision = new Collision();
const player = new Player(7);
const animation = new Animation();
const animation2 = new Animation();
const animation3 = new Animation();
const thruster = new Thruster();
const shot = new shots();
const monst = new Monsters();

//Monsters
const monsters = 
[
new Monsters(1, 100, 100 , 100, "invaderslevel1", 10, "orange", "none"),
new Monsters( 2, 300, 100, 100, "invaderlevel2", 10, "green", "none"),
new Monsters( 3, 500, 100, 100, "invaderlevel3", 10, "blue", "none"),
new Monsters( 4, 700, 100, 100, "BOSS", 10, "red", "none")
];




function buffer(){
    requestAnimationFrame(buffer)
    //GAME
    ctx.clearRect(0,0,c.width, c.height)
 
    backg.update_backg(); // background image
     //adding objects
    player.update();
    shot.updateShot(); // shotting
    //animation.updateAnimation();
    var explosion;
    var posx;
    var posy;
    var animationTwo;
var animationThree;
//collison monsters and shots 

for(let i = 0 ; i < monsters.length; i ++){
    monsters[i].updateMonster();
    
    if(collision.collisionTouch(shot, monsters[i])){
        monsters[i].setMonsterHealth(1); // set up the hit depend on the shot
        console.log(monsters[i].body.m_name + " ramina life =  " + monsters[i].getMonsterHealth());
        explosion = true;
        monsters[i].collision_bool = true;
       

    }else{
        monsters[i].collision_bool = false;
    }

   // bullet disapear collision
    shot.counter += 1;
    if(shot.counter > 5 && shot.clearRect){
        //console.log("reset");
        shot.clearRect = false;
     
   
    }
    //player collision
    if(collision.collisionTouch(player, monsters[i])){
        player.body.health -= 1; 
        console.log("you have been damage your current life is  = " + player.body.health);
        
    }
    
    posx = monsters[i].position.x;
    posy = monsters[i].position.y;
   
    //console.log(exp);
if(collision.collisionTouch(shot, monsters[i])){
shot.clearRect = true;
//console.log("Bullet banished..");
shot.position.x = -50;
shot.position.y = - 50;
}  



}


// collison ends 




 animation.explosionEffect(5, posx - 85, posy - 85, explosion);
if(animation.getAnimationStatus() && explosion){

 animation2.reset();
animationTwo = true;
 }
  animation2.explosionEffect(5, posx - 85, posy - 85, animationTwo);




// 

// if(animationTwo){
//     console.log("ON")
// }


// if(animation2.getAnimationStatus()){
//     animation3.explosionEffect(5, posx, posy - 40, explosion);
// }
    // }
    //if(animation2.spritePage("assets/explosions/explosion_5.png", 100 , 100, 2048, 1280, 8, 5, 256, 256, 1, explosion)){}

 
}
buffer();


