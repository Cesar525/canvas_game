class Thruster {
constructor(){
    this.thruster_size =150;
    this.thruster_animation = 0;
}


 setPlayersThruster(select_thruster, player_posx, player_posy, sizew, sizeh){
    const thruster = new Image();
    const thrusters = {
        1 : "assets/thrusters/thruster01.png",
        2 : "assets/thrusters/thruster02.png",
        3 : "assets/thrusters/thruster03.png",
        4 :  "assets/thrusters/thruster04.png",
        5 :  "assets/thrusters/thruster05.png",
        6 :  "assets/thrusters/thruster06.png",
        7 :  "assets/thrusters/thruster07.png",
        8 :  "assets/thrusters/thruster08.png",
        9 :  "assets/thrusters/thruster09.png",
        10 :  "assets/thrusters/thruster10.png",
        11 :  "assets/thrusters/thruster11.png",
        12 :  "assets/thrusters/thruster12.png",
        13 : "assets/thrusters/thruster13.png",
        14 : "assets/thrusters/thruster14.png",
        15 : "assets/thrusters/thruster15.png",
        16 :  "assets/thrusters/thruster16.png",

    };
    thruster.src = thrusters[select_thruster];
    ctx.drawImage(thruster , player_posx, player_posy , sizew, sizeh + this.thruster_animation);
if(this.thruster_animation <= 20){
    this.thruster_animation += 1
}if(this.thruster_animation == 20){
    this.thruster_animation = 13;
}
    }

};