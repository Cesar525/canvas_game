class Explosions {

    constructor(type_of_explo, posx, posy, size_w, size_h){
this.explosion = {
    m_type : type_of_explo,
    m_posx : posx,
    m_posy : posy,
    m_size_w : size_w,
    m_size_h : size_h
}

this.destroy_Object = false;
    }

getDestroyObjecT(){return this.destroy_Object;};
setDestroyObject(set) {this.destroy_Object = set;};

updateExplosions(animation){
    animation.explosionEffect(this.explosion.m_type, this.explosion.m_posx, this.explosion.m_posy, true, NaN, this.explosion.m_size_w, this.explosion.m_size_h);
}

}