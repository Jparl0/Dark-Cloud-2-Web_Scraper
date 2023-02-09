import os
import psycopg2


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


mycursor.execute('INSERT INTO inventions (name, idea1, idea2, idea3, descript)'
            'VALUES (%s, %s, %s, %s, %s)',
            ('Aquarium',
             'Fountain',
             'Window',
             'Wooden Box',
             'Used to feed and raise fish'))

mycursor.execute('INSERT INTO inventions (name, idea1, idea2, idea3, descript)'
            'VALUES (%s, %s, %s, %s, %s)',
            ('Bandit Brassard',
             'Clock',
             'Gold Store',
             'Show Window',
             'Magic Bracelet for Monica'))


conn.commit()

mycursor.close()
conn.close()