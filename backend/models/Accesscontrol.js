const mongoose = require('mongoose');
const AccesscontrolSchema = new mongoose.Schema({
  
    State: { type: String,default:"blocked" },
    file: { type: String },
 // ACCESS
 at53: { type: Boolean, default: false },
 at54: { type: String, default: "There's no recommendation for that" },
 at55: { type: Boolean, default: false },
 at56: { type: String, default: "There's no recommendation for that" },
 at57: { type: Boolean, default: false },
 at58: { type: String, default: "There's no recommendation for that" },
 at59: { type: Boolean, default: false },
 at60: { type: String, default: "There's no recommendation for that" },
 at61: { type: Boolean, default: false },
 at62: { type: String, default: "There's no recommendation for that" },
 at63: { type: Boolean, default: false },
 at64: { type: String, default: "There's no recommendation for that" },
 at65: { type: Boolean, default: false },
 at66: { type: String, default: "There's no recommendation for that" },
 at67: { type: Boolean, default: false },
 at68: { type: String, default: "There's no recommendation for that" },
 at69: { type: Boolean, default: false },
 at70: { type: String, default: "There's no recommendation for that" },
 at71: { type: Boolean, default: false },
 at72: { type: String, default: "There's no recommendation for that" },
 at73: { type: Boolean, default: false },
 at74: { type: String, default: "There's no recommendation for that" },
 at75: { type: Boolean, default: false },
 at76: { type: String, default: "There's no recommendation for that" },
 at77: { type: Boolean, default: false },
 at78: { type: String, default: "There's no recommendation for that" },
 at79: { type: Boolean, default: false },
 at80: { type: String, default: "There's no recommendation for that" }
});

const Accesscontrol = mongoose.model('Accesscontrol', AccesscontrolSchema);

module.exports = Accesscontrol;
