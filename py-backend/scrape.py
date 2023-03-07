import requests
from bs4 import BeautifulSoup

#  Get Request
r = requests.get('https://psnprofiles.com/guide/3895-dark-cloud-2-ideas-scoops-and-inventions-guide')

# HTML Parser
soup = BeautifulSoup(r.content, 'html.parser')

# finding Invention Section
invents = soup.find('div', id='3-inventions')
invents_sect = invents.find('div', class_='section-original')
invents_sect2 = invents_sect.find('div', class_='fr-view box light guide no-top-border')
invents_body = invents_sect2.tbody

# used to iterate over the HTML table that is selected and map it into an empty list
def table_mapper(table):

    table_container = []
    for tr in table:
        temp_container = []
        
        # strips content of any extra spacing
        for td in tr.stripped_strings:
            temp_container.append(td)

        # only appends data iterated over if the value is not null
        if temp_container != []:
            table_container.append(temp_container)
            
    return table_container

