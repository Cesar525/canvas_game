var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

c.width = 1000
c.height = 900
const gravity = 20




const backg = new Background();
const shield = new Shields();
const death = new Death();
//game
const collision = new Collision();
const player = new Player(7);

//Monsters
const monsters = 
[
new Monsters(1, 100, 100 , 20, "invaderslevel1", 10, "orange", "none"),
new Monsters( 2, 300, 100, 10, "invaderlevel2", 10, "green", "none"),
new Monsters( 3, 500, 100, 10, "invaderlevel3", 10, "blue", "none"),
new Monsters( 4, 700, 100, 10, "BOSS", 10, "red", "none")
];


const animation = new Animation();
const animation2 = new Animation();
const thruster = new Thruster();
const shot = new shots();



function buffer(){
    requestAnimationFrame(buffer)
    //GAME
    ctx.clearRect(0,0,c.width, c.height)
 
    backg.update_backg(); // background image
     //adding objects
    player.update();
    shot.updateShot(); // shotting
    var explosion;
    var posx;
    var posy;
    var monster;

//collison monsters and shots
for(let i = 0 ; i < monsters.length; i ++){
monsters[i].updateMonster();

if(collision.collisionTouch(shot, monsters[i])){
monsters[i].setMonsterHealth(1); // set up the hit depend on the shot
console.log(monsters[i].body.m_name + " ramina life =  " + monsters[i].getMonsterHealth());
monsters[i].monsterHit(collision.collisionTouch(shot, monsters[i]));
explosion = true;

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
  

if(collision.collisionTouch(shot, monsters[i])){
shot.clearRect = true;
//console.log("Bullet banished..");
shot.position.x = -50;
shot.position.y = - 50;
}  

posx = monsters[i].position.x;
posy = monsters[i].position.y;

}
// collison ends

animation2.explosionEffect(5,  posx - 95, posy - 95, explosion);


}

buffer();


