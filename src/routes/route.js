const express = require('express');
const router = express.Router();
const commonMW = require ("../middlewares/commonMiddlewares")
const productController = require("../controllers/productController")
const UserController= require("../controllers/userController")
const orderController = require("../controllers/orderController")




router.post("/createUser", commonMW.headerValidation, UserController.createUser)


router.post("/createUser1", commonMW.headerValidation, UserController.createUser1)

router.post("/createOrder", commonMW.headerValidation, orderController.createOrder)

router.post("/createProduct", productController.createProduct)


router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)


module.exports = router;