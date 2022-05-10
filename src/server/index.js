const express = require('express')
const app = express()
const dbconnection = require('./dbConnect')
const port = 4000
const cors = require('cors')
const Connection = require('mysql/lib/Connection')

app.use(cors());

app.get('/charities', (req, res) => {
    dbconnection.query({sql: 'SELECT * FROM charity;', queryTimeout: 40000}, function(error, results){
        if(error){
            console.log(error);
     //       throw error;
        }
        return res.send(results);
    });
});



app.get('/charities/:charityID', (req, res) => {
    dbconnection.query({sql: 'SELECT * FROM charity where charityID=1', queryTimeout: 40000}, function(error, results){
        if(error){
            console.log(error);
        }
        return res.send(results);
    })
});
 /*   dbconnection.end(
        /*function (err){
        if(err){
            return console.log('error:' + err.message);
        }
        console.log("Database Connection Closed!");
    } 
    ); */

app.listen(port, () =>{
    console.log("Express listening at port ${port}")
});