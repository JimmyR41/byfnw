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
  res.render('pages/about');
});

router.get('/contact', function(req,res){
  res.render('pages/contact');
});

router.post('/contact', function(req,res){

});
