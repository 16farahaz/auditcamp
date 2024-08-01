const mongoose = require('mongoose');
const AssetSchema = new mongoose.Schema({
  
    State: { type: String,default:"blocked" },
    file: { type: String },
   
 // ASSET
 at33: { type: Boolean, default: false },
 at34: { type: String, default: "There's no recommendation for that" },
 at35: { type: Boolean, default: false },
 at36: { type: String, default: "There's no recommendation for that" },
 at37: { type: Boolean, default: false },
 at38: { type: String, default: "There's no recommendation for that" },
 at39: { type: Boolean, default: false },
 at40: { type: String, default: "There's no recommendation for that" },
 at41: { type: Boolean, default: false },
 at42: { type: String, default: "There's no recommendation for that" },
 at43: { type: Boolean, default: false },
 at44: { type: String, default: "There's no recommendation for that" },
 at45: { type: Boolean, default: false },
 at46: { type: String, default: "There's no recommendation for that" },
 at47: { type: Boolean, default: false },
 at48: { type: String, default: "There's no recommendation for that" },
 at49: { type: Boolean, default: false },
 at50: { type: String, default: "There's no recommendation for that" },
 at51: { type: Boolean, default: false },
 at52: { type: String, default: "There's no recommendation for that" }


});

const Asset = mongoose.model('Asset', AssetSchema);

module.exports = Asset;
