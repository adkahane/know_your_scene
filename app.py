from flask import Flask, render_template
from flask_mysql import MySQL

app = Flask(__name__)
app.config.from_pyfile('config.py')

# Create MySQL instance
mysql = MySQL(app)

# Homepage route
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/add-show')
def add_show():
    return render_template('add_show.html')

# Search Band Route
@app.route("/search-band")
def search_band():
    # Retrieve the search query from the URL parameters
    search_query = request.args.get("search_query")

    # Execute the SQL query
    cursor = mysql.connection.cursor()
    query = """
    SELECT concert_id, concert_venue, concert_date, concert_city, concert_state, band_name
    FROM concert
    INNER JOIN concert_lineup ON concert.concert_id = concert_lineup._concert_id
    JOIN band ON band.band_id = concert_lineup._band_id
    WHERE band_name LIKE %s
    """
    cursor.execute(query, (f"%{search_query}%",))

    # Fetch the query results
    results = cursor.fetchall()

    # Close the cursor
    cursor.close()

    # Render the template with the search results
    return render_template("index.html", results=results)

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/my-scene')
def my_scene():
    return render_template('my_scene.html')

if __name__ == "__main__":
    app.run()

