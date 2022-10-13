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

con.connect(function(err){
    if(err) throw err;
    console.log("conected!");

    miQuery = 'SELECT * FROM amigos'

    con.query(miQuery, function (err, response){
        console.log(response)
        if(err) throw err;
        fs.writeFileSync(`${__dirname}/excel/dat.xlsx`, j2x(response), 'binary')
        con.end()
    })
})



