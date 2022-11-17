const express = require('express')
const cors = require('cors')
const {query, json} = require('express')
const path = require('path')

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const Ruta_amigos=require('./Rutas/Ruta_amigos')

const app = express()

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info:{
            title: 'API Amigos',
            version: '1.0.0',
        },
    servers:[
        {url: "http://localhost:1235"}
    ],
    },
    apis: [`${path.join(__dirname,"./Rutas/Ruta_amigos.js")}`],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs",swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use(express.text())
app.use(express.json())
app.use(cors({origin:"http:localhost"}))

app.use('/amigos',Ruta_amigos.router)

app.listen(1235, () =>{
    console.log('Servidor escuchando 1235')
})

