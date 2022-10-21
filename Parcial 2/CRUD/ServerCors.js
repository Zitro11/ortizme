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

//get
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

//post

app.post('/',(req, res)=>{
    con.connect(function(err){
        if(err) throw err;
        console.log("conected!");
        let Nombre = req.body.Nombre
        let Numero = req.body.Numero
        let Apodo = req.body.Apodo
        miQuery = (`INSERT INTO amigos (Numero, Nombre, Apodo) VALUES ('${Numero}', '${Nombre}', '${Apodo}')`)
        con.query(miQuery, function (err, response){
            console.log(response)
            res.send(response)
            con.end()
        })
    })
    res.send("Se agrego el registro")
})

//Delete

app.delete('/',(req, res)=>{
    con.connect(function(err){
        if(err) throw err;
        console.log("conected!");
        let Nombre = req.body.Nombre
        let Numero = req.body.Numero
        let Apodo = req.body.Apodo
        miQuery = (`DELETE FROM amigos WHERE Numero = '${Numero}'`)
        con.query(miQuery, function (err, response){
            console.log(response)
            res.send(response)
            con.end()
        })
    })
    res.send("Se elimino el registro")
})

//Put patch

app.patch('/',(req, res)=>{
    con.connect(function(err){
        if(err) throw err;
        console.log("conected!");
        let Nombre = req.body.Nombre
        let Numero = req.body.Numero
        let Apodo = req.body.Apodo
        miQuery = (`UPDATE amigos SET Nombre = '${Nombre}', Apodo = '${Apodo}' WHERE Numero = '${Numero}'`)
        con.query(miQuery, function (err, response){
            console.log(response)
            res.send(response)
            con.end()
        })
    })
    res.send("Se actualizo el registro")
})


app.listen(8089,()=>{console.log('Server funcional')})