// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
  all: function(table, cb){
    var queryString = "SELECT * FROM " + table;
    connection.query(queryString, function(err, result){
      if (err) throw err;
      cb(result);
    });
  },
  create: function(table, col, val, cb){
    var queryString = "INSERT INTO " + table + " (" + col + ") VALUES ('" + val + "')";
    console.log(queryString);
    connection.query(queryString, function(err, result){;
      if (err) throw err;
      cb(result);
    });
  },
  update: function(table,col,val,condition, cb){
    var queryString = "UPDATE " + table + " SET " + col + " = " + val + " WHERE " + condition;
    console.log(queryString);
    connection.query(queryString, function(err, result){
      if (err) throw err;
      cb(result);
    });
  }
};


module.exports = orm;