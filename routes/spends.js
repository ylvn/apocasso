var express = require('express');
var multer = require("multer");
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/apocdb');

// Get all spends
router.get('/spends', function(req, res, next){
    db.spends.find(function(err, spends){
        if(err){
            res.send(err);
        }
        res.json(spends);
    })
});

// Get gettotalspend
router.get('/gettotalspend', function(req, res, next){
    db.spends.aggregate( [ { $group: { _id: null, total: { $sum: "$amount" } } } ] ,function(err, spend){
        if(err){
            res.send(err);
        }
        res.json(spend);
    })
});

// Get single spend
router.get('/spend/:id', function(req, res, next){
    db.spends.findOne({_id:mongojs.ObjectId(req.params.id)},function(err, spend){
        if(err){
            res.send(err);
        }
        res.json(spends);
    })
});

// save spend
router.post('/spend', function(req, res, next){
    var spend = req.body;
    console.log(spend);
    var isValid = true;
    if(!spend.ApocId)
        isValid = false;
    else if(!spend.amount)
        isValid = false;
        else if(!spend.purpose)
        isValid = false;

    if(!isValid){
        res.status(400);
        res.json({"error": "Bad Data"});
    }
    else{
        db.apocuser.find(
            { "ApocID": spend.ApocId },
            function (err, user) {
                if (err) {
                    res.send(err);
                }
                console.log(user[0]._id);
                spend.userid = user[0]._id;
                db.spends.save(spend, function (err, spend) {
                    if (err) {
                        res.send(err);
                    }
                    res.json(spend);
                })
            }
        )       
    }    
});

// Delete spend
router.delete('/spend/:id', function(req, res, next){
    db.spends.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, spend){
        if(err){
            res.send(err);
        }
        res.json(spend);
    })
});

// Update spend
router.put('/spend/:id', function (req, res, next) {
    var spend = req.body;
    var updspend = {};

    if (spend.amount) {
        updspend.amount = user.amount;
    }

    if (spend.reason) {
        updspend.FatherName = spend.reason;
    }

    if (!upduser) {
        res.status(400);
        res.json({ "error": "Bad Data" })
    }
    else {
        db.apocuser.update({ _id: mongojs.ObjectId(req.params.id) },upduser,{}, function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        })
    }
});

module.exports= router;