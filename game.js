var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 1000
c.height = 1000
const gravity = 20




const backg = new Background();
const shield = new Shields();
const death = new Death();
//game
const playerDeathAnimation = new Animation();
const collision = new Collision();
const player = new Player("Cesar", 123,  8, 500);

const animation3 = new Animation();
const thruster = new Thruster();
const shot = new shots();
const monst = new Monsters();

//Monsters

const monsters = [
new Monsters(1, 100, 100 , 100, "MONSTER 1", 10, "orange", "none"),
new Monsters( 2, 300, 100, 100, "MONSTER 3", 10, "green", "none"),
new Monsters( 3, 600, 100, 100, "MONSTER 3", 10, "blue", "none"),
new Monsters( 4, 800, 100, 100, "MOSTER 4", 10, "red", "none"),
new Monsters( 4, 300, 300, 1000, "BOSS", 10, "red", "none")
];

const animation = [];
const animation2 = [];
const monsterDeadAnimation = [];
for(var i = 0; i < monsters.length + 1; i++){
animation.push(new Animation());
animation2.push(new Animation());
monsterDeadAnimation.push(new Animation());
}



function buffer(){
    requestAnimationFrame(buffer)
    //GAME
    ctx.clearRect(0,0,c.width, c.height)
 
    backg.update_backg(); // background image
     //adding objects
    player.update();
    // shotting
    shot.updateShot(); 

    for(var i = 0; i < monsters.length; i++){
    collisionMonster(monsters[i]);
   monsters[i].updateMonster();
   monsterHit(animation[i], animation2[i], monsters[i].collision_bool, monsters[i].position.x, monsters[i].position.y);
  
    }
     
} 

buffer();


