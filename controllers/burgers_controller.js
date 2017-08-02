var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res){
    db.Burgers.findAll().then(function(result){
      var burgersObj = {
      burgers: result
    };
    res.render("index", burgersObj);
    });
  });

  app.post("/", function(req,res){
    db.Burgers.create({
      burger_name: req.body.burger_name
    }).then(function(){
      res.redirect('/');
    });      
  });

  app.put("/:id", function(req, res){
    var update = {"devoured" : req.body.devour};
    db.Burgers.update(update, {
      where: {
        id: req.params.id
      }
    }).then(function(){
      res.redirect('/');
    });
  });
};

