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




def inventionMapper():

    for x in content:
        i = 1
        
        if i == 1:
            mapped_invent_name = x
            return mapped_invent_name
        elif i == 2:
            mapped_idea1 = x
            return mapped_idea1
        elif i == 3:
            mapped_idea2 = x
            return mapped_idea2
        elif i == 4:
            mapped_idea3 = x
            return mapped_idea3
        else:
            mapped_descript = x
            i = 1
            return mapped_descript

        i += 1
        

    



print(inventionMapper())
# print(content)
# print(soup.prettify())

# https://psnprofiles.com/guide/3895-dark-cloud-2-ideas-scoops-and-inventions-guide