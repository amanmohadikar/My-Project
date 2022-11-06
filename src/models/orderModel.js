const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {

    userId : {
        type : ObjectId,
        ref : "UserDocument",
        required : true
    },

    productId : {
        type : ObjectId,
        ref : "productDocument",
        required : true
    },

    amount: {
        type : Number,
        required : true
    },

	date: String

}, { timestamps: true });

module.exports = mongoose.model('orderDocument', orderSchema)
