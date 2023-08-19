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
item_Name : "",
item_count : 0,
item_sprite : energy_powerup[0],
}
this.collision_with_mouse = false;
this.clickOn = false;
this.slot_status = this.item_info.item_on;
}



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
setItemCount(set){this.item_info.item_count += set;};
setItemSprite(itemSprite){ this.item_info.item_sprite = itemSprite;};
setItemOn(set){this.item_info.item_on = set};
setItemName(set_Name){this.item_info.item_Name = set_Name};
setOnClick(set){this.clickOn = set};
setCollision(set){this.collision_with_mouse = set;};

// gets
getItemOn(){return this.item_info.item_on;};
getItemName(){return this.item_info.item_Name;}
getCollision(){return this.collision_with_mouse;};


usingItem(){
    if(mouse.leftClick.pressed && this.getCollision()){
        this.setItemCount(-1);


console.log("clocked");


        mouse.leftClick.pressed = false;
    }
}


setItemUp(item_type, itemSprite, item_count, item_status){
this.item_info.item_type = item_type;
this.item_info.item_count = item_count;
this.item_info.item_on = item_status;
this.item_info.item_sprite = itemSprite;
}
emptySlot(){
    if(!this.item_info.item_on){
        return true;
    }else{
        return false;
    }

};

clearSlot(){
    this.item_info.item_on = true;
    this.item_info.item_type = "type";
    this.item_info.item_count = 10;
    this.item_info.item_sprite = "";
}

deleteEmptySlotItem(){

    if(this.item_info.item_count <= 0){
        this.clearInventorySlot();
    }
}

getItemInSlot(){ return this.item_info.item_type;}

clearInventorySlot(){
    this.item_info.item_count = NaN;
    this.item_info.item_sprite = NaN;
    this.item_info.item_type = NaN;
    this.item_info.item_on = false;
}



updateInventory(){
this.drawIventory();
this.usingItem();
this.deleteEmptySlotItem();
}
}