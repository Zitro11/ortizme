const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors({origin:'http://127.0.0.1:5500'}))

app.get('/',(req, res)=>{
    res.send("Servidor express contestando a puerto 8081")
 })

app.listen(8083,()=>{console.log('Server funcional')})

app.get('/',(req, res)=>{
   // res.send("Servidor express contestando a puerto 8081")
   res.sendFile('/index.html',{root:__dirname})
})

app.use((req, res)=>{
   res.sendFile('/NotFound.html',{root:__dirname})
})


