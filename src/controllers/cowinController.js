let axios = require("axios")


let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
// 1. WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
let getDistrictId = async function (req,res){
    try{
    let Id = req.query.districtId
    let date = req.query.date
    console.log(`DistrictId and date is ${Id} ${date}`)
    var options = {
        method : "get",
        url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?districtId=${Id}&date=${date}`
    }
    let result = await axios(options)
    console.log(result.data)
    res.status(200).send({msg : result.data})
}
catch(error){
    console.log(error)
    res.status(500).send({msg : error.message})
    console.log(error.message)
}
}


// 3. Axios POST request assignment

// 1. Get all the memes at Postman (https://api.imgflip.com/get_memes)
// 2. Pick a memeId you want (Eg 129242436) for the POST request
// 3. Create a Post request (https://api.imgflip.com/caption_image) with only query params. Following are the params (copy username and password exactly as given below):
// template_id <meme_id>
// text0 <text you want as a caption>
// text1 <optional>
// username chewie12345
// password meme@123

const memeHandler = async function (req,res){
    try{
        let options = {
            method : "post",
            url : "https://api.imgflip.com/caption_image?template_id=181913649&text0=Best Pay After Placement &text1=FunctionUP&username=chewie12345&password=meme@123"
        }
        let result = await axios(options)
        res.send({data : result.data})
    }
    catch(error){
        console.log(error)
        res.status(500).send({status : false, msg : "server error"})
    }
}



let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}



let getSortedArray = async function (req,res){
    try{
        let cities = ["banglore","Mumbai","Kolkata","chennai","London","Moscow"]
        let cityObjArray = [ ]
        for(let i = 0;i<cities.length;i++){
            let obj = {city : cities[i]}
            let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=c5a07a5f1ba8b10f0e5cb28b018f097a`)
            console.log(resp.data.main.temp)
            obj.temp = resp.data.main.temp
            cityObjArray.push(obj)
        }let sorted = cityObjArray.sort(function(a,b){return a.temp - b.temp})
        console.log(sorted)
        res.status(200).send({status : true, data : sorted})

    }
    catch(error){
        console.log(error)
        res.status(500).send({status : false, msg :error.message})
    }
}



module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictId = getDistrictId
module.exports.memeHandler = memeHandler
module.exports.getSortedArray = getSortedArray