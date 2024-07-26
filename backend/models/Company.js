const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    nom: { type: String , required:true },
    email: { type: String, unique: true, required: true },
    num:{type:String,required:true}
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
