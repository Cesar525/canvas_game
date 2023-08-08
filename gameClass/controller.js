
const canvas = document.querySelector('#canvasUILifeBar')
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
         case 38 :
         keys.up.pressed = true;
         break;
         case 40 :
         keys.down.pressed = true;
         break;
         case 37 : 
         keys.left.pressed = true
         break;
         case 39 : 
         keys.right.pressed = true
         break;
         case 83 : 
         keys.shotting.pressed = true
         break;
         
     }
     
 });
 
 addEventListener("keyup", function ({keyCode}){
   //  console.log(keyCode);
      switch(keyCode){
          case 38 : 
          keys.up.pressed = false;
          break;
          case 40 : 
          keys.down.pressed = false;
          break;
          case 37 : 
          keys.left.pressed = false;
          break;
          case 39 :
          keys.right.pressed = false;
          break;
          case 83 :
            keys.shotting.pressed = false;
            break;
      }
      
  });


  addEventListener("mousemove", (event) => {
    console.log(event)
      });
  