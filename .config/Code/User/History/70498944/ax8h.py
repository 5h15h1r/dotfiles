import sys
import requests
import re 

movie_arg = sys.argv
movie_name = ""
for i in movie_arg:
    movie_name += i + " "
print(movie_name)
# n = len(movie_arg)
# if n <= 1:
#     print("stream: not enough arguments")
# else:
#     movie = movie_name[1]
#     """To get torrents"""
#     r = requests.get(f'https://www.1377x.to/search/{movie}/1')
#     web = r.text
#     match = re.findall(r'href=[\'"]?([^\'" >]+)', web)
#     # print(match)
#     listOfTorrents = []
#     for i in match:
#         tor = "/torrent"
#         if tor in i:
#             listOfTorrents.append(i)
#     """To get magnet link"""
#     # print(listOfTorrents)
#     if listOfTorrents == []:
#         print("There's no movie with this name")
    
#     else:
#         mag = requests.get(f'https://www.1377x.to/{listOfTorrents[0]}')
#         getmag = mag.text
#         regex = r"\bmagnet.*\Bannounce"
#         matches = re.findall(regex,getmag)
#         print(matches[0])