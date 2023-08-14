class Inventory{
constructor(box_posx, box_posy){
this.position = {
x : box_posx,
y : box_posy, 
}
this.width = 100;
this.height = 100;
this.inventory_starts = c.width - 1000;
this.top = 0;
this.bottom = 100;

this.boxes_mouseoffsprite = "assets/inventory/mouseoffsquare.png";
this.boxes_mouseonsprite = "assets/inventory/mouseonsquare.png";
this.item = "item type";
this.item_count = 0;
this.collision_with_mouse = false;

this.slots = 4;

}

setCollision(set){this.collision_with_mouse = set;};
getCollision(){return this.collision_with_mouse;};

drawIventory(){
    if(this.getCollision()){
    const slot1_images = new Image();
    slot1_images.src = this.boxes_mouseonsprite;
    ctx_ui_status.drawImage(slot1_images, this.position.x , this.position.y, 100, 100);
    }else{
        const slot1_images = new Image();
    slot1_images.src = this.boxes_mouseoffsprite;
    ctx_ui_status.drawImage(slot1_images, this.position.x, this.position.y, 100, 100);
    }
}

collisionWithMousePad(collision){
    if(collision){
        this.setCollision(true);
        console.log("coliding!!")
    }else{
        this.setCollision(false);
        console.log("not coliding")
    }
}

updateInventory(){
this.drawIventory();

}
}