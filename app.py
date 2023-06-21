from flask import Flask, render_template
from flask_mysql import MySQL

app = Flask(__name__)
app.config.from_pyfile('config.py')
mysql = MySQL(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add-show')
def add_show():
    return render_template('add_show.html')

@app.route('/search')
def find_show():
    return render_template('search.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/my-scene')
def my_scene():
    return render_template('my_scene.html')

d
