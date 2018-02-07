var express = require('express');
var multer = require("multer");
var router = express.Router();
var bodyParser = require('body-parser');
var sha512 = require('js-sha512');
var opn = require('opn');



var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/apocdb');

// Get all Payments
router.get('/payments', function(req, res, next){
    db.payments.find(function(err, payments){
        if(err){
            res.send(err);
        }
        res.json(payments);
    })
});


// Get single payment
router.get('/payment/:id', function(req, res, next){
    db.payments.findOne({_id:mongojs.ObjectId(req.params.id)},function(err, payment){
        if(err){
            res.send(err);
        }
        res.json(payment);
    })
});


// Get gettotalpayment
router.get('/gettotalpayment', function(req, res, next){
    // db.payments.aggregate( [ { $group: { _id: null, total: { $sum: "amount" } } } ] ,function(err, payment){
    //     if(err){
    //         res.send(err);
    //     }
    //     console.log(payment);
    //     res.json(payment);
    // })


    db.payments.find(function(err, payments){
        if(err){
            res.send(err);
        }
        var calculatedAmount = 0;
        for(var i = 0;i<payments.length;i++){
            calculatedAmount+= parseFloat(payments[i].amount);
        }

        res.json({'totalAmount': calculatedAmount});
    })  
});

// save payment
router.post('/payment', function(req, res, next){
    var payment = req.body;
    var isValid = true;
    if(!payment.userid)
        isValid = false;
    else if(!payment.amount)
        isValid = false;
        else if(!payment.paymentid)
        isValid = false;

    if(!isValid){
        res.status(400);
        res.json({"error": "Bad Data"});
    }
    else{
        db.payments.save(payment,function(err, payment){
            if(err){
                res.send(err);
            }
            res.json(payment);
        })
    }    
});


router.post('/makepayment', function(req, res, next){
    var payment = req.body;
    var salt = 'Mcnw58T8Bc';
    console.log(req.body.preHashString + salt);
    var hash = sha512(req.body.preHashString + salt);
    console.log(hash);
    res.send({success : true, hash: hash});  
});

router.post('/paymentstatus', function(req, res, next){
    console.log(req.body);
    var payment = req.body;
    console.log(payment.txnid);
    var isValid = true;
    if (payment.status == "success") {

        db.apocuser.findOne({_id:mongojs.ObjectId(payment.txnid)},function(err, user){
            if(err){
                res.send(err);
            }
            user.isPaymentMade = true;

            db.apocuser.update({ _id: mongojs.ObjectId(payment.txnid) },user,{}, function (err, test) {
                if (err) {
                    res.send(err);
                }
               
                var addpayment = {
                    paymentid: payment.payuMoneyId,
                    userid: payment.txnid,
                    amount: (parseFloat(payment.amount) - 150),
                    added_dt: payment.addedon,
                    description: payment.productinfo
                }

                db.payments.save(addpayment, function (err, apayment) {
                    if (err) {
                        res.send(err);
                        res.redirect('http://localhost:4200/home');
                    }
                    //res.json(apayment);
                    res.redirect('http://localhost:4200/success/'+ payment.txnid);
                    //require("openurl").open("http://localhost:4200/home")
                    //opn('http://localhost:4200/home');
                    //window.open("http://localhost:4200/home","_self")
                })       

            })
        })

        // if (!isValid) {
        //     res.status(400);
        //     res.json({ "error": "Bad Data" });
        // }
        // else {
        //     db.payments.save(payment, function (err, payment) {
        //         if (err) {
        //             res.send(err);
        //         }
        //         res.json(payment);
        //     })
        // }
    }    


    //res.send(req.body);
});

module.exports= router;