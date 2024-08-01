const mongoose = require('mongoose');
const Security_phy_envSchema = new mongoose.Schema({
  
    State: { type: String,default:"blocked" },
    file: { type: String },
 // AREA
 at85: { type: Boolean, default: false },
 at86: { type: String, default: "There's no recommendation for that" },
 at87: { type: Boolean, default: false },
 at88: { type: String, default: "There's no recommendation for that" },
 at89: { type: Boolean, default: false },
 at90: { type: String, default: "There's no recommendation for that" },
 at91: { type: Boolean, default: false },
 at92: { type: String, default: "There's no recommendation for that" },
 at93: { type: Boolean, default: false },
 at94: { type: String, default: "There's no recommendation for that" },
 at95: { type: Boolean, default: false },
 at96: { type: String, default: "There's no recommendation for that" },
 at97: { type: Boolean, default: false },
 at98: { type: String, default: "There's no recommendation for that" },
 at99: { type: Boolean, default: false },
 at100: { type: String, default: "There's no recommendation for that" },
 at101: { type: Boolean, default: false },
 at102: { type: String, default: "There's no recommendation for that" },
 at103: { type: Boolean, default: false },
 at104: { type: String, default: "There's no recommendation for that" },
 at105: { type: Boolean, default: false },
 at106: { type: String, default: "There's no recommendation for that" },
 at107: { type: Boolean, default: false },
 at108: { type: String, default: "There's no recommendation for that" },
 at109: { type: Boolean, default: false },
 at110: { type: String, default: "There's no recommendation for that" },
 at111: { type: Boolean, default: false },
 at112: { type: String, default: "There's no recommendation for that" },
 at113: { type: Boolean, default: false },
 at114: { type: String, default: "There's no recommendation for that" }

});

const Security_phy_env = mongoose.model('Security_phy_env', Security_phy_envSchema);

module.exports = Security_phy_env;
