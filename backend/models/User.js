const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom: { type: String },
    email: { type: String, unique: true, required: true },
    motpasse: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
