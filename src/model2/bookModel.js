const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    // bookName( mandatory field), price containing Indian and european price,
    //  year ( should be 2021 if no year is provided) , tags array, authorName, totalPages , stockAvailable ( true false) 

    bookName : {
        type : String,
        required : true
    },

    price : {
        type : String,
        // enum : ["Indian","europ"]
      
    },
  

    year : {
        type : Number,
        default : 2021
    },

    authorName : String,

    totalPages : Number,

    stockAvailable : Boolean


}, {timestamps : true});
module.exports = mongoose.model('book', bookSchema) //users