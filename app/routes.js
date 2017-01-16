//set requirements
var express = require('express');
var path = require('path');


//create and export router object
var router = express.Router();
module.exports = router;

//set routes
router.get('/', function(req,res){
  res.render('pages/index');
});

router.get('/about', function(req,res){
  var users = [
    {name: 'Holly', email: 'holly@scotch.io', avatar: 'http://placekitten.com/700/700'},
    {name: 'Chris', email: 'chris@scotch.io', avatar: 'http://placekitten.com/800/800'},
    {name: 'Ado', email: 'ado@scotch.io', avatar: 'http://placekitten.com/600/600'},
    {name: 'Nick', email: 'nick@scotch.io', avatar: 'http://placekitten.com/700/700'}
  ];
  res.render('pages/about', { users: users });
});

router.get('/contact', function(req,res){
  res.render('pages/contact');
});

router.post('/contact', function(req,res){
  //console.log(req.body);
  res.send('Thanks for contacting us ' + req.body.name + '! We will respond shortly');
});
