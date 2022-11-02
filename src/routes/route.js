const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const productController = require("../controllers/productController")
const orderController = require("../controllers/orderController")
// const models =require("../models/orderModel")

const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?
router.post("/createBook", commonMW.myMiddleware,productController.createBook, function(req, res, next){
    res.send("Ending the cycle")
}  )

router.post("/createUser", commonMW.myMiddleware, UserController.createUser)



router.post("/createUser1", UserController.createUser)

router.post("/productUser1", productController.createProduct)

router.post("/orderUser1", orderController.createOrder)


// router.get("/getBooksWithAuthorDetails", async function (req, res) {
//     let specificBook = await Models.find().populate('UserDocument').populate("productDocument")
//     return res.send({data: specificBook})
// })



router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

module.exports = router;