var db = require("../models");

module.exports = function (app) {

  // GET request to display all burgers from DATABASE on home page
  app.get("/", function (req, res) {
    db.Burgers.findAll({
      // ORDER the devoured results by time/date devoured
      order: ['updatedAt'],
      // JOIN to include associated customer if burger has been devoured    
      include: db.Customers
    }).then(function (result) {
      console.log(result);
      var burgersObj = {
        burgers: result
      };
      res.render("index", burgersObj);
    });
  });

  // POST/CREATE new burgers in DATABASE
  app.post("/", function (req, res) {
    db.Burgers.create({
      burger_name: req.body.burger_name
    }).then(function () {
      res.redirect('/');
    });
  });

  // PUT UPDATE devoured boolean in DATABASE and Find/Create customer to associate
  app.put("/devour", function (req, res) {
    var customerId;
    // Check to see if the customer name entered already exists, if not create
    db.Customers.findOrCreate({
      where: {
        customer_name: req.body.customer_name
      }
    })// Take the the returned user data and update/associate the burger record accordingly
    .spread((user, created) => {
      if (created) console.log("User created");
      customerId = user.id;
      var update = {
        "devoured": req.body.devoured,
        "CustomerId": customerId
      };
      db.Burgers.update(update, {
        where: {
          id: req.body.id
        }
      }).then(function () {
        res.redirect(303, '/');
      });
    })
  });
};

