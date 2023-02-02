import requests
from bs4 import BeautifulSoup

#  Get Request
r = requests.get('https://psnprofiles.com/guide/3895-dark-cloud-2-ideas-scoops-and-inventions-guide')

# HTML Parser
soup = BeautifulSoup(r.content, 'html.parser')

# finding Invention Section
invents = soup.find('div', id='3-inventions')


invents_sect = invents.find("div", class_='section-original')

invents_sect2 = invents_sect.find("div", class_='fr-view box light guide no-top-border')

invents_table = invents_sect2.find_next('table')

content = invents_sect.find_all('tr')

print(content)
# print(soup.prettify())

# https://psnprofiles.com/guide/3895-dark-cloud-2-ideas-scoops-and-inventions-guide