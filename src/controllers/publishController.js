const publishModel= require("../models/newPublisher")


// 2. Write a POST api that creates a publisher from the details in the request body

// const createPublisher= async function (req, res) {
//     let author = req.body
//     let publishCreated = await publishModel.create(author)
//     res.send({data: publishCreated})
// }

const getPublishData= async function (req, res) {
    let authors = await publishModel.find()
    res.send({data: authors})
}



module.exports.createPublisher= createPublisher
module.exports.getPublishData= getPublishData