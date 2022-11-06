const orderModel = require("../models/orderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")
const { isValidObjectId } = require("mongoose")

const createOrder = async function (req, res) {
    let userid = req.body.userId
    let productid = req.body.productId
    console.log("The userId is    : ", userid)
    console.log("The productId is : ", productid)


    if (!isValidObjectId(userid)) {
        return res.send("Invalid user Id ")
    }


    if (!isValidObjectId(productid)) {
        return res.send("Invalid product Id")
    }


    let checkProductId = await productModel.findById(productid)
    let Price = checkProductId.price
    let order = req.body
    console.log("The price of product is : ", Price, "/-")

    order.isFreeAppUser = isFreeAppUser
    if (order.isFreeAppUser === "true") {
        let result = order.amount = 0
        console.log("The amount is : ", result)
        let orderCreated = await orderModel.create(order)
        res.send({ data: orderCreated })
    }
    else {

        let checkUserId = await userModel.findById(userid)
        let Balance = checkUserId.balance
        console.log("The balance of user is  : ", Balance, "/-")

        console.log("Now The user has        : ", Balance - Price, "/-")

        if (Price >= Balance) {
            return res.send("Insufficient Balance")
        }
        let user1 = await userModel.findOneAndUpdate(
            { _id: userid },
            { $inc: { Balance: -Price } },
            { new: true }
        )

        order.amount = Price
        let orderCreated = await orderModel.create(order)
        res.send({ msg: orderCreated, data: user1 })
        console.log("The orderCreated is : ", orderCreated)

    }

}
module.exports.createOrder = createOrder



