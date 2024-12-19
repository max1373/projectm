from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/first')
def index():
    return render_template('medical-consultation.html')

@app.route('/second')
def index():
    return render_template('test-results.html')

@app.route('/theird')
def index():
    return render_template('general-exams.html')

@app.route('/forth')
def index():
    return render_template('account.html')

if __name__ == '__main__':
    app.run(debug=True)
