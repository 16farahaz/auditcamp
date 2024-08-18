const mongoose = require('mongoose');
const CryptoSchema = new mongoose.Schema({
  


    
    idste: {type:String},
    nomste:{type:String },
    State: { type: String,default:"blocked" },
    file: { type: String },
 // CRYPTOGRAPHY
 at81: { type: Boolean, default: false },
 at82: { type: String, default: "There's no recommendation for that" },
 at83: { type: Boolean, default: false },
 at84: { type: String, default: "There's no recommendation for that" }

});

const Crypto = mongoose.model('Crypto', CryptoSchema);

module.exports = Crypto;
