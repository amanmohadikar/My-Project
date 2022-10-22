const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
    // bookName, authorName, category and year
    bookName : String,
    authorName : String,
    categery : String,
    year : Number

}, {timestamps : true});
module.exports = mongoose.model('book', bookSchema) //users