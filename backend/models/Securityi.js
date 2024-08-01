const mongoose = require('mongoose');
const SecurityiSchema = new mongoose.Schema({
  
    State: { type: String,default:"blocked" },
    file: { type: String },
// INCIDENT
at171: { type: Boolean, default: false },
at172: { type: String, default: "There's no recommendation for that" }

});

const Securityi= mongoose.model('Securityi', SecurityiSchema);

module.exports = Securityi;
