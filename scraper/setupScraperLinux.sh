sudo apt update
sudo apt install build-essential qt5-default
echo "Installing neccessary dependencies for scraper please wait!"
cd
mkdir skysource
cd skysource
wget -q -O - https://raw.githubusercontent.com/muldjord/skyscraper/master/update_skyscraper.sh | bash
cd ..
echo "Scraper has been installed. You can now run scrape.sh to start scraping"
