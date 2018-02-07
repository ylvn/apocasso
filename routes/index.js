var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    console.log('index calling');
   // res.render('http://localhost:4200/');
    res.redirect('http://localhost:4200/home')
});

module.exports= router;