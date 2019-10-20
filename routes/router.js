var express = require("express");
var path = require('path');
var band = require("../models/band.js");
var router = express.Router();

//get route to index
router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

router.get("/bands", function(req,res) {
  band.selectAll(function(bandData) {
    console.log(bandData);
    res.json(bandData);
  });
});

router.get("/songs", function(req,res) {
  song.selectAll(function(songData) {
    console.log(songData);
  });
});

// Export routes to server.js
module.exports = router;