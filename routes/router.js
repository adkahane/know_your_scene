var express = require("express");
var path = require('path');
var band = require("../models/band.js");
var router = express.Router();

// API ROUTES

// Get route to index
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

// Get route to grab all bands
router.get("/bands", function(req,res) {
  band.selectAll(function(bandData) {
    console.log(bandData);
    res.json(bandData);
  });
});

// Get route to grab all songs
router.get("/songs", function(req,res) {
  song.selectAll(function(songData) {
    console.log(songData);
  });
});

// Export routes to server.js
module.exports = router;