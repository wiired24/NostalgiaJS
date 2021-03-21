# Nostalgia 
Nostalgia - The Simple,Unopinionated, Open Source Gaming Front-End
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

# Release Builds
Currently both Linux and MacOS are supported. In order to compile a release build you will need to run `npm run package-linux` or `npm run package-mac`. After compiling is finished you will see a new directory called 
`/release-builds` there you can find binaries for your target platform. Please note that although Windows support may come at a later time, for the time being it's not the main focus. In fact Nostalgia is an alternative to popular front-ends launchers that already exist for the Windows Platform.

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
Currently Nostalgia supports both steam games and emulators as well. Nostalgia has `built in support` for both standalone emulator binaries and `libretro retroarch cores` as well. In addtion, you can also
use Windows .exe files for standalone emulators as Wine is supported by default just make sure you have it installed. It also has support for `custom box art` and `video previews`. 

# Scraping 
If you have a larger collection of rom files it's recommended to use a scraper to fetch media files for you games. In which case you can take advantage of the default scraper that Nostalgia has to offer. Just run the
`setupScraper` script once to install dependencies and then you only need to run `scrape.sh` when you
want to scrape metadata for your games. A media folder will be created containing images and videos
for your games after scraping has finished.

![Alt Text](https://i.imgur.com/by30Sxd.png)

# Why Nostalgia?
Nostalgia was created as I wanted to create a viable open source alternative for those looking for an experience that is similar to something like launchbox on windows, that was instead built natively for the linux/Unix desktop. Rather than trying to have every feature ever, It was designed to be minimal, easy to use, customizeable, and above all fun. It's still very early in development so some things may occasionally break and it may not have x feature impleneted yet. I do think at this point it's stable enough for general use. However you can expect various features and bug fixes to be added as development continues. 

# Troubleshooting
While Nostalgia is generally considered stable enough for use at this point, if you do come across a bug please let me know about it by submitting an issue on Github and I will look into it. Some common things to be aware of. If you're launching a game on mac or linux that requires a .exe emulator file, make sure you have wine installed on your machine. If you are loading a libretro core, make sure that you have the proper file which should be a `<platform-name>libretro.so file` and that you have retroarch installed on your machine. If you're using a standalone emulator binary to launch a rom, and the emulator won't launch or doesn't start it may just be an issue with that specific emulator in which case I'd recommend trying the libretro core equivalent instead. 
