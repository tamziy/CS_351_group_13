from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # allow requests from your Next.js frontend (localhost:3000)

@app.route('/')
def home():
    return jsonify(message="UIC WIKI TEST")

if __name__ == '__main__':
    # debug=True enables live reloads when you save changes
    app.run(debug=True)
