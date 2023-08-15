class Inventory{
constructor(box_posx, box_posy){
this.position = {
x : box_posx,
y : box_posy, 
}
this.width = 100;
this.height = 100;
this.inventory_starts = c.width - 1000;
this.top = 1;
this.bottom = 100;

this.boxes_mouseoffsprite = "assets/inventory/mouseoffsquare.png";
this.boxes_mouseonsprite = "assets/inventory/mouseonsquare.png";

this.item_info = {
item_on : true,
item_type : "type",
item_count : 10,
item_sprite : energy_powerup[0],
}
this.collision_with_mouse = false;
this.clickOn = false;

}

setCollision(set){this.collision_with_mouse = set;};
getCollision(){return this.collision_with_mouse;};

drawIventory(){
    if(this.getCollision() && this.getItemOn()){
    const slot1_images = new Image();
    slot1_images.src = this.boxes_mouseonsprite;
    ctx_ui_status.drawImage(slot1_images, this.position.x , this.position.y, 100, 100);
    }else{
       
        const slot1_images = new Image();
    slot1_images.src = this.boxes_mouseoffsprite;
    ctx_ui_status.drawImage(slot1_images, this.position.x, this.position.y, 100, 100);

}

if(this.getItemOn()){
const slot_images_ITEM = new Image();
    slot_images_ITEM.src = this.item_info.item_sprite;
    ctx_ui_status.drawImage(slot_images_ITEM, this.position.x, this.position.y, 100, 100);
    //Item Count
    ctx_ui_status.fillStyle = "white";
    ctx_ui_status.font = "40px Roboto Mono";
    ctx_ui_status.strokeStyle = "black";
    ctx_ui_status.fillText(this.item_info.item_count, this.position.x,this.position.y + 100)
    ctx_ui_status.strokeText(this.item_info.item_count, this.position.x,this.position.y + 100)
}
    }

collisionWithMousePad(collision){
    if(collision){
        this.setCollision(true);
        
    }else{
        this.setCollision(false);
       
    }
}
//sets
setItemCount(set){this.item_info.item_count = set;};
setItemSprite(itemSprite){ this.item_info = itemSprite;};
setItemCount(setCount){this.item_info = setCount;};
setItemOn(set){this.item_info.item_on = set};
setItemType(set_type){this.item_info.item_type = set_type};
setOnClick(set){this.clickOn = set};

// gets
getItemOn(){return this.item_info.item_on;};


clearInventorySlot(){
    this.item_info.item_count;
    this.item_info.item_sprite = "";
    this.item_info.item_type = "";
    this.item_info.item_on = false;
}



updateInventory(){
this.drawIventory();

}
}