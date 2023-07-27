class Particles {
constructor(posx_start, posy_start, type){

this.p1 = {
    x : posx_start,
    y : posy_start,
    counter : 0
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

this.particles_sprites = {
    burnedRock : "assets/particles/burnedrock.png"
}


this.type = type;
this.disapearObject = false;
}

getDisapearObject(){return this.disapearObject};
setDisapearobject(set){this.disapearObject = set};


selectParticles(){


}


particles(p, sprite){
   
    console.log("particles Working")    
const image_one = new Image();
image_one.src = sprite;
ctx.fillRect(400, 400, 100, 100)
 ctx.globalAlpha = 5
ctx.drawImage(image_one, p.x, p.y, 50, 50);
 ctx.globalAlpha = 1
}

movements(p, p2, p3, p4, p5, p6, p7, p8, type){
    p.counter ++ ;
    
    if(p.counter < 20 ){
    p.x += 10
    p.y += 10
    }
    if(p.counter < 20 ){
        p2.x -= 10
        p2.y -= 10
        }
   
}

particleUpdates(){
this.particles(this.p1, this.particles_sprites.burnedRock);
this.movements(this.p1, this.p2);


this.particles(this.p2, this.particles_sprites.burnedRock);

}

}