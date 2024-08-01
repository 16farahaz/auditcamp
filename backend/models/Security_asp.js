const mongoose = require('mongoose');
const Security_aspSchema = new mongoose.Schema({
  
    State: { type: String,default:"blocked" },
    file: { type: String },
 // BUSINESS
 at173: { type: Boolean, default: false },
 at174: { type: String, default: "There's no recommendation for that" },
 at175: { type: Boolean, default: false },
 at176: { type: String, default: "There's no recommendation for that" }


});

const Security_asp = mongoose.model('Security_asp', Security_aspSchema);

module.exports = Security_asp;
