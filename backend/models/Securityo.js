const mongoose = require('mongoose');
const SecurityoSchema = new mongoose.Schema({
  
    State: { type: String,default:"blocked" },
    file: { type: String },
    // Partie 2 ORGANIZATION

    at7: { type: Boolean, default: false },
    at8: { type: String, default: "There's no recommendation for that" },
    at9: { type: Boolean, default: false },
    at10: { type: String, default: "There's no recommendation for that" },
    at11: { type: Boolean, default: false },
    at12: { type: String, default: "There's no recommendation for that" },
    at13: { type: Boolean, default: false },
    at14: { type: String, default: "There's no recommendation for that" },
    at15: { type: Boolean, default: false },
    at16: { type: String, default: "There's no recommendation for that" },
    at17: { type: Boolean, default: false },
    at18: { type: String, default: "There's no recommendation for that" },
    at19: { type: Boolean, default: false },
    at20: { type: String, default: "There's no recommendation for that" }

});

const Securityo = mongoose.model('Securityo', SecurityoSchema);

module.exports = Securityo;
