// Import the ORM to create functions that will interact with the database.
var orm = require('../config/orm.js');

var burger = {
  all: function(cb){
    orm.all("burgers", function(res){
      cb(res);
    });
  },
  create: function(col, val, cb){
    orm.create("burgers", col, val, function(res){
      cb(res);
    });
  },
  update: function(col, val, condition, cb){
    orm.update("burgers", col, val, condition, function(res){
      cb(res);
    });
  }
};

module.exports = burger;