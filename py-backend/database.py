import psycopg2

inventionDB = psycopg2.connect("dbname=test user=postgres")

mycursor = inventionDB.cursor()

mycursor.execute("createdb mydb")
