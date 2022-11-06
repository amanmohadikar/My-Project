const { count } = require("console")
const productModel = require("../models/productModel")



const createProduct= async function (req, res) {
    let {name, category, price}= req.body
    if(!name || !category || !price){
        return res.send({msg : "All field is required"})
    }
    let savedData= await productModel.create({name, category, price})
    res.send({msg: savedData})
}


module.exports.createProduct = createProduct

