const { count } = require("console")
const orderModel= require("../models/orderModel")


const createOrder= async function (req, res) {
    let {product, user}= req.body

    let isFreeAppUser = req.isFreeAppUser
    isFreeAppUser = isFreeAppUser === "true" ? true : false

    if (!product || !user){
        return res.send({msg : "All field is mandatory"})
    }
    let savedData= await orderModel.create({product, user})
    res.send({msg: savedData})
}


module.exports.createOrder= createOrder


