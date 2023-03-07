import os
import psycopg2
from scrape import table_mapper, invents_body

conn = psycopg2.connect( 
        host="localhost",
        database="flask_db",
        user=os.environ['DB_USERNAME'],
        password=os.environ['DB_PASSWORD'])

mycursor = conn.cursor()


# Create table from scratch, deletion of old table at start
mycursor.execute('DROP TABLE IF EXISTS inventions;')
mycursor.execute('CREATE TABLE inventions (id serial PRIMARY KEY,'
                                 'name varchar (50) NOT NULL,'
                                 'idea1 varchar (100) NOT NULL,'
                                 'idea2 varchar (100) NOT NULL,'
                                 'idea3 varchar (100) NOT NULL,'
                                 'descript varchar (500) NOT NULL,'
                                 'date_added date DEFAULT CURRENT_TIMESTAMP);'
                                 )

# used to seed invention data into the PostgreSQL server
def seed_scraped_invents(scraped_inventions):
        for mapped_invent in scraped_inventions:
                mycursor.execute('INSERT INTO inventions (name, idea1, idea2, idea3, descript)'
                                'VALUES (%s, %s, %s, %s, %s)',
                                (mapped_invent[0],
                                mapped_invent[1],
                                mapped_invent[2],
                                mapped_invent[3],
                                mapped_invent[4])
                                )


# print(inventionMapper())
seed_scraped_invents(table_mapper(invents_body))
conn.commit()

mycursor.close()
conn.close()

