var mongoose = require('mongoose');

var apocdbSchema = new mongoose.Schema({
    FullName:String,
    FatherName:String,
    EmainID:String,    
    Password:String,
    AadharCardNum:String,
    DOB:{ type: Date, default: Date.now },
    Gender:String,
    Addr1:String,
    Addr2:String,
    Distict:String,
    State:String,
    PostalCode:String,
    Telephone:String,
    RefID:String,
    isPaymentMade:boolean,
    URefID:String,
    ApocID:String,
    Added_Dt:{ type: Date, default: Date.now },
    Updated_Dt:{ type: Date, default: Date.now },
    Cast:String    
});

module.exports = mongoose.model('apocdb', apocdbSchema);
