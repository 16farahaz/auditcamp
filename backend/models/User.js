const mongoose = require('mongoose');
const path = require('path'); // Add this line to import the path module

const userSchema = new mongoose.Schema({
    name: { type: String },
    lastname: { type: String },
    email: { type: String, unique: true, required: true },
    motpasse: { type: String, required: true },
    image: {
        type: String,
        default: path.join('Uploads', 'userr.png') // Default image path
    },
    status: { type: String, enum: ['active', 'blocked'], default: 'active' } ,
    role: { type: String, enum: ['user', 'admin', 'superadmin'], default: 'user' }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
