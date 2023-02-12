const remote = require('@electron/remote');
const { app, Menu, MenuItem, webContents, BrowserWindow } = remote;
const menu = new Menu();
menu.append(new MenuItem({
  label: 'File',
  submenu: [
    {
      label: 'New',
      accelerator: 'CmdOrCtrl+N',
      click: function () {
        console.log('New file created');
      }
    },
    {
      label: 'Open',
      accelerator: 'CmdOrCtrl+O',
      click: function () {
        console.log('Open file');
      }
    },
    {
      label: 'Save',
      accelerator: 'CmdOrCtrl+S',
      click: function () {
        console.log('Save file');
      }
    },
    {
        type: 'separator'
    },
    {
        label: 'Quit',
        accelerator: 'CmdOrCtrl+Q',
        click: function () {
          app.quit()
        }
    }
  ]
}));

menu.append(new MenuItem({
  label: 'Edit',
  submenu: [
    {
      label: 'Undo',
      accelerator: 'CmdOrCtrl+Z',
      click: function () {
        console.log('Cut');
      }
    },
    {
      label: 'Copy',
      accelerator: 'CmdOrCtrl+C',
      click: function () {
        console.log('Copy');
      }
    },
    {
      label: 'Cut',
      accelerator: 'CmdOrCtrl+X',
      click: function () {
        console.log('Paste');
      }
    },
    {
        label: 'Paste',
        accelerator:'CmdOrCtrl+V'
    },
    {
        type: 'separator'
    },
    {
        label: 'Delete',
        accelerator: 'Del'
    },
    {
        label: 'Find',
        accelerator: 'CmdOrCtrl+F'
    },
    {
        label: 'Replace',
        accelerator: 'CmdOrCtrl+R'
    },
    {
        label: 'Go To',
        accelerator: 'CmdOrCtrl+Q'
    }
  ]
}));
menu.append(new MenuItem({
    label: 'View',
    submenu: [
        {
            label: 'Zoom',
            submenu: [
                {
                    label: 'Zoom in',
                },
                {
                    label: 'Zoom out',
                }
            ]
        },
        {
            label: 'Status Bar',
            type: 'checkbox',
            checked: true
        }
    ]
}))
menu.append(new MenuItem({
    label: 'Help',
    submenu: [
        {
            label: 'View help'
        },
        {
            label: 'Open developer tools',
            accelerator: 'CmdOrCtrl+Shift+I',
            click: () => {
              const win = remote.getCurrentWindow()
              win.openDevTools();
            }
        },
        {
            label: 'About'
        }
    ]
}))

Menu.setApplicationMenu(menu)