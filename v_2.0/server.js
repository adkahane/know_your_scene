const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

//app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import routes for the server to access
const routes = require("./routes/router.js");
app.use("/", routes);

app.listen(PORT, function() {
  console.log("Listening on port: %s", PORT);
});