var orm = require("../config/orm.js");

var show = {
  selectAll: function(cp) {
    orm.selectAll("show", function(res) {
      cp(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("show", cols, vals, function(res) {
      cp(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("show", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export ORM functions to controller
module.exports = show;