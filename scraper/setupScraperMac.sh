echo "Installing required dependencies for scraper please wait..."
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
brew install gnu-tar --with-default-names
brew install wget
brew install qt5
brew link qt5 --force
cd
mkdir skysource
cd skysource
wget -q -O - https://raw.githubusercontent.com/muldjord/skyscraper/master/update_skyscraper.sh | bash
cd ..
echo "All done... you are ready to run scrape.sh and start scraping!"
