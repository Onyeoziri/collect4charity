const express = require('express');
const mysql = require('mysql');

const app = express();

app.use(express.json());

//hidden from github
const fs = require('fs');
let important = fs.readFileSync('./src/important.json');
let importantData = JSON.parse(important);

var connectionInfo = {
    host: importantData.host,
    port: importantData.port,
    database: importantData.database,
    user: importantData.user,
    password: importantData.password,
    connectionLimit: 10
}

var dbconnection = mysql.createPool(connectionInfo);

/*
const dbconnection = mysql.createConnection({
    host: importantData.host,
    port: importantData.port,
    database: importantData.database,
    user: importantData.user,
    password: importantData.password,
    connectTimeout: 50000
});

/

dbconnection.connect((err) => {
    if(err){
        console.log("Error occured while connecting to Database!");
    }else{
        console.log("Connection created with MySQL database successfully!");
    }
});

*/


app.post('login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    dbconnection.query
})

module.exports = dbconnection;