//require our dependencies
var express = require('express');
var app = express();
var port = 8080;

//route our app
var router = require('./app/routes');
app.use('/', router);

//set static files
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function(req,res){
  console.log('Listening on 8080');
});
