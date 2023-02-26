import sys
import requests
import re 

movie_name = sys.argv
print(movie_name)
n = len(movie_name)
if n > 2:
    print("stream takes only one arg")
else:
    movie = input("enter movie name:")
    """To get torrents"""
    r = requests.get(f'https://www.1377x.to/search/{movie}/1')
    web = r.text
    match = re.findall(r'href=[\'"]?([^\'" >]+)', web)
    # print(match)
    listOfTorrents = []
    for i in match:
        tor = "/torrent"
        if tor in i:
            listOfTorrents.append(i)

    print(listOfTorrents[0])
    """To get magnet link"""
    mag = requests.get(f'https://www.1377x.to/{listOfTorrents[0]}')
    getmag = mag.text
    regex = r"\bmagnet.*\Bannounce"
    matches = re.findall(regex,getmag)
    print(matches[0])