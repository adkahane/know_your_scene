var express = require("express");
var path = require('path');
var band = require("../models/band.js");
var song = require("../models/song.js");
var show = require("../models/show.js");
var router = express.Router();

// API ROUTES

// Get route to index
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Get route to grab all bands
router.get("/bands", function(req,res) {
  band.selectAll(function(bandData) {
    console.log(bandData);
    res.json(bandData);
  });
});

// Get route to grab all bands by state
router.get("/bands/:state", function(req,res) {
  band.selectAllWhere(req.params.state, function(bandData) {
    console.log(bandData);
    res.json(bandData);
  });
});

// Get route to grab all bands by City

// Get route to grab all songs
router.get("/songs", function(req,res) {
  song.selectAll(function(songData) {
    console.log(songData);
    res.json(songData);
  });
});

// GET route to grab a band and all of their songs
router.get("/bandInfo/:band", function(req,res) {
  band.selectOne(req.params.band, function(bandData) {
    console.log(bandData);
    res.json(bandData);
  });
});

// TODO
// A GET route to grab all of a band's shows

// Export routes to server.js
module.exports = router;