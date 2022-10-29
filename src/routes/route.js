const express = require('express');
const router = express.Router();



const AuthorModel= require("../models/newAuthor")
const publishModel= require("../models/newPublisher")
const bookModel= require("../models/newBook")


// const authorController= require("../controllers/authorController")
// const bookController= require("../controllers/bookController")
// const publishController = require("../controllers/publishController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})





// 1. Write a POST api that creates an author from the details in request body


router.post("/createAuthor", async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}  )

router.get("/getAuthorsData", async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
})






// 2. Write a POST api that creates a publisher from the details in the request body


router.post("/createPublisher", async function (req, res) {
    let author = req.body
    let publishCreated = await publishModel.create(author)
    res.send({data: publishCreated})
}  )

router.get("/getPublishData", async function (req, res) {
    let authors = await publishModel.find()
    res.send({data: authors})
})





// 3. Write a POST api that creates a book from the details in the request body. 



router.post("/createBook", async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated})
} )


// 3(a) = The authorId is present in the request body. 
// If absent send an error message that this detail is required


// router.post("/createBook", async function (req, res) {
//     const {author} = req.body

//     if(!author){
//         return res.send("authorId is required")
//     }
//     const body = req.body
//     let authorr = await bookModel.create(body)
//     res.send({data: authorr})
// })




// 3(b) = If present, make sure the authorId is a valid ObjectId in the author collection. 
// If not then send an error message that the author is not present.

// router.post("/createBook", async function (req, res) {
//     const {author} = req.body

//     if(!author){
//         return res.send("authorId is not present")
//     }if(author){
//         return res.send(author)
//     }
//     const body = req.body
//     let authorr = await bookModel.create(body)
//     res.send({data: authorr})
// })




// 3(c) = The publisherId is present in the request body. 
// If absent send an error message that this detail is required

// router.post("/createBook",async function (req, res) {
//     const {publisher} = req.body

//     if(!publisher){
//         return res.send("publisherId is required")
//     }
//     const body = req.body
//     let authorr = await bookModel.create(body)
//     res.send({data: authorr})
// })






// 3(d) = If present, make sure the publisherId is a valid ObjectId in the publisher collection. 
// If not then send an error message that the publisher is not present.


// router.post("/createBook",async function (req, res) {
//     const {publisher} = req.body

//     if(!publisher){
//         return res.send("publisherId is not present")
//     }
//     if(publisher){
//         return res.send(publisher)
//     }
    
//     const body = req.body
//     let authorr = await bookModel.create(body)
//     res.send({data: authorr})
// })






router.get("/getBooksData", async function (req, res) {
    let books = await bookModel.find()
    return res.send({data: books})
}
)




// 4. Write a GET api that fetches all the books along with their author details 
// (you have to populate for this) as well the publisher details (you have to populate for this) 


router.get("/getBooksWithAuthorDetails", async function (req, res) {
    let specificBook = await bookModel.find().populate('publisher').populate("author")
    return res.send({data: specificBook})
})

module.exports = router;