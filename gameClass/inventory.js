class Inventory{
constructor(){
this.position = {
x : 0,
y : 0
}

this.boxes_size = {
    w : 100,
    h : 100
}

this.boxes_mouseoffsprite = "assets/inventory/mouseoffsquare.png";
this.boxes_mouseonsprite = "assets/inventory/mouseonsquare.png";
this.item_count = 0;


this.slots = 4;
this.inventory = [];
}

inventory(){
console.log("loading inventory working")

}

inventoryUpdate(){
this.inventory();


}

}