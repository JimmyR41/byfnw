//set requirements
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var expressLayouts = require('express-ejs-layouts');
var port = process.env.PORT || 8080;

//set and use view engine
app.set('view engine', 'ejs');
app.use(expressLayouts);

//use body parser
app.use(bodyParser.urlencoded({ extended: true }));

//import router object and use router
var router = require('./app/routes');
app.use('/', router);

//set static files
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function(req,res){
  console.log('Listening on 8080');
});
