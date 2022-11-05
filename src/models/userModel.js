const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },

    balance: {
        type: Number,
        default: 100
    }, 

    address: {type : String,
        required : true},

    age: Number,

    gender: {
        type: String,
        enum: ["male", "female", "other"]
        }, 

    isFreeAppUser: {
        type: Boolean,
        default: false
    } 

}, { timestamps: true });

module.exports = mongoose.model('UserDocument', userSchema) //users

