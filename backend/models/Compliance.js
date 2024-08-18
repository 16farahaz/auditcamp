const mongoose = require('mongoose');
const   ComplianceSchema = new mongoose.Schema({
  


    
    idste: {type:String},
    nomste:{type:String },
    State: { type: String,default:"blocked" },
    file: { type: String },
 // COMPLIANCE
 at177: { type: Boolean, default: false },
 at178: { type: String, default: "There's no recommendation for that" },
 at179: { type: Boolean, default: false },
 at180: { type: String, default: "There's no recommendation for that" },
 at181: { type: Boolean, default: false },
 at182: { type: String, default: "There's no recommendation for that" },
 at183: { type: Boolean, default: false },
 at184: { type: String, default: "There's no recommendation for that" },
 at185: { type: Boolean, default: false },
 at186: { type: String, default: "There's no recommendation for that" },
 at187: { type: Boolean, default: false },
 at188: { type: String, default: "There's no recommendation for that" },
 at189: { type: Boolean, default: false },
 at190: { type: String, default: "There's no recommendation for that" }


});

const Compliance = mongoose.model('Compliance', ComplianceSchema);

module.exports = Compliance;
