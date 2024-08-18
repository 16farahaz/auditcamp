const mongoose = require('mongoose');
const Oper_securitySchema = new mongoose.Schema({
  



    
    idste: {type:String},
    nomste:{type:String },
    State: { type: String,default:"blocked" },
    file: { type: String },
// OPERATION
at115: { type: Boolean, default: false },
at116: { type: String, default: "There's no recommendation for that" },
at117: { type: Boolean, default: false },
at118: { type: String, default: "There's no recommendation for that" },
at119: { type: Boolean, default: false },
at120: { type: String, default: "There's no recommendation for that" },
at121: { type: Boolean, default: false },
at122: { type: String, default: "There's no recommendation for that" },
at123: { type: Boolean, default: false },
at124: { type: String, default: "There's no recommendation for that" },
at125: { type: Boolean, default: false },
at126: { type: String, default: "There's no recommendation for that" },
at127: { type: Boolean, default: false },
at128: { type: String, default: "There's no recommendation for that" },
at129: { type: Boolean, default: false },
at130: { type: String, default: "There's no recommendation for that" },
at131: { type: Boolean, default: false },
at132: { type: String, default: "There's no recommendation for that" },
at133: { type: Boolean, default: false },
at134: { type: String, default: "There's no recommendation for that" },
at135: { type: Boolean, default: false },
at136: { type: String, default: "There's no recommendation for that" },
at137: { type: Boolean, default: false },
at138: { type: String, default: "There's no recommendation for that" },
at139: { type: Boolean, default: false },
at140: { type: String, default: "There's no recommendation for that" },
at141: { type: Boolean, default: false },
at142: { type: String, default: "There's no recommendation for that" },
at143: { type: Boolean, default: false },
at144: { type: String, default: "There's no recommendation for that" }

});

const Oper_security = mongoose.model('Oper_security', Oper_securitySchema);

module.exports = Oper_security;
