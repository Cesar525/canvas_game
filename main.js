const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false
    },
    resizable: true
  });
setTimeout(() => {
  console.log(win.getSize())
  
},  5000);

  

  win.loadFile('index.html');
}


app.on('ready', createWindow);