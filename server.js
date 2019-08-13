var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8000;

var app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Import routes for the server to access
var routes = require("./routes/router.js");

app.use("/", routes);
app.listen(PORT);