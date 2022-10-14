// Module 2 : src/util/helper.js

const { get } = require("underscore")



    

    var today = new Date();
    var current_date = today.getDate();
    var current_month = today.getMonth()+1; //Month starts from 0
    var current_year = today.getFullYear();
    let result = (current_date+"/"+current_month+"/"+current_year);
    

    function getBatchInfo(){
        console.log(result)
        console.log("Hii, My banch name is lithium, This is 5th day of 4th week and Today's tpoic is Node.js")
        return ""
    }



module.exports.dateFunction = getBatchInfo;

