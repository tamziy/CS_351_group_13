from flask import Flask, jsonify, request
from flask_cors import CORS
from trie import Trie

app = Flask(__name__)
CORS(app)  # allow requests from your Next.js frontend (localhost:3000)

trie = Trie()
trie.getFromFile("classes.txt")

@app.route('/')
def home():
    return jsonify(message="UIC WIKI TEST")

# This connects to the frontend search bar for autocomplete.
# The frontend just needs to make a GET request to this URL with what the user types:
# Example: http://127.0.0.1:5000/suggest?q=CS%204
#%20 is a space, so it would return {suggestions: "suggestions": ["CS 401", "CS 402", "CS 499"]}
# It’ll return a list of class name suggestions in JSON that the search bar can show live.

@app.route('/suggest')
def suggest():
    q = request.args.get("q", "").upper()
    suggestions = trie.starts_with(q)
    return jsonify({"suggestions": suggestions})



if __name__ == '__main__':
    # debug=True enables live reloads when you save changes
    app.run(debug=True)
