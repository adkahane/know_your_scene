var orm = require("../config/orm.js");

var band = {
  selectAll: function(cb) {
    orm.selectAll("band", function(res) {
      cb(res);
    });
  },
  selectAllWhere: function(searchInput, cb) {
    orm.selectAllWhere("band", searchInput, function(res) {
      cb(res);
    });
  },
  selectOne: function(searchInput, cb) {
    orm.selectOne("band", searchInput, function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("band", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("band", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export ORM functions to controller
module.exports = band;