# Nostalgia 
Nostalgia - The Simple & Unopinionated Gaming Front-End
<img width="32" height="32" src="https://i.imgur.com/UQz3tN9.png">
<br>
![Alt Text](https://gbatemp.net/proxy.php?image=https%3A%2F%2Fmedia4.giphy.com%2Fmedia%2F3b5a9dVpTJFmfauiHc%2Fgiphy.gif&hash=368cdbdded067611ade69850b54b49a0)

# Installation
Make sure you have NodeJS & NPM installed on your machine.
<br>
To check you can run `node --version` & `npm --version`.
<br>
Once the repo is cloned, run `npm install` to install dependencies.
<br>
When that is finished, run `npm run start` to start Nostalgia

# Compiling
Currently both Linux and MacOS are supported. In order to compile a release build you will need to run `npm run package-linux` or `npm run package-mac`.Windows support may come at a later time but for the time being it's not the main focus. In fact Nostalgia is an alternative to popular front-ends launchers that already exist for the Windows Platform.

# Usage
As you can see adding games to Nostalgia is very straight-forward and easy to do 👍
<br>
![Alt Text](https://media2.giphy.com/media/SP0KlPJ9ns2I81r6OG/giphy.gif)

Nostalgia currently allows both steam games and emulators to be imported. It's as simple as selecting `import rom`
or `import steam game` in the file menu, adding the required files, and then launching your game. That's all you have to do. 
Please note if you're importing a steam game to your collection you will need the AppID of that title. This can easily be 
found for free on steam.db.info. 

![Alt Text](https://media3.giphy.com/media/hyJJeraLb0M0SvWffJ/giphy.gif)

Removing games is also straightforward as well. Just navigate to where Nostalgia is installed
on your computer and locate the `/games` or `/steam/games` folder, and remove the data.json file. This will remove it from Nostalgia

# Features
Currently Nostalgia supports both steam games and emulators as well. Emulators can be either native linux/macOS versions or you can also
use Windows .exe files as Wine is supported by default just make sure you have it installed. It also has support for custom box art and video previews. If you have a larger collection of rom files it's recommended to use a scraper to fetch media files for you games. These can then be used by Nostalgia 
when adding your games. I personally recommend [SkyScraper](https://github.com/muldjord/skyscraper) but your mileage may vary. 

![Alt Text](https://i.imgur.com/by30Sxd.png)

# Why Nostalgia?
Nostalgia was created as I wanted to create a viable open source alternative for those looking for an experience that is similar to something like launchbox on windows, that was instead built natively for the linux desktop. Rather than trying to have every feature ever, It was designed to be minimal, easy to use, customizeable, and above all fun. It's still very early in development so some things may occasionally break and it may not have every feature just yet. I do think at this point it's stable enough for general use. However you can expect various features and bug fixes to be added. 

# Troubleshooting
If you get a weird error that goes something like `Javascript Error! Map is not defined` don't worry it seems to pop up when you first
run npm start for some odd reason, however it doesn't seem to affect Nostalgia so you can ignore this error if you happen to get it. While the vast majority of emulators should work, I haven't been able to test every emulator that's out there. So far the ones I know work are the following.
<br>
<br>
`Snex9x`
<br>
`PPSSPP`
<br>
`PCSX2`
<br>
`Mupen64`
<br>
`Dolphin`
<br>
`mGBA`
<br>
`FCEUX`
<br>
`Fusion`

If you come across an emulator that doesn't work for whatever reason just submit an issue on Github and I will look into it. 
