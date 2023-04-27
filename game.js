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

const animation3 = new Animation();
const thruster = new Thruster();
const shot = new shots();
const monst = new Monsters();

//Monsters
const invaderOne = new Monsters(1, 300, 100 , 100, "MONSTER 1", 10, "orange", "none")
const invaderTwo = new Monsters( 2, 300, 100, 100, "invaderlevel2", 10, "green", "none")
const invaderThree = new Monsters( 3, 500, 100, 100, "invaderlevel3", 10, "blue", "none")
const boss = new Monsters( 4, 700, 100, 100, "BOSS", 10, "red", "none")



    const animation = new Animation();
    const animation2 = new Animation();

function monsterHit(col, posx_, posy_){
    var animationTwo;
    animation.explosionEffect(5,  posx_ - 85, posy_ - 85, col);
    if(animation.getAnimationStatus() && col){
     animation2.reset();
    animationTwo = true;
     }
      animation2.explosionEffect(5, posx_ - 85, posy_ - 85, animationTwo);
      
}

function collisionMonster(monsters){
    
    if(collision.collisionTouch(shot, monsters)){
        monsters.setMonsterHealth(shot.m_damage); // set up the hit depend on the shot
        console.log(monsters.body.m_name + " ramina life =  " + monsters.getMonsterHealth());
       monsters.collision_bool = true;
    }else{
        monsters.collision_bool = false;
        monsters.collision_posX;
       monsters.collision_posY;
    }

   // bullet disapear collision
    shot.counter += 1;
    if(shot.counter > 5 && shot.clearRect){
        //console.log("reset");
        shot.clearRect = false;
     
   
    }
    //player collision
    if(collision.collisionTouch(player, monsters)){
        player.body.health -= 1; 
        console.log("you have been damage your current life is  = " + player.body.health);
        
    }
    
    //console.log(exp);
if(collision.collisionTouch(shot, monsters)){
shot.clearRect = true;
//console.log("Bullet banished..");
shot.position.x = -50;
shot.position.y = - 50;
}  
monsters.resetColPos()
monsterHit(monsters.collision_bool, monsters.position.x, monsters.position.y);
console.log(monsters.position.x);
}

function buffer(){
    requestAnimationFrame(buffer)
    //GAME
    ctx.clearRect(0,0,c.width, c.height)
 
    backg.update_backg(); // background image
     //adding objects
    player.update();
    shot.updateShot(); // shotting
    //animation.updateAnimation();
    

    invaderOne.updateMonster();
    collisionMonster(invaderOne);
    
  
   
//collison monsters and shots 


// monsterHit(monsters[1].collision_bool, monsters[1].collision_posX, monsters[1].collision_posY);
// monsters[1].resetColPos();

// collison ends 


// animation.explosionEffect(5, posx - 85, posy - 85, explosion);
// if(animation.getAnimationStatus() && explosion){

//  animation2.reset();
// animationTwo = true;
//  }
//   animation2.explosionEffect(5, posx - 85, posy - 85, animationTwo);

} 

buffer();


