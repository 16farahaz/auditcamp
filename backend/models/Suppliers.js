const mongoose = require('mongoose');
const SuppliersSchema = new mongoose.Schema({
  
    State: { type: String,default:"blocked" },
    file: { type: String },
// SUPPLIERS
at169: { type: Boolean, default: false },
at170: { type: String, default: "There's no recommendation for that" },


});

const Suppliers = mongoose.model('Suppliers', SuppliersSchema);

module.exports = Suppliers;
