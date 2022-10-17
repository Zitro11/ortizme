const express = require('express')
const cors = require('cors')

const app = express() 

var j2x = require ('json2xls')
var fs = require ('fs')
var mysql = require('mysql')

const { json, response } = require('express');

var con = mysql.createConnection({
    host : "localhost",
    user: "root",
    password : "",
    database: "api"
});

app.use(cors({origin:'http://127.0.0.1:5500'}))

app.use(express.json())
app.use(express.text())

app.get('/',(req, res)=>{
    con.connect(function(err){
        if(err) throw err;
        console.log("conected!");
    
        miQuery = 'SELECT * FROM amigos WHERE numero ='+req.body
    
        con.query(miQuery, function (err, response){
            console.log(response)
            res.send(response)
            con.end()
        })
    })
})

app.listen(8081,()=>{console.log('Server funcional')})