const mongoose = require('mongoose');
const SecuritycSchema = new mongoose.Schema({
  


    
    idste: {type:String},
    nomste:{type:String },
    State: { type: String,default:"blocked" },
    file: { type: String },
 // PROTECTION
 at145: { type: Boolean, default: false },
 at146: { type: String, default: "There's no recommendation for that" },
 at147: { type: Boolean, default: false },
 at148: { type: String, default: "There's no recommendation for that" },
 at149: { type: Boolean, default: false },
 at150: { type: String, default: "There's no recommendation for that" },
 at151: { type: Boolean, default: false },
 at152: { type: String, default: "There's no recommendation for that" },
 at153: { type: Boolean, default: false },
 at154: { type: String, default: "There's no recommendation for that" },
 at155: { type: Boolean, default: false },
 at156: { type: String, default: "There's no recommendation for that" },
 at157: { type: Boolean, default: false },
 at158: { type: String, default: "There's no recommendation for that" },
 at159: { type: Boolean, default: false },
 at160: { type: String, default: "There's no recommendation for that" }

});

const Securityc = mongoose.model('Securityc', SecuritycSchema);

module.exports = Securityc;
