
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"

    // let currentDate = new Date();
    // let cDay = currentDate.getDate()
    // let cMonth = currentDate.getMonth() + 1
    // let cYear = currentDate.getFullYear()
    // console.log(cDay,cMonth,cYear);
    var ip = require("ip");


    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

    console.log("Current Date is : ", currentDate)
    console.log("Current time is : ", time)


    console.log("IP Adderss is : ",ip.address());


    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
