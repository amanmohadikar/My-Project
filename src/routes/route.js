const express = require('express');
const router = express.Router();

//importing a custom module
const xyz = require('../logger/logger')
const abc = require("../util/helper")
const def = require("../validator/formatter")

//importing external package
const underscore = require('underscore')
const lodash = require("lodash");
const { chunk } = require('underscore');

router.get('/test-me', function (req, res) {
    console.log("-------------------------")
    console.log("This was my Function ", xyz.myFunction())
    console.log("-------------------------")

    console.log("This was batchInfo function ", abc.dateFunction())
    console.log("-------------------------")

    console.log("This was upperCase and lowerCase function ", def.upperLowerFunction())
    console.log("-------------------------")


// Using the package ‘lodash’ solve below problems(Write all this in route.js in /test-me route handler)
// - Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays
// - Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.


    const array = ["january","February","March","April","May","June","July","August","September","OCtomber","November:","December"];
    console.log(lodash.chunk(array,4))



    // - Create an array containing the first 10 odd numbers. Using the tail function,
    //  return the last 9 elements of it and print them on console.


const array2 = [1,3,5,7,9,11,3,15,17,19];

console.log(lodash.tail(array2))


// - Create 5 arrays of numbers containing a few duplicate values. Using the
//  function union create a merged array with only unique values and print them on console

const first = [1,2,3];
const second = [4,5,3];

const third = [7,6,5];

const fourth = [1,3,6];

const fifth = [9,8,7];

console.log(underscore.union(first,second,third,fourth,fifth))





// - Use the function fromPairs to create an object containing key value pairs.
//  For example [“horror”,”The Shining"],[“drama”,”Titanic"],
//  [“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]

let a = [["horror","The shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
console.log(lodash.fromPairs(a))








    // //Calling the components of a different custom module
    // console.log("Calling my function ",xyz.myFunction())
    // console.log("The value of the constant is ",xyz.myUrl)

    // //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')

    // //To be tried what happens if we send multiple response
    // //res.send('My second api!')
});

module.exports = router;

