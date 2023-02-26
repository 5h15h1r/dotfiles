import sys
import requests
import re 

movie_name = sys.argv

n = len(movie_name)
if n <= 1:
    print("stream: not enough arguments")
elif n > 2  :
    print("stream: only excepts one argument")
else:
    movie = movie_name[1]
    """To get torrents"""
    r = requests.get(f'https://www.1377x.to/search/{movie}/1')
    web = r.text
    match = re.findall(r'href=[\'"]?([^\'" >]+)', web)
    # print(match)
    listOfTorrents = []
    for i in match:
        tor = "/torrent"
        if tor in i:
            print(i)

    # print(listOfTorrents)
    """To get magnet link"""
    mag = requests.get(f'https://www.1377x.to/{listOfTorrents[0]}')
    getmag = mag.text
    regex = r"\bmagnet.*\Bannounce"
    matches = re.findall(regex,getmag)
    print(matches[0])