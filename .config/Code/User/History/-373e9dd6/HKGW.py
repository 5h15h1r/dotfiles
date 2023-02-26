
regex = r"\bmagnet.*\Bannounce"
matches = re.findall(regex,web)
print(matches)