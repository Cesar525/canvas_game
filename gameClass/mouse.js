class Mouse {
    constructor(){
        this.position = {
            x : 0,
            y : 0
        }
        this.width = 1;
        this.height = 1;
this.mouse_pointer_look = {
    mouseon_object_sprite : "mouse on psrite here",
    mouseoff_object_sprite : "mouse on object sprite here"
}
this.mouse_collision = false;

}
// CLASS FUNTIONS
draMouse(){
// const mouse_pointer = new Image();
// mouse_pointer.src = "sprite here";
// ctx_ui_status.drawImage(mouse_pointer, 100, 100, 100)
}

getCursorPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect() 
    this.position.x = Math.floor((event.clientX - rect.left));
    this.position.y = Math.floor((event.clientY - rect.top))
    console.log( this.position.x + "AND " + this.position.y)
}

getMousePosX(){return this.position.x;};
getMousePosY(){return this.position.y;};

updateMouse(){
    this.draMouse();


}
}