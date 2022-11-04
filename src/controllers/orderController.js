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

const createUser= async function (req, res) {
    let {product, user}= req.body

    let isFreeAppUser = req.isFreeAppUser
    isFreeAppUser = isFreeAppUser === "true" ? true : false

    if (!product || !user){
        return res.send({msg : "All field is mandatory"})
    }
    let savedData= await orderModel.create({product, user})
    res.send({msg: savedData})
}

const getcreateOrderDetails= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}



// const getOrder = async function (req, res) {
//     let specificBook = await orderModel.find()//.populate('UserDocument').populate("productDocument")
//     return res.send({data: specificBook})
// }


module.exports.createAuthor= createAuthor
module.exports.createUser= createUser
module.exports.getcreateOrderDetails= getcreateOrderDetails


