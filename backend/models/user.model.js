const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlenght: 6
    },
    password:{
        type: String,
        required: true,
        trim: true,
        minlenght: 6
    },
    passcheck:{
        type:String,
        required: true,
        trim: true,
        minlenght: 6
    },
    isadmin:{
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);