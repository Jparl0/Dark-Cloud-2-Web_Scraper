import os
import psycopg2
from scrape import inventionMapper

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

def seedScrapedInventData(scrapedInventions):
        for mappedInvent in scrapedInventions:
                mycursor.execute('INSERT INTO inventions (name, idea1, idea2, idea3, descript)'
                                'VALUES (%s, %s, %s, %s, %s)',
                                (mappedInvent[0],
                                mappedInvent[1],
                                mappedInvent[2],
                                mappedInvent[3],
                                mappedInvent[4])
                                )


# print(inventionMapper())
seedScrapedInventData(inventionMapper())
conn.commit()

mycursor.close()
conn.close()

