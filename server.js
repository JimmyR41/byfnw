//require our dependencies
var express = require('express');
var app = express();
var expresslayouts = require('express-ejs-layouts');
var port = process.env.PORT || 8080;

//set view engine use expresslayouts
app.set('view engine', 'ejs');
app.use(expresslayouts);

//route our app
var router = require('./app/routes');
app.use('/', router);

//set static files
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function(req,res){
  console.log('Listening on 8080');
});
