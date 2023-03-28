
const keys = {
    right : {
        pressed:false
    },
    left : {
        pressed:false
    },
    up : {
        pressed:false
    },
    down : {
        pressed:false
    },
    shotting : {
        pressed: false
    }
    
    }


addEventListener("keydown", function ({keyCode}){
    //console.log(keyCode);
     switch(keyCode){
         case 38 : console.log("arrow up")
         keys.up.pressed = true;
         break;
         case 40 : console.log ("arrow down")
         keys.down.pressed = true;
         break;
         case 37 : console.log("arrow left")
         keys.left.pressed = true
         break;
         case 39 : console.log("arrow right")
         keys.right.pressed = true
         break;
         case 83 : console.log("shotting space button")
         keys.shotting.pressed = true
         break;
         
     }
     
 });
 
 addEventListener("keyup", function ({keyCode}){
   //  console.log(keyCode);
      switch(keyCode){
          case 38 : console.log("arrow up");
          keys.up.pressed = false;
          break;
          case 40 : console.log ("arrow down");
          keys.down.pressed = false;
          break;
          case 37 : console.log("left arrow");
          keys.left.pressed = false;
          break;
          case 39 : console.log("right arrow");
          keys.right.pressed = false;
          break;
      }
      
  });
  
