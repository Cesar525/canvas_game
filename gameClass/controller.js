



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
    },
    powerbombactivation : {
        pressed : false
    }

    
    }

const mouse = {
    leftClick : {
        pressed : false
    },
    rightClick : {
        pressed : false
    }
}

addEventListener("keydown", function ({keyCode}){
   // console.log(keyCode);
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
         case 65 : 
        // keys.powerbombactivation.pressed = true
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
            case 65 : 
         //keys.powerbombactivation.pressed = false;
         break;
      }
  });

  addEventListener("mousemove", (event) => {
   // mousePad.getCursorPosition(canvas, event)
      });

      addEventListener("click", (event) => {
       mouse.leftClick.pressed = event.bubbles;
       setTimeout(() => {
        mouse.leftClick.pressed = false;
       },50);
     
}, false);
    

 