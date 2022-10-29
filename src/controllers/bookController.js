// const bookModel= require("../models/newBook")


// 3. Write a POST api that creates a book from the details in the request body. 


// const createBook= async function (req, res) {
//     let book = req.body
//     let bookCreated = await bookModel.create(book)
//     return res.send({data: bookCreated})
// }


// 3(a) = The authorId is present in the request body. 
// If absent send an error message that this detail is required


// const createBook= async function (req, res) {
//     const {author} = req.body

//     if(!author){
//         return res.send("authorId is required")
//     }
//     const body = req.body
//     let authorr = await bookModel.create(body)
//     res.send({data: authorr})
// }



// 3(b) = If present, make sure the authorId is a valid ObjectId in the author collection. 
// If not then send an error message that the author is not present.

// const createBook= async function (req, res) {
//     const {author} = req.body

//     if(!author){
//         return res.send("authorId is required")
//     }if(author){
//         return res.send(author)
//     }
//     const body = req.body
//     let authorr = await bookModel.create(body)
//     res.send({data: authorr})
// }




// 3(c) = The publisherId is present in the request body. 
// If absent send an error message that this detail is required

// const createBook= async function (req, res) {
//     const {publisher} = req.body

//     if(!publisher){
//         return res.send("publisherId is required")
//     }
//     const body = req.body
//     let authorr = await bookModel.create(body)
//     res.send({data: authorr})
// }





// 3(d) = If present, make sure the publisherId is a valid ObjectId in the publisher collection. 
// If not then send an error message that the publisher is not present.


// const createBook= async function (req, res) {
//     const {publisher} = req.body

//     if(!publisher){
//         return res.send("publisherId is required")
//     }
//     if(publisher){
//         return res.send(publisher)
//     }
    
//     const body = req.body
//     let authorr = await bookModel.create(body)
//     res.send({data: authorr})
// }






// const getBooksData= async function (req, res) {
//     let books = await bookModel.find()
//     return res.send({data: books})
// }



// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('publisher').populate("author")
//     return res.send({data: specificBook})

// }



// 4. Write a GET api that fetches all the books along with their author details 
// (you have to populate for this) as well the publisher details (you have to populate for this) 


// const getBooksWithAuthorDetails = async function (req, res) {
//     let specificBook = await bookModel.find().populate('publisher').populate("author")
//     return res.send({data: specificBook})
// }


// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails


