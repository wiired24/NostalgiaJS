# Nostalgia
Nostalgia - The Free and Open Source Gaming Front-End
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
In order to compile a release build you will need to run `npm run package-linux` or `npm run package-mac`.
Please note windows support is not currently 100% implemented. It may come at a later time but for the time
being this is primarily intended for Linux and other UNIX Like Operating Systems like MacOS. In fact Nostalgia
is an alternative to already popular front-ends that already exist for the Windows Platform.

# Usage
Nostalgia currently allows both steam games and emulators to be imported. It's as simple as selecting `import roms`
or `import steam game` in the file menu, adding the required files, and then launching your game. That's all you have to do. 
Please note if you're importing a steam game to your collection you will need the AppID of that title. This can easily be 
found for free on steam.db.info. Removing games is also straightforward as well. Just navigate to where Nostalgia is installed
on your computer and locate the `/games` or `/steam/games` folder, and remove the data.json file. This will remove it from Nostalgia

![Alt Text](https://media3.giphy.com/media/hyJJeraLb0M0SvWffJ/giphy.gif)

# Features
Currently Nostalgia supports both steam games and emulators as well. It has support for custom box art
and video previews. If you have a larger collection of rom files it's recommended to use a scraper to fetch
media files for you games. These can then be used by Nostalgia when adding your games. I personally recommend
[SkyScraper](https://github.com/muldjord/skyscraper) but your mileage may vary. 

![Alt Text](https://i.imgur.com/by30Sxd.png)

# Why Nostalgia?
Nostalgia was created as I wanted to create a viable open source alternative to something like launchbox that was built natively for
linux. It was designed to be easy to use, customizeable, and above all fun. It's still very early in development so it may not
have every feature under the sun just yet. I do think at this point it's stable enough for general use. However you can expect
various features and quality of life improvements to be added soon. 
