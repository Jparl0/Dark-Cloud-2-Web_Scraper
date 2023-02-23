import requests
from dc2types import Invention
from bs4 import BeautifulSoup

#  Get Request
r = requests.get('https://psnprofiles.com/guide/3895-dark-cloud-2-ideas-scoops-and-inventions-guide')

# HTML Parser
soup = BeautifulSoup(r.content, 'html.parser')

# finding Invention Section
invents = soup.find('div', id='3-inventions')

invents_sect = invents.find('div', class_='section-original')

invents_sect2 = invents_sect.find('div', class_='fr-view box light guide no-top-border')

content = invents_sect2.tbody
invent_Dict = {
    'invent1': {}
}

def inventionMapper():

    invention_container = []
    for tr in content:
        
        # TO DO - 
        #  opt #1 - read documentation for the specific func call for Requests, BeautifulSoup.content
        #       need to get plain text from this HTML content

        temp_invention = []
        for td in tr:
            if td != '\n':
                temp_invention.append(td)
        invention_container.append(temp_invention)
    return invention_container


print(inventionMapper())

# print(content)

