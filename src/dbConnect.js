const mysql = require('mysql');

//hidden from github
const fs = require('fs');
let important = fs.readFileSync('./src/important.json');
let importantData = JSON.parse(important);

const dbconnection = mysql.createConnection({
    host: importantData.host,
    port: importantData.port,
    database: importantData.database,
    user: importantData.user,
    password: importantData.password,
});

dbconnection.connect((err) => {
    if(err){
        console.log("Error occured while connecting to Database!");
    }else{
        console.log("Connection created with MySQL database successfully!");
    }
});

module.exports = dbconnection;