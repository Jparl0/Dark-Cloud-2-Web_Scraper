import flask
import json
from flask import jsonify

app = Flask(__name__)
app.config["DEBUG"] = True
app.json.compact = False

migrate = Migrate(app, db)


def get_invent():
    sql = """select * from inventions where exist=1 ORDER
                        BY random() LIMIT 20
           """
    pg_cur.execute(sql)
    data = pg_cur.fetchall()
    return data
