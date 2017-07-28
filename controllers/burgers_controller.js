var burger = require("../models/burger.js");
var express = require("express");
var router = express.Router();

router.get("/", function(req, res){
  burger.all(function(data){
    var burgersObj = {
      burgers: data
    };
    res.render("index", burgersObj);
  });
});

router.post("/", function(req,res){
  burger.create("burger_name", req.body.burger_name, function(){
    res.redirect("/");
  });
});

router.put("/:id", function(req, res){
  var devoured = req.body.devour;
  console.log('devoured = ' + devoured);
  var condition = "id = " + req.params.id;
  burger.update("devoured", devoured, condition, function() {
    res.redirect("/");
  });
});


module.exports = router;