const mongoose = require('mongoose');
const SecuritypSchema = new mongoose.Schema({
  
    State: { type: String,default:"blocked" },
    file: { type: String },
   

    // Partie 1
    at1: { type: Boolean, default: false },
    at2: { type: String, default: "There's no recommendation for that" },
    at3: { type: Boolean, default: false },
    at4: { type: String, default: "There's no recommendation for that" },
    at5: { type: Boolean, default: false },
    at6: { type: String, default: "There's no recommendation for that" }


});

const Securityp = mongoose.model('Securityp', SecuritypSchema);

module.exports = Securityp;
