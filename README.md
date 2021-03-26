# NostalgiaJS

NostalgiaJS - The Fast,Simple, Open Source Gaming Front-End
<img width="32" height="32" src="https://i.imgur.com/UQz3tN9.png">
<br>
![Alt Text](https://i.imgur.com/fDSwEKA.png)

# Installation

The installation process is pretty straight-forward. Just run these commands in your terminal

<pre><code class="hljs language-shell">$ git clone https://github.com/wiired24/NostalgiaJS.git
</code></pre>
<br>
<pre><code class="hljs language-shell">cd NostalgiaJS
</code></pre>
<br>
<pre><code class="hljs language-shell">npm install
</code></pre>
<br>
<pre><code class="hljs language-shell">npm run start
</code></pre>

# Release Builds

Currently both Linux and MacOS are supported. In order to compile a release build you will need to run `npm run package-linux` or `npm run package-mac`. After compiling is finished you will see a new directory called
`/release-builds` there you can find binaries for your target platform. Please note that although Windows support may come at a later time, for the time being it's not the main focus. In fact Nostalgia is an alternative to popular front-ends launchers that already exist for the Windows Platform.

# Usage

As you can see adding games to NostalgiaJS is very straight-forward and easy to do 👍
<br>
![Alt Text](https://media4.giphy.com/media/a97J5R43YfWS0jGnqO/giphy.gif)

NostalgiaJS currently allows both steam games and emulators to be imported. It's as simple as selecting `import rom` or `import steam game` in the file menu, adding the required files, and then launching your game. That's all you have to do. Please note if you're importing a steam game to your collection you will need the AppID of that title. This can easily be found for free on steam.db.info.

![Alt Text](https://media3.giphy.com/media/hyJJeraLb0M0SvWffJ/giphy.gif)

# Features

Currently NostalgiaJS supports both steam games and emulators as well. NostalgiaJS has `built in support` for both standalone emulator binaries and `libretro retroarch cores` as well. NostalgiaJS comes with some of the most popular libretro cores already included by default. Just search in `/NostalgiaJS/libretro/cores` when importing your rom file to your collection. In addtion, you can also use Windows .exe files for standalone emulators as Wine is supported by default just make sure you have it installed. NostalgiaJS is also very fast. It uses compile time V8 optimizations that help it startup in typically just less than a second, even when you have several games in your library. In addition the default Cores included with NostalgiaJS load fast as well since they are written in C. In order to take advantage of these optimizations just make sure you run `npm run package-linux` or `npm run package-mac` to compile a release build
depending on what operating system you are on. 

Oh yeah did I mention NostalgiaJS also supports custom backgrounds too? :)
![Alt Text](https://i.imgur.com/zcC8UMf.png)

# Scraping

If you have a larger collection of rom files it's recommended to use a scraper to fetch media files for you games. In which case you can take advantage of the default scraper (skyscraper) that NostalgiaJS has to offer. Just run the `setupScraper` script once to install dependencies and then you only need to run `scrape.sh` when you want to scrape metadata for your games. A media folder will be created containing images and videos for your games after scraping has finished.

![Alt Text](https://i.imgur.com/K5cKwxN.png)

# Why NostalgiaJS?

NostalgiaJS was created as I wanted to create a viable open source alternative for those looking for an experience that is similar to something like launchbox on windows, that was instead built natively for the linux/Unix desktop. Rather than trying to have every feature ever, It was designed to be minimal, fast, easy to use, customizeable, and above all fun. I do think at this point it's stable enough for general use. However you can expect various features and bug fixes to be added as development continues.

![Alt Text](https://media2.giphy.com/media/1AJNfJIAKWe3XKM0lL/giphy.gif)

# Troubleshooting

While NostalgiaJS is generally considered stable enough for use at this point, if you do come across a bug please let me know about it by submitting an issue on Github and I will look into it. Some common things to be aware of. If you're launching a game on mac or linux that requires a .exe emulator file, make sure you have wine installed on your machine. If you are loading a libretro core, make sure that you have the proper file which should be a `<platform-name>libretro.so file` and that you have retroarch installed on your machine. Also if a libretro core doesn't load it's most likely because of a missing bios file on your system. Dolphin is one example that comes to mind where a Bios might be required. If you're using a standalone emulator binary to launch a rom, and the emulator won't launch or doesn't start it may just be an issue with that specific emulator in which case I'd recommend trying the libretro core equivalent instead.

# Further Documentation

We now have an Official Wiki which documents in detail just about everything you need to know to get up and running with NostalgiaJS. You can view it here. ![Go to Wiki](https://github.com/wiired24/NostalgiaJS/wiki) <br>Please keep in mind that the Wiki is being actively worked on so new pages may be added in the future.
