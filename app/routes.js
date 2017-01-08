//require express
var express = require('express');

//create router object
var router = express.Router();

//export our router
module.exports = router;

//route for home
router.get('/',function(req,res){
  res.send('Hello, World');
});

//route for about
router.get('/about', function(req,res){
  res.send('Hello from about');
});

//routes for contact
router.get('/contact');
router.post('/contact');
