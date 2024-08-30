from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/convert', methods=['POST'])
def convert():
    data = request.json
    if data['type'] == 'length':
        result = data['value'] * 0.621371  # KM to Miles conversion
    # Add more conversion logic here
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run()
