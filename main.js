//(C) 2021 - Nostalgia was born on March 8th 2021. I wanted to make a great front-end launcher
// for linux gamers. This is my attempt at that. I hope you enjoy!
// yours truly <3  -wiired24

// Import the neccessary NodeJS dependencies
const path = require('path')
const os = require('os')
const fs = require('fs');
const readline = require('readline')
const child = require('child_process').execFile;
const recursive = require('recursive-readdir');
const lineReader = require('line-reader')

// Import the necessary dependencies for Electron
const {app, BrowserWindow, Menu, ipcMain, shell, dialog, screen} = require('electron');



// Set the env to development for now
process.env.NODE_ENV = 'production'

// Production should be false if in dev mode, also set boolean for Mac
const onDev = process.env.NODE_ENV !== 'production' ? true : false
const onMac = process.platform === 'darwin' ? true : false
const onLinux = process.platform === 'linux' ? true : false

// Mainwindow has been born
let mainWindow;

// Function for initializing the main window, and setting properties
function createMainWindow() {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize
    mainWindow = new BrowserWindow({
        title: `Nostalgia`,
        width: 1280,
        height: 720,
        icon: `${__dirname}/assets/icons/Icon_256x256.png`,
        resizable: onDev ? false: false,
        frame:true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    mainWindow.loadFile('./app/index.html')
}

function createAddRomsWindow() {
    AddRomsWindow = new BrowserWindow({
        title: 'Rom Setup',
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    AddRomsWindow.loadFile('./app/importRoms.html')
    AddRomsWindow.setMenu(null)
}

function createAddSteamWindow() {
    SteamWindow = new BrowserWindow({
        title: 'Steam Setup',
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    SteamWindow.loadFile('./app/addSteam.html')
    SteamWindow.setMenu(null)
}

function createAboutWindow () {
    aboutWindow = new BrowserWindow({
        title: 'About ImgShrink',
        width: 300,
        height: 300,
        icon: `${__dirname}/assets/icons/Icon_256x256.png`,
        resizable: false,
        backgroundColor: 'white',
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })


    aboutWindow.loadFile('./app/about.html')
    aboutWindow.setMenu(null)
}

function createSettingsWindow() {
    SettingsWindow = new BrowserWindow({
        title: 'Settings',
        width: 800,
        height: 600,
        resizable: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })
    SettingsWindow.loadFile('./app/settings.html')
    //SteamWindow.setMenu(null)
}

// on 'Ready' lets execute createMainWindow

app.on('ready', () => {
   
    createMainWindow()
  

    // Let's build the main menu from the menu array defined below
    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)
})

// If on mac, lets create an about menu item
const menu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Import Rom',
                icon:`${__dirname}/assets/icons/import_rom_icon.png`,
                click () {
                    createAddRomsWindow()
                }
                
            },
            {
                label: 'Add Steam Game',
                icon: `${__dirname}/assets/icons/steam.png`,
                click() {
                    createAddSteamWindow()
                }
            },
            {
                label: 'Configure Settings',
                icon: `${__dirname}/assets/icons/settings.png`,
                click() {
                createSettingsWindow()
                }
            },
            {
                 role: 'quit',
                 icon: `${__dirname}/assets/icons/quit.png` 
            }
        ]
    },
    
// On Developer Mode let's show a custom menu that's useful for app development
    ...(onDev
        ? [
            {
            label:'Developer',
            submenu: [
                { role: 'reload' },
                { role: 'forcereload' },
                { type: 'separator' },
                { role: 'toggledevtools' },
            ],
        },
    ]
    : []),

    ...(onMac ? [{
        label: app.name,
        submenu: [
            {
                label: 'About',
                icon:`${__dirname}/assets/icons/help_16x16.png`,
                click: createAboutWindow,
            }
        ]
        }] : []),
    //{
     //role: 'fileMenu',
    //},
// On Windows/Linux lets creeate an about menu item
...(!onMac ? [
    {
        label: 'Help',
        submenu: [
            {
                label: 'About',
                icon:`${__dirname}/assets/icons/help_16x16.png`,
                click: createAboutWindow
            },
        ]
    }
]: []),
   
]

// if User is adding a game lets call createConfig
ipcMain.on('game:add', (e,args) => {
    createConfig(args)
    mainWindow.webContents.send('game:added',args)
})

// Launching a game that was just added, call loadConfig to boot game
ipcMain.on('game:launch', (e,args) => {
    loadConfig(args)
})

// Launching a game that was already in the users library, call loadconfig to boot game
ipcMain.on('game:startup', (e,args) => {
    loadConfig(args)
})

ipcMain.on('steam-game:add' ,(e,args) => {
    createSteamConfig(args)
    mainWindow.webContents.send('steam-game:added',args)
})

ipcMain.on('steam-game:launch', (e,args) => {
    loadSteamConfig(args)
})

ipcMain.on('settings:add', (e,args) => {
    writeSettings(args)
    mainWindow.webContents.send('settings:update',args)
})

ipcMain.on('settings-start',(e,args) => {
    recursive(`${__dirname}/settings`,function(err,files) {
        

        // Map over every file & read contents
        files.map(function(gamePath) {
        if (gamePath.includes('.json')) {
            lineReader.eachLine(gamePath,function(line,last) {
               
                
                
                mainWindow.webContents.send('settings-start',line)
            })
        }
    }) 
      
 })
})

// Once 'start' is triggered i.e. when the mainwindow loads, lets get every game image that is
// currently saved and send it to the render process so they can be appended to the DOM
ipcMain.on('start', (e,args) => {
    recursive(`${__dirname}/games`,function(err,files) {
        

        // Map over every file & read contents
        files.map(function(gamePath) {
        if (gamePath.includes('.json')) {
            lineReader.eachLine(gamePath,function(line,last) {
               
                
                
                mainWindow.webContents.send('start',line)
            })
        }
    }) 
      
 })
})

// Same as above but for iterating over a collection of Steam Games. Sends back all .JSON
// steam files to the render process to then be iterated over and processed on the page.
ipcMain.on('steam-start', (e,args) => {
    recursive(`${__dirname}/steam/games`,function(err,files) {
        

        // Map over every file & read contents
        files.map(function(gamePath) {
        if (gamePath.includes('.json')) {
            lineReader.eachLine(gamePath,function(line,last) {
               
                
                
                mainWindow.webContents.send('steam-start',line)
            })
        }
    }) 
      
 })
})



// loadconfig calls child. Child takes the rompath/emuPath and launches the executable
function loadConfig({romPath,emuPath,wine,Retroarch}) {
    let executablePath = emuPath;
    let parameters = [romPath]
    let winePath = [emuPath,romPath];
    let launchWithWine = wine;
    let laucnhWithRetroarch = 'retroarch';
    let launch = '-L'
    let RetroarchPath = [launch,emuPath,romPath]

    

    // If platform is Linux, let's support launching emulators via WINE
    if (onLinux && executablePath.includes('.exe')) {
        child(launchWithWine,winePath, function(err,data) {
            if(err) {
                console.log(err)
            }
            console.log(data.toString());
        });
    }

    
    // If launching a Retroarch Libretro core let's do this
    if (executablePath.includes('libretro')) {
        console.log('working...')
        //console.log(combinedPath)
        child(laucnhWithRetroarch,RetroarchPath, function(err,data) {
            if(err) {
                console.log(err)
            }
            console.log(data.toString());
        });
    }

    // Default agrs is just emulator path -> RomPath
    child(executablePath,parameters, function(err,data){
        if(err) {
            console.log(err);
            return;
        }
        console.log(data.toString());
    });

}

function loadSteamConfig({Steam,SteamTitle,SteamCommand}) {
    let SteamPath = [Steam,SteamCommand];
    let launchWithSteam = Steam;

        child(launchWithSteam,SteamPath, function(err,data) {
            if(err) {
                console.log(err)
            }
            console.log(data.toString());
        });
}

// Create a JSON file for each game that is added. This JSON file contains all relevenat data
// about the game that is being added.
function createConfig({gameDataJSON}) {
    gameFile = JSON.parse(gameDataJSON)

    fs.mkdir(`${__dirname}/games/${gameFile.name}/configs`, { recursive: true }, (err) => {
        fs.writeFile(`${__dirname}/games/${gameFile.name}/configs/data.json`, `${gameDataJSON}`, function (err) {
            if (err) return console.log(err);
        })
        if (err) throw err;
    });


   AddRomsWindow.webContents.send('game:added')
  
   
}

function createSteamConfig({SteamGameDataJSON}) {
    SteamGameFile = JSON.parse(SteamGameDataJSON)

    fs.mkdir(`${__dirname}/steam/games/${SteamGameFile.name}/configs`, { recursive: true }, (err) => {
        fs.writeFile(`${__dirname}/steam/games/${SteamGameFile.name}/configs/data.json`, `${SteamGameDataJSON}`, function (err) {
            if (err) return console.log(err);
        })
        if (err) throw err;
    });

    SteamWindow.webContents.send('steam-game:added')

}

function writeSettings({SettingsJSON}) {
    Settings = JSON.parse(SettingsJSON)

    fs.mkdir(`${__dirname}/settings/`, { recursive: true }, (err) => {
        fs.writeFile(`${__dirname}/settings/data.json`, `${SettingsJSON}`, function (err) {
            if (err) return console.log(err);
        })
        if (err) throw err;
    });

    SettingsWindow.webContents.send('settings:added')
   
}


// Quit the application when closed unless user is on mac
app.on('window-all-closed', () => {
    if(!onMac) {
        app.quit()
    }
})

// On MacOS re-create a window if dock icon is clicked and no other
// windows are currently open
app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow()
    }
})
