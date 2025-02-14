from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Mock data (Replace with real API data)
crime_data = {
    'USA': [{'type': 'Theft', 'rate': 500}, {'type': 'Assault', 'rate': 300}],
    'UK': [{'type': 'Theft', 'rate': 200}, {'type': 'Assault', 'rate': 150}],
    'Global': [{'type': 'Theft', 'rate': 1000}, {'type': 'Assault', 'rate': 800}]
}

@app.route('/crime-data', methods=['GET'])
def get_crime_data():
    country = request.args.get('country', 'Global')
    data = crime_data.get(country, [])
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)  # Ensure the port is specified