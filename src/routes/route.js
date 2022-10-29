const express = require('express');
const router = express.Router();
const bookModel= require("../models/bookModel.js")
const authorModel= require("../models/authorModel.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



// 1. create APIs for both books and authors ---> 
// If author_id is not available then do not accept the 
// entry(in neither the author collection nor the books collection)


router.post("/book", async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
})


router.get("/book", async function (req, res) {
    let allBooks= await bookModel.find()
    res.send({msg : allBooks})
})






// 3. Update “Two states” book price to 100;  
// Send back the updated price in response.  
// ( This will also need 2  queries- 1st will be a findOneAndUpdate. 
// The second will be a find query aith author_id from previous query)

router.get("/books1", async function (req, res) {
    let allUsers= await bookModel.findOneAndUpdate({name : "Two states"}, {price : 100},{ new: true , upsert: true})
    res.send({msg: allUsers})
})


// router.post("/books1", async function (req, res) {
//     let data = req.body
//     let allUsers= await bookModel.updateMany({name : "Two states"}, {$set : data})
    
//     res.send({msg: allUsers})
// })









// 1 . Write create APIs for both books and authors ---> 
// If author_id is not available then do not accept the 
// entry(in neither the author collection nor the books collection)

router.post("/author", async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
})


router.get("/author", async function (req, res) {
    let allUsers= await authorModel.find()
    res.send({msg: allUsers})
})




// 4. Find the books which costs between 50-100(50,100 inclusive) and respond back with the respective books.. 


router.get("/booksPrice", async function (req, res) {
    let allUsers= await bookModel.find({price : {$gte : 50 , $lte : 100}}).select({name : 1})
    res.send({msg: allUsers})
})




// 2. List out the books written by "Chetan Bhagat" ( this will need 2 DB queries one 
//     after another- first query will find the author_id for "Chetan Bhagat”. 
//     Then next query will get the list of books with that author_id )

router.get("/booksOfChetan", async function (req,res){
    let allUsers = await authorModel.find({author_name : "Chetan Bhagat"}).select({author_id : 1,})
    res.send({msg : allUsers})
})







// const { count } = require("console")
// const BookModel= require("../models/bookModel")

// const createBook= async function (req, res) {
//     let data= req.body

//     let savedData= await BookModel.create(data)
//     res.send({msg: savedData})
// }

// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE



// module.exports.createBook= createBook
// module.exports.getBooksData= getBooksData
// module.exports.updateBooks= updateBooks
// module.exports.deleteBooks= deleteBooks

// createBook : to create a new entry..use this api to create 11+ entries in your collection











    // let allBooks= await BookModel.find( ).count() // COUNT

    // let allBooks= await BookModel.find( { authorName : "Chetan Bhagat" , isPublished: true  } ) // AND
    
    // let allBooks= await BookModel.find( { 
    //     $or: [ {authorName : "Chetan Bhagat" } , { isPublished: true } , {  "year": 1991 }]
    // } ).select( { bookName: 1, authorName: 1, _id: 0})n // SELECT keys that we want

    // let allBooks= await BookModel.find().sort( { sales: -1 }) // SORT

    // PAGINATION 
    // let page= req.query.page
    // let allBooks= await BookModel.find().skip(3 * (page-1)).limit(3)

    // let allBooks= await BookModel.find().sort({ sales: -1 }).skip(3 * (page-1)).limit(3).select({ bookName: 1, authorName: 1, _id: 0} )


    // let allBooks= await BookModel.find({ sales: { $eq:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $ne:  137 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lt:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $lte:  50 }  }) 
    // let allBooks= await BookModel.find({ sales: { $gte:  50 }  }) 
    
    // let allBooks= await BookModel.find({     sales : { $in: [10, 17, 82] }     }).count() 
    // sales : { $in: [10, 17, 82] }
    
    // let allBooks= await BookModel.find({     sales : { $nin: [ 17, 82, 137] }     }).select({ sales: 1, _id:0})
    
    //  let allBooks= await BookModel.find({     $and: [{sales : {$gt: 20}} , [sales:  {$lt: 100}]]    })  //sales is between 20 and 100.... sales > 20 AND sales <100
    //  let allBooks= await BookModel.find({     sales : {$gt: 20, $lt: 100}   })  //sales is between 20 and 100.... sales > 20 AND sales <100


    //  let allBooks= await BookModel.findById("621c60a6b16c9e6bf2736e33") 
    //  let allBooks= await BookModel.findOne( {sales: 10}) 
    //  let allBooks= await BookModel.find( {sales: 10}) 
    
    

    // //  update (not covered: - findByIdAndUpdate | updateOne )
    // let allBooks= await BookModel.update(   
    //     {  sales: {$gt: 10}  }, //condition
    //     { $set: { isPublished: true} } // the change that you want to make
    //     ) 



    // REGEX
    // let allBooks= await BookModel.find( { bookName:  /^Int/  }) 
    // let allBooks= await BookModel.find( { bookName:  /^INT/i  }) 
    // let allBooks= await BookModel.find( { bookName:  /5$/  }) 
    // let allBooks= await BookModel.find( { bookName:  /.*Programming.*/i  }) 
    
    // ASYNC AWAIT
    
    // let a= 2+4
    // a= a + 10
    // console.log(a)
    // let allBooks= await BookModel.find( )  //normally this is an asynchronous call..but await makes it synchronous


    // WHEN AWAIT IS USED: - database + axios
    //  AWAIT can not be used inside forEach , map and many of the array functions..BE CAREFUL
    // console.log(allBooks)
    // let b = 14
    // b= b+ 10
    // console.log(b)
    // res.send({msg: allBooks})
// ,),}
//  async function (req, res) {
//     let allUsers= await bookModel.find()
//     res.send({msg: allUsers})
// })



module.exports = router;