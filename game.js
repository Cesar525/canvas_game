var c = document.getElementById("canvasone");
var ctx = c.getContext("2d");

var gameFrame = 0;

c.width = 3000
c.height = 2000
const gravity = 10;
const fps = 60;
const backg = new Background();
const shield = new Shields();
const death = new Death();
//game
const playerDeathAnimation = new Animation();
const thruster = new Thruster();


//players
//CREATING A PLAYER Player(name, level, thruster_selection, get_health, energy, m_damage,  gunType, posx, posy, gun_speed)
const players = new Player("Player One", 1230,  6, 100, 400, 1, 2, 500, 900, 10);

//Monsters
//CREATING A MONSTERS Monstrs( id, sprite,  pos_x, pos_y, health, name, speed, color, movements, s_width, s_height, damage)
const monsters = new Monsters(2, asteroid_eleven,  500, 100 , 100, "Asteroid Lvl 1", 10, "orange", "none", 200, 200, 2);

//Missiles
const missiles = new shots();


//BUFFERRRR
function buffer(){
    setTimeout(() => {
        requestAnimationFrame(buffer)
       
      }, 1000 / fps);
    //GAME 
    gameFrame ++;
    ctx.clearRect(0,0,c.width, c.height)
    backg.update_backg(); // background image

    monsters.updateMonster();
    missiles.collisionMonsterShot(monsters);
    missiles.updateShot();
    players.playerCollitionMonsters(monsters);
    players.playerGun(missiles)
    players.update();
    
} 

buffer();















// const sprite = [ // this is only use for sprite testing

//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation(),
//     new Animation()

// ];





// SETTING UP SPRITES
// sprite[0].spritePro(asteroid_one, 1, 200, 0, 200, 200);
// sprite[1].spritePro(asteroid_two, 1, 400, 0, 200, 200);
// sprite[2].spritePro(asteroid_three, 1, 800, 0, 200, 200);
// sprite[3].spritePro(asteroid_four,1, 600, 0, 200, 200);
// sprite[4].spritePro(asteroid_five, 1, 1000, 0, 200, 200);
// sprite[5].spritePro(asteroid_six, 1, 1200, 0, 200, 200);
// sprite[6].spritePro(asteroid_seven, 1, 1400, 0, 200, 200);
// sprite[7].spritePro(asteroid_eight, 1, 1600, 0, 200, 200);
// sprite[8].spritePro(asteroid_nine, 1, 1800, 0, 200, 200);
// sprite[9].spritePro(asteroid_ten, 1, 0, 200, 200, 200);
// spritesProccessing(asteroid_one, 1, 500, 500, 800, 800);
