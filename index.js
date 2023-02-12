const {app, BrowserWindow, ipcMain} = require('electron');
const fs = require('fs');
const path = require('path');
const { URLSearchParams } = require('url');
const APP_ICON = path.join(__dirname, '/build/icons/512x512.png');

app.on('ready', () => {
    const window = new BrowserWindow({
        width: 1036,
        height: 609,
        title: 'HammerJS',
        icon: APP_ICON,
        webPreferences: {
            nodeIntegration: true,
            nodeIntegrationInWorker: true,
            nodeIntegrationInSubFrames: true,
            enableRemoteModule: true,
            contextIsolation: false,
            webviewTag: true
        }
    });
    require('@electron/remote/main').initialize()
    require('@electron/remote/main').enable(window.webContents)
    try {
        require('electron-reloader')(module);
    } catch (e) {}
    window.loadFile('views/index.html');
});
// exit all windows onclose
app.on('window-all-closed', () => {
    app.quit();
});
// darwin: quit when all windows are closed
app.on('quit', () => {
    app.quit();
});