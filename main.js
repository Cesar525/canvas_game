const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
   title : "Space Game",
    resizable: true,
    icon : "imagepath/",
    darkTheme : true,

    webPreferences: {
      nodeIntegration: false,
       
    },
   
  });
setTimeout(() => {
  console.log(win.getSize())
  
},  5000);

  

  win.loadFile('index.html');
}


app.on('ready', createWindow);