const mongoose = require('mongoose');
const Human_resoSchema = new mongoose.Schema({
  


    
    idste: {type:String},
    nomste:{type:String },
    State: { type: String,default:"blocked" },
    file: { type: String },

     // Partie 3 HR
     at21: { type: Boolean, default: false },
     at22: { type: String, default: "There's no recommendation for that" },
     at23: { type: Boolean, default: false },
     at24: { type: String, default: "There's no recommendation for that" },
     at25: { type: Boolean, default: false },
     at26: { type: String, default: "There's no recommendation for that" },
     at27: { type: Boolean, default: false },
     at28: { type: String, default: "There's no recommendation for that" },
     at29: { type: Boolean, default: false },
     at30: { type: String, default: "There's no recommendation for that" },
     at31: { type: Boolean, default: false },
     at32: { type: String, default: "There's no recommendation for that" }
});

const Human_reso = mongoose.model('Human_reso', Human_resoSchema);

module.exports = Human_reso;
