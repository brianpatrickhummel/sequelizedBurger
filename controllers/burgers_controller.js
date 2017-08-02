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

  app.put("/", function(req, res){
    var customerId;
    db.Customers.findOrCreate({
      where: {
        customer_name: req.body.customer_name
      }
    })
    .spread((user,created) => {
      if (created) console.log("User created");
      customerId = user.id;
      console.log(customerId);
      console.log(req.body.devoured);
      console.log(req.body.id);
      var update = {
        "devoured" : req.body.devoured,
        "CustomerId" : customerId
      };
      db.Burgers.update(update, {
        where: {
          id: req.body.id
        }
      }).then(function(){
        // res.redirect('/');
      });
    })
    
  });
};

