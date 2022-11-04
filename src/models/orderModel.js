const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {

    user : {
        type : ObjectId,
        ref : "UserDocument"
    },


    product : {
        type : ObjectId,
        ref : "productDocument"
    },

    
    amount: Number,
	isFreeAppUser: Boolean, 
	date: String

}, { timestamps: true });

module.exports = mongoose.model('orderDocument', orderSchema)
