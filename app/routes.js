//require express
var express = require('express');
var path = require('path');

//create router object
var router = express.Router();

//export our router
module.exports = router;

//route for home
router.get('/',function(req,res){
  res.sendFile(path.join(__dirname, '../index.html'));
});

//route for about
router.get('/about', function(req,res){
  res.sendFile(path.join(__dirname,'../about.html'));
});

//routes for contact
router.get('/contact');
router.post('/contact');
