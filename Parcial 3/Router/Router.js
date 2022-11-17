const express = require('express')
const cors = require('cors')
const {query, json} = require('express')
let json2xls=require('json2xls')

const Ruta_amigos=require('./Ruta_amigos')

const app = express()
app.use(express.text())
app.use(express.json())
app.use(cors({origin:"http:localhost"}))

app.use('/amigos',Ruta_amigos.router)

app.listen(1235, () =>{
    console.log('Servidor escuchando 1235')
})