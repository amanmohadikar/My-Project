const express = require('express');
const router = express.Router();

router.get('/students/:name', function(req, res) {
    let studentName = req.params.name
    console.log(studentName)
    res.send(studentName)
})

router.get("/random" , function(req, res) {
    res.send("hi there")
})


router.get("/test-api" , function(req, res) {
    res.send("hi FunctionUp")
})


router.get("/test-api-2" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API")
})


router.get("/test-api-3" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's ")
})


router.get("/test-api-4" , function(req, res) {
    res.send("hi FunctionUp. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})



router.get("/test-api-5" , function(req, res) {
    res.send("hi FunctionUp5. This is another cool API. And NOw i am bored of creating API's. PLZ STOP CREATING MORE API;s ")
})

router.get("/test-api-6" , function(req, res) {
    res.send({a:56, b: 45})
})

router.post("/test-post", function(req, res) {
    res.send([ 23, 45 , 6])
})


router.post("/test-post-2", function(req, res) {
    res.send(  { msg: "hi" , status: true }  )
})

router.post("/test-post-3", function(req, res) {
    // let id = req.body.user
    // let pwd= req.body.password

    // console.log( id , pwd)

    console.log( req.body )

    res.send(  { msg: "hi" , status: true }  )
})


router.post("/test-post-4", function(req, res) {
    let arr= [ 12, "functionup"]
    let ele= req.body.element
    arr.push(ele)
    res.send(  { msg: arr , status: true }  )
})





let players =
[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": [
            "swimming"
        ]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
    },
]
router.post("/test-we",function (req,res){
  
    let newPlayer = req.body.detail
   
    players.push(newPlayer)
  
    res.send({msg : players, status : true})
    
    })




// -write an api which gives the missing number in an array of integers starting from 1….e.g [1,2,3,5,6,7]
// : 4 is missing
// // Your route code will look like this
// app.get("/sol1", function (req, res) {
// //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of
// numbers till last digit in the array
// let arr= [1,2,3,5,6,7]
// let missingNumber
// ///LOGIC WILL GO HERE
// res.send( { data: missingNumber } );
// });



router.get("/sol1", function (req, res) {

let arr = [1,2,3,4,5,6,8,9];
let sum = 0;
for(let i = 0;i<arr.length;i++){
    let n = arr[i];
    sum = n*(n+1)/2;  //45
}
// console.log(sum)

let sum1 = 0;
for(let i = 0;i<arr.length;i++){
    sum1 = sum1 + arr[i]; //38
}
// console.log(sum1)

let missing = sum - sum1; //45 - 38 = 7
console.log("My missing number is :", missing)
res.send( { Our_Missing_Number_is : missing } );
})

module.exports = router;




// // -write an api which gives the missing number in an array of integers starting from anywhere….e.g [33,
// 34, 35, 37, 38]: 36 is missing
// // Your route code will look like this
// app.get("/sol2", function (req, res) {
// //logic : sum of n consecutive numbers is [ n * (first + last) / 2 ]..so get sum of all
// numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
// let arr= [33, 34, 35, 37, 38]
// let missingNumber
// ///LOGIC WILL GO HERE
// res.send( { data: missingNumber } );
// })


router.get("/sol2", function (req, res) {
    function missingNumber(arr){
        let N = arr.length+1;
        let firstIndex = arr[0]
        let lastIndex = arr[arr.length-1]
        let sum = N*(firstIndex+lastIndex) // 213
        sum = sum/2;
        let output = 0;
        for(let i = 0;i<arr.length;i++){
            output = output + arr[i]
        }
        console.log(sum-output)  // 213 - 177 = 36
    }
    missingNumber([33, 34, 35, 37, 38]);  //177
    res.send( { data : missingNumber } );
})