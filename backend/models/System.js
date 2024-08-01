const mongoose = require('mongoose');
const SystemSchema = new mongoose.Schema({
  
    State: { type: String,default:"blocked" },
    file: { type: String },
// DEV
at161: { type: Boolean, default: false },
at162: { type: String, default: "There's no recommendation for that" },
at163: { type: Boolean, default: false },
at164: { type: String, default: "There's no recommendation for that" },
at165: { type: Boolean, default: false },
at166: { type: String, default: "There's no recommendation for that" },
at167: { type: Boolean, default: false },
at168: { type: String, default: "There's no recommendation for that" }

});

const System = mongoose.model('System', SystemSchema);

module.exports = System;
