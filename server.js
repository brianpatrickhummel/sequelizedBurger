var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var PORT = process.env.PORT || 3000;
var app = express();

// Serve static content for the app from the 'public' directory in the application directory.
app.use(express.static('public'));

// Body-Parser Config
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// Hanldebars Config
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
// Override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Requiring our models for syncing
var db = require("./models");

// Import routes and give the server access to them.
require('./controllers/burgers_controller.js')(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});