import requests
from dc2types import Invention
from bs4 import BeautifulSoup

#  Get Request
r = requests.get('https://psnprofiles.com/guide/3895-dark-cloud-2-ideas-scoops-and-inventions-guide')

# HTML Parser
soup = BeautifulSoup(r.content, 'html.parser')

# finding Invention Section
invents = soup.find('div', id='3-inventions')

invents_sect = invents.find("div", class_='section-original')

invents_sect2 = invents_sect.find("div", class_='fr-view box light guide no-top-border')

content = invents_sect2.tbody
invent_Dict = {
    "invent1": {}
}

def inventionMapper():

    temp_invent_Dict = {
        "name" = "",
        "ideas" = ["", "", ""],
        "description"
    }
    for tr in content:
        temp_invention = ["", "", "", "", ""]
        i = 0
        for td in tr:
            i += 1
            if i == 1:
                mapped_invent_name = td
                temp_invention[0] = mapped_invent_name
            elif i == 2:
                mapped_idea1 = td
                temp_invention[1] = mapped_idea1
            elif i == 3:
                mapped_idea2 = td
                temp_invention[2] = mapped_idea2
            elif i == 4:
                mapped_idea3 = td
                temp_invention[3] = mapped_idea3
            else:
                mapped_descript = td
                temp_invention[4] = mapped_descript
                
                return temp_invention
                # return temp_invention
            

                
    
print(inventionMapper())

# print(content)
# print(invents_sect2)
# print(soup.prettify())

# https://psnprofiles.com/guide/3895-dark-cloud-2-ideas-scoops-and-inventions-guide