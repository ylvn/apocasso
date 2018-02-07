var express = require('express');
var multer = require('multer'); 
var path = require('path');
var cors = require('cors');
var bodyParser = require('body-parser');
var sha512 = require('js-sha512');
var index = require('./routes/index');
var users = require('./routes/users');
var payments = require('./routes/payments');
var spends = require('./routes/spends');

var port = 3000;

var app = express();

//View engine

app.set('views', path.join(__dirname, 'app'));
app.set('view engine','ejs');
app.engine('html', require('ejs').renderFile);


//Set static folder

app.use(express.static(path.join(__dirname, 'uploads')));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
var storage = multer.diskStorage({
    // destino del fichero
    destination: function (req, file, cb) {
        cb(null, './assets/img/')
    },
    // renombrar fichero
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

var upload = multer({ storage: storage });

app.post("/upload", upload.array("uploads[]", 12), function (req, res) {
    console.log('files', req.files);
    res.send(req.files);
});

app.post('/createHash',function (req, res){
    var user = req.body;
    var salt = 'Mcnw58T8Bc';
    console.log('files', req.body);
    res.send(req.body);
    // var hash = sha512(req.body.preHashString + salt);
    // console.log(hash);
    // res.send({success : true, hash: hash});
});

app.post('/PaymentStatus', function (req, res) {
    console.log(req.body);
    res.send(req.body);
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
app.use('/', index);
app.use('/api', users);
app.use('/api', payments);
app.use('/api', spends);

app.listen(port, function(){
console.log('server started on port '+ port)
});
