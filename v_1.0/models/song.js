var orm = require("../config/orm.js");

var song = {
  selectAll: function(cp) {
    orm.selectAll("song", function(res) {
      cp(res);
    });
  },
  selectOne: function(searchInput, cb) {
    orm.selectOne("song", searchInput, function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("song", cols, vals, function(res) {
      cp(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("song", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export ORM functions to controller
module.exports = song;