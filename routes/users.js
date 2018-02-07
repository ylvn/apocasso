var express = require('express');
var multer = require("multer");
var router = express.Router();

var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/apocdb');

// Get all APOCUsers
router.get('/users', function(req, res, next){
    db.apocuser.find(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    })
});

// Get New APOCID
router.get('/getapocid', function (req, res, next) {
    var options = { "sort": [['_id', 'asc']] };
    // var tee = db.apocuser.find().sort({_id:1});
    // console.log(tee);

    var cursor = db.apocuser.find().limit(1).sort({ $natural: -1 });

    cursor.toArray(function (err, results) {
        if (err) throw err;
        console.log('%j', results);
        //  db.close();
        if (results[0]) {
            var ress = results[0].ApocID.split('APOC');
            console.log(ress);
            var newnum = parseInt(ress[1]) + 1;
            console.log(newnum);
            var ddata = 'APOC';
            for (var i = 0; i < 9; i++) {
                console.log(i);
                if ((newnum + '').length <= i) {
                    ddata = ddata.concat('0');
                    console.log(newnum.length);
                }
            }
            console.log(ddata);
            var newapocid = ddata + newnum;
            console.log(newapocid);
            res.json({ 'ApocID': newapocid });
        }
        else {
            res.json({ 'ApocID': 'APOC0000001' });
        }
    });



    // db.apocuser.findOne({}, options , function(err, doc) {
    //     if(err){
    //         res.send(err);
    //     }

    //     if (doc) {

    //         console.log(doc);
    //         db.apocuser.findOne({ _id: mongojs.ObjectId(doc._id) }, function (err, user) {
    //             if (err) {
    //                 res.send(err);
    //             }
    //             var ress = user.ApocID.split('APOC');
    //             console.log(ress);
    //             var newnum = parseInt(ress[1]) + 1;
    //             console.log(newnum);
    //             var ddata = 'APOC';
    //             for (var i = 0; i < 7; i++) {
    //                 console.log(i);
    //                 if ((newnum + '').length <= i) {
    //                     ddata = ddata.concat('0');
    //                     console.log(newnum.length);
    //                 }
    //             }
    //             console.log(ddata);
    //             var newapocid = ddata + newnum;
    //             console.log(newapocid);
    //             res.json({ 'ApocID': newapocid });
    //         })


    //     }
    //     else {
    //         res.json({ 'ApocID': 'APOC0000001' });
    //     }
    // });   
});

// Get single User
router.get('/user/:id', function(req, res, next){
    db.apocuser.findOne({_id:mongojs.ObjectId(req.params.id)},function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    })
});

// Get User Count
router.get('/getusercount', function(req, res, next){
    db.apocuser.count({},function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    })
});

// save User
router.post('/user', function(req, res, next){
    var user = req.body;
    console.log(user);
    var isValid = true;
    if(!user.FullName)
        isValid = false;
    else if(!user.FatherName)
        isValid = false;
    else if(!user.AadharCardNum)
        isValid = false;

        user.Status = 'Pending';
    if(!isValid){
        res.status(400);
        res.json({"error": "Bad Data"});
    }
    else{
        db.apocuser.save(user,function(err, user){
            if(err){
                res.send(err);
            }
            res.json(user);
        })
    }    
});

router.post('/checkUserCredantials', function (req, res, next) {
    var user = req.body;
    var isValid = true;
    if (!user.UserName)
        isValid = false;
    else if (!user.Password)
        isValid = false;

    if (!isValid) {
        res.status(400);
        res.json({ "error": "Bad Data" });
    }
    else {
        db.apocuser.find(
            { "ApocID": user.UserName },
            { "Password": user.Password }, function (err, user) {
                if (err) {
                    res.send(err);
                }
                res.json(user);
            }

        )
    }
});


// Delete user
router.delete('/user/:id', function(req, res, next){
    db.apocuser.remove({_id:mongojs.ObjectId(req.params.id)}, function(err, apocuser){
        if(err){
            res.send(err);
        }
        res.json(apocuser);
    })
});


// Update apocuser
router.put('/user/:id', function (req, res, next) {
    var user = req.body;
    console.log(user);
    var upduser = {};

    if (user.FullName) {
        upduser.FullName = user.FullName;
    }

    if (user.FatherName) {
        upduser.FatherName = user.FatherName;
    }
console.log(req.params.id);
    // if (!upduser) {
    //     res.status(400);
    //     res.json({ "error": "Bad Data" })
    // }
    // else {
        db.apocuser.update({ _id: mongojs.ObjectId(req.params.id) },{
            $set: {
                FullName: user.FullName,
                FatherName: user.FatherName,
                EmainID: user.EmainID,
                AadharCardNum: user.AadharCardNum,
                DOB: user.DOB,
                Cast: user.Cast,
                Addr1: user.Addr1,
                Addr2: user.Addr2,
                Distict: user.Distict,
                State: user.State,
                Telephone: user.Telephone,
                PostalCode: user.PostalCode,
                Updated_Dt: new Date(),
                Status:user.Status
            } 

        },{}, function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        })
    //}
});


//admin

router.post('/checkAdminCredantials', function (req, res, next) {
    var user = req.body;
    var isValid = true;
    if (!user.UserName)
        isValid = false;
    else if (!user.Password)
        isValid = false;

    if (!isValid) {
        res.status(400);
        res.json({ "error": "Bad Data" });
    }
    else {
        db.admin.find(
            { "username": user.UserName },
            { "password": user.Password }, function (err, user) {
                if (err) {
                    res.send(err);
                }
                res.json(user);
            }

        )
    }
});

router.post("/upload", multer({dest: "src/uploads/"}).array("uploads", 12), function(req, res) {
    console.log('hi');
    res.send(req.files);
});
module.exports= router;