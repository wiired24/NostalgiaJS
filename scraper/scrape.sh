echo -e "     _______   ______ ______           ___       ______    _______ "
echo -e "    /       | /      ||   _  \        /   \     |   _  \  |   ____|"
echo -e "   |   (---- |   ---- |  |_)  |      /  ^  \    |  |_)  | |  |__   "
echo -e "    \   \    |  |     |      /      /  /_\  \   |   ___/  |   __|  "
echo -e " ----)   |   |   ----.|  |\  \----./  _____  \  |  |      |  |____ "
echo -e "|_______/     \______|| _| ._____/__/     \__ \ | _|      |_______|"
echo -e "                                                                   "



echo "This tool will help you scrape media files for your Nostalgia games."
echo "Please input the path that you would like to scrape now"
read pathname
echo "Please input the platform name. For example snes or ps1"
read platformname
Skyscraper -p $platformname -i $pathname --flags videos
echo "All Done.... Check" $pathname
echo "for your media files"
