from flask import Flask, render_template, request
from flask_mysqldb import MySQL
from flask import jsonify

app = Flask(__name__)
app.config.from_pyfile('config.py')

# Create MySQL instance
mysql = MySQL(app)

# Variables
state_mapping = {
	"Alabama":"AL",
	"Alaska":"AK",
	"Arizona":"AZ", 
	"Arkansas":"", 
	"California":"", 
	"Colorado":"", 
	"Connecticut":"", 
	"Delaware":"",
	"Florida":"", 
	"Georgia":"", 
	"Hawaii":"", 
	"Idaho":"", 
	"Illinois":"", 
	"Indiana":"", 
	"Iowa":"", 
	"Kansas":"", 
	"Kentucky":"",
	"Louisiana":"", 
	"Maine":"", 
	"Maryland":"", 
	"Massachusetts":"", 
	"Michigan":"", 
	"Minnesota":"", 
	"Mississippi":"",
	"Missouri":"", 
	"Montana":"", 
	"Nebraska":"", 
	"Nevada":"", 
	"New Hampshire":"", 
	"New Jersey":"NJ", 
	"New Mexico":"",
	"New York":"", 
	"North Carolina":"", 
	"North Dakota":"", 
	"Ohio":"", 
	"Oklahoma":"", 
	"Oregon":"", 
	"Pennsylvania":"",
	"Rhode Island":"", 
	"South Carolina":"", 
	"South Dakota":"", 
	"Tennessee":"", 
	"Texas":"", 
	"Utah":"", 
	"Vermont":"",
	"Virginia":"VA", 
	"Washington":"", 
	"West Virginia":"", 
	"Wisconsin":"", 
	"Wyoming":""
}

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
	print("Rendering your Scene...")

	# Get the search query parameters from the request
	# Convert state name to abreviation
	state = str(request.args.get('state'))
	city = str(request.args.get('city'))
	scene = str(request.args.get('scene'))
	start_date = request.args.get('start_date')
	end_date = request.args.get('end_date')

	# Execute SQL
	cursor = mysql.connection.cursor()
	query = """SELECT concert_id, concert_venue, concert_date, concert_city, concert_state, band_name FROM concert 
	INNER JOIN concert_lineup ON 
	concert.concert_id = concert_lineup._concert_id 
	JOIN band ON 
	band.band_id = concert_lineup._band_id
	WHERE 1=1
	"""

	data= []

	# Add conditions based on the presence of parameter values
	if state:
		query += " AND concert_state = '%s'" %(state)
		data.append(state)
	if city:
		query += " AND concert_city = '%s'" %(city)
		data.append(city)
	if scene:
		query += " AND scene = '%s'" %(scene)
		data.append(scene)
	query += ";"
	
	print(data)
	cursor.execute(query)

	# Fetch the query results
	results = cursor.fetchall()
	print(results)

	# Close the cursor
	cursor.close()

	# Render the template with the search results
	return render_template('index.html', results=results)

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

