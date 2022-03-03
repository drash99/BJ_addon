
import json
from bs4 import BeautifulSoup

f = open('algos.html')
html = f.read()

soup = BeautifulSoup(html, 'html.parser')


ko = dict()
en = dict()
table = soup.find_all("tr")
for t in table:
    tabletemp = t.find_all("a")
    nameko = tabletemp[0].text
    nameen = tabletemp[1].text
    no = int(tabletemp[0]['href'].split('/')[-1])
    ko[nameko] = no
    en[nameen] = no
with open("algosko.json", "w") as json_file:
    json.dump(ko, json_file, ensure_ascii=False)
with open("algosen.json", "w") as json_file:
    json.dump(en, json_file)