from flask import Flask

app = Flask(__name__)

# Inventions API Route

@app.route("/inventions")
def inventions():
    return {"inventions": ["i1", "i2"]}

if __name__ == "__main__":
    app.run(debug=True)