const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {

    product : {
        type : ObjectId,
        ref : "productDocument"
    },

    user : {
        type : ObjectId,
        ref : "UserDocument"
    },

    amount: Number,
	isFreeAppUser: Boolean, 
	date: String

}, { timestamps: true });

module.exports = mongoose.model('orderDocument', orderSchema)
