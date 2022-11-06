var ip = require("ip");


const mid1= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid1")
    let currentDate = new Date();
    let time = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();

    console.log("Current Date is : ", currentDate)
    console.log("Current time is : ", time)
    console.log("IP Adderss is : ",ip.address());
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


const mid5= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid5")
    // logic
    let loggedIn = req.headers.logged


    if (loggedIn) { 
        console.log( "OK LOGGED IS IS TRUE NOW")
        next ()
    }
    else {
        res.send ("Please login or register")
    }
}




module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
module.exports.mid5= mid5

