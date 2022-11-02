const { count } = require("console")
const orderModel= require("../models/orderModel")

const createAuthor= async function (req, res) {
    let data = req.body
    let authorId = data.dauthor_id
    if(!authorId) return res.send({msg: 'AuthorId is mandatory in the request'})

    let savedData= await orderModel.create(data)
    res.send({data: savedData})

}


const createOrder= async function (req, res) {
    let data = req.body
    let savedData= await orderModel.create(data)
    res.send({data: savedData})

}


module.exports.createAuthor= createAuthor
module.exports.createOrder= createOrder

