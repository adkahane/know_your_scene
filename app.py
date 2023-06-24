from flask import Flask, render_template, request
from flask_mysqldb import MySQL

app = Flask(__name__)
app.config.from_pyfile('config.py')

# Create MySQL instance
mysql = MySQL(app)

# Homepage route
@app.route('/')
def index():
    return render_template('index.html')

# Add a show to the DB
@app.route('/add-show')
def add_show():
    return render_template('add_show.html')

# Search Band Route
@app.route("/search-band")
def search_band():
    print("You are searching for a band")
    # Retrieve the search query from the URL parameters
    search_query = request.args.get("search_query")

    # Execute the SQL query
    cursor = mysql.connection.cursor()
    query = """
    SELECT band_name, genre, band_state FROM band
    WHERE band_name LIKE %s
    """
    cursor.execute(query, (f"%{search_query}%",))

    # Fetch the query results
    results = cursor.fetchall()
    print(results)
    # Close the cursor
    cursor.close()

    # Render the template with the search results
    return render_template("search_bands.html", results=results)

# Render Login Page
@app.route('/login')
def login():
    return render_template('login.html')

# Display Scene information page
@app.route('/the-scene')
def the_scene():
    return render_template('the_scene.html')

# Display a show information page
@app.route('/show')
def show():
    return render_template('show.html')

# Display a band information page
@app.route('/band')
def band():
    return render_template('band.html')

if __name__ == "__main__":
    app.run()

