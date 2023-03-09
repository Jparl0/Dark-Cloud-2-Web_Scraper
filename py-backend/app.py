import os
import psycopg2
from flask import jsonify
import json
from routes import get_invent

from flask import Flask

app = Flask(__name__)
app.config["DEBUG"] = True
app.json.compact = False

def get_db_connection():
    conn = psycopg2.connect(host="localhost",
                            database="dc2_py_tracker",
                            user=os.environ['DB_USERNAME'],
                            password=os.environ['DB_PASSWORD'])
    return conn

@app.route('/')
def index():
    return "An index for Inventions/Scoops/Ideas API for Dark Cloud 2"

@app.route('/inventions', methods=['GET'])
def get_inventions():
    response = jsonify(get_invent())
    return response

if __name__ == '__main__':
    app.run(host=os.getenv("app_host"), port="5005")