const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors({origin:"http://localhost"}))

const express = require('express')
app.get('/',(req, res)=>{
    res.send("Servidor express contestando a puerto 8082")
})

app.post('/',(req, res)=>{
    res.send("Servidor express contestando a puerto 8082")
})

app.listen(8082)