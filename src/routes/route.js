const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const bookModel= require("../model2/bookModel.js")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
})

router.post("/createUsers", async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
})

router.get("/getUsersData", async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
})

module.exports = router;