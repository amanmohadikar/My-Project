const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    // logger.welcome()

    res.send('My second ever api!')
});

router.get('/students', function (req, res) {
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// 1. Create an API for GET /movies that returns a list of movies.
//  Define an array of movies in your code and return the value in response.

router.get("/movies", function (req, res) {
    let moviesArray = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
    res.send(moviesArray)

})

// 2. Create an API GET /movies/:indexNumber (For example GET /movies/1 is a valid request and it 
// should return the movie in your array at index 1). You can define an array of movies again in your api.

router.get('/moviesArray/:index', function (req, res) {
    // console.log("this is a req.query path :", req.query)
    let moviesArray = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
    const index = req.params.index
    res.send(moviesArray[index])
})


//3. Handle a scenario in problem 2 where if the index is greater than the valid maximum value 
// a message is returned that tells the user to use a valid index in an error message.

router.get('/moviesArray1/:index', function (req, res) {
    console.log("this is a req.query path :", req.query)
    let moviesArray = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
    const index = req.params.index
    if (index > 3 || index < 0) {
        res.send("It is a Invalid index, Please use a valid index")
    } else {
        res.send(moviesArray[index])
    }
})




// 4. Write another api called GET /films. Instead of an array of strings define an array of movie 
// objects this time. Each movie object should have values - id, name. An example of movies array is 
router.get('/films', function (req, res) {
    const arrayOfObject = [{
        "id": 1,
        "name": "The Shining"
    }, {
        "id": 2,
        "name": "Incendies"
    }, {
        "id": 3,
        "name": "Rang de Basanti"
    }, {
        "id": 4,
        "name": "Finding Nemo"
    }]

    res.send(arrayOfObject)

})


 


router.get('/student-details/:name', function (req, res) {
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request " + JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)

    res.send('Dummy response')
})

module.exports = router;