class Particles {
constructor(posx_start, posy_start, type){

this.p1 = {
    x : posx_start,
    y : posy_start
}
this.p2 = {
x : posx_start,
y : posy_start
}
this.p3 = {
x : posx_start,
y : posy_start
}
this.p4 = {
x : posx_start,
y : posy_start
}
this.p5 = {
x : posx_start,
y : posy_start
}
this.p6 = {
x : posx_start,
y : posy_start
}
this.p7 = {
x : posx_start,
y : posy_start
}
this.p8 = {
x : posx_start,
y : posy_start
}

this.type = type;
this.disapearObject = false;
}

getDisapearObject(){return this.disapearObject};
setDisapearobject(set){this.disapearObject = set};


selectParticles(){


}


particles(){
   
    console.log("particles Working")    
const image_one = new Image();
image_one.src = asteroid_one[1];
ctx.drawImage(image_one, 200, 200, 200 , 200)

ctx.drawImage(image_one, 200, 200, 200 , 200)

}

particleUpdates(){
this.particles();

}

}