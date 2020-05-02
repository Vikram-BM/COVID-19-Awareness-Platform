#!/usr/bin/python3

import requests, re
from bs4 import BeautifulSoup
from flask import Flask, render_template

app = Flask(__name__)

def RefreshNumbers (URL):
   page = requests.get(URL)
   soup = BeautifulSoup(page.content, 'html.parser')
   soup.prettify
   ul_lists = soup.find_all('ul')
   len(ul_lists)
   stat_list = ul_lists[6]
   stat_dict = {}
   r1 = soup.find(class_='status-update')
   r2 = soup.find(class_='bg-blue')
   r3 = soup.find(class_='bg-green')
   r4 = soup.find(class_='bg-red')
   r5 = soup.find(class_='bg-orange')
   rA = r1.find_all('span')
   rB = r2.find_all('strong')
   rC = r3.find_all('strong')
   rD = r4.find_all('strong')
   rE = r5.find_all('strong')
   timeC = str(re.findall(".+\>(.+)\<.+", str(rA))[0])
   activeC = str(re.findall("[0-9]+", str(rB))[0])
   curedC = str(re.findall("[0-9]+", str(rC))[0])
   deathC = str(re.findall("[0-9]+", str(rD))[0])
   migratedC = str(re.findall("[0-9]+", str(rE))[0])
   return timeC, activeC, curedC, deathC, migratedC

@app.route('/')
def LoadWebPage():
   timeC, activeC, curedC, deathC, migratedC = RefreshNumbers ('https://www.mohfw.gov.in/')
   return render_template('Main.html', tVal = timeC, aVal = activeC, cVal = curedC, dVal = deathC, mVal = migratedC)

if __name__ == '__main__':
   app.run()
