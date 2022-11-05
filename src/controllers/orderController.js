// const { count } = require("console")
// const { isValidObjectId } = require("mongoose")
// const {ObjectId,model, isValidObjectId} =require("mongoose")
// const orderModel = require("../models/orderModel")
// const userIdModel = require("../models/userModel")
// const productModel = require("../models/productModel")


// const createOrder = async function (req, res) {
//     let { productId, userId } = req.body

//     if (!productId || !userId) {
//         return res.send({ msg: "userId and prodcutId is mandatory" })
//     }

//     if (!isValidObjectId(productId)) {
//         return res.send({ msg: "productId is not a valid objectId" })
//     }

//     if (!isValidObjectId(userId)) {
//         return res.send({ msg: "userIdId is not a valid objectId" })
//     }

//     let userIdDetails = await userIdModel.findById({ userId })
//     if (!userIdDetails) {
//         return res.send({ msg: "userId is not present" })
//     }


//     let productDetails = await productModel.findById({ productId })
//     if (!productDetails) {
//         return res.send({ msg: "productId is not present" })
//     }


//     const isFreeAppuserId = req.isFreeAppuserId
//     if (isFreeAppuserId) {
//         const order = await orderModel.create({
//             userId: userId,
//             productId: productId,
//             isFreeAppuserId: isFreeAppuserId,
//             date: new Date()
//         })
//         return res.send({ data: order })
//     } else {
//         if (userIdDetails.balance < productDetails.price) {
//             return res.send({ msg: "you dont  have sufficient balance" })
//         }
//     }

//     const orderDetails = {
//         userId: userId,
//         productId: productId,
//         amount: productDetails.price,
//         isFreeAppuserId: isFreeAppuserId,
//         date: date
//     }

//     const order = await orderModel.create(orderDetails)
//     const userIdId = await userIdModel.findByIdAndUpdate(userId, { inc: { $balance: -productDetails.price } })
//     return res.send({ data: order })
// }


// module.exports.createOrder = createOrder




const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const {isValidObjectId} =require("mongoose")

const createOrder= async function (req, res) {
    let userid=req.body.userId
    let productid=req.body.productId
    console.log(userid)
    console.log(productid)
    

    if(!isValidObjectId(userid)){
        return res.send("Invalid user Id ")
    }

    if(!isValidObjectId(productid)){
        return res.send("Invalid product Id")
    }
    let checkproductid= await productModel.findById(productid)
    let Price = checkproductid.price
    let order=req.body
    console.log(Price)

    order.isFreeAppUser=isFreeAppUser
    if(order.isFreeAppUser==="true"){
       let result= order.amount=0
        console.log(result)
        let orderCreated = await orderModel.create(order)
        res.send({data: orderCreated})
    }
    else{
    

 
    let checkuserid= await userModel.findById(userid)
let Balance = checkuserid.balance
    
   
    if(Price>=Balance){
        return res.send("Insufficient Balance")
    }
    let user1 = await userModel.findOneAndUpdate(
        {_id:userid},
        {$inc:{Balance:-Price}},
        { new: true}
    )
   
        order.amount=Price
       
    let orderCr = await orderModel.create(order)
    res.send({msg:orderCr,data:user1})
    console.log(orderCr)
}
    
} 
module.exports.createOrder = createOrder



