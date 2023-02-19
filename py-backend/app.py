import os
import psycopg2
from flask import Flask, render_template

app = Flask(__name__)

def get_db_connection():
    conn = psycopg2.connect(host="localhost",
                            database="dc2_py_tracker",
                            user=os.environ['DB_USERNAME'],
                            password=os.environ['DB_PASSWORD'])
    return conn

@app.route('/')

def index():
    conn = get_db_connection
    cur = conn.cursor()
    cur.execute('SELECT * FROM inventions;')
    invents = cur.fetchall()
    cur.close()
    conn.close()
    return render_template('index.js', invents=invents)


