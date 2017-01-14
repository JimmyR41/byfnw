//require express
var express = require('express');
var path = require('path');

//create router object
var router = express.Router();

//export our router
module.exports = router;

//route for home
router.get('/',function(req,res){
  res.render('pages/index.ejs');
});

//route for about
router.get('/about', function(req,res){
  res.render('pages/about.ejs');
});

//routes for contact
router.get('/contact', function(req,res){
    res.render('pages/contact.ejs');
});
router.post('/contact', function(req,res){
    res.render('pages/contact.ejs');
});
