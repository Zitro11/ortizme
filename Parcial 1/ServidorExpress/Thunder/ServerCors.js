const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.text())
app.use(express.json())

app.use(cors({origin:'http://127.0.0.1:5500'}))

app.use((req,res, next) => {
console.log('primera funcion midelware')
next()
},
(req,res, next) => {
   console.log('segunda funcion midelware')
   next()
})

//instalar el midelware morgan en npm
//npm insrall morgan
//declararlo hasta arriba
//copear codigo
//hacer un request

app.post('/texto',(req,res)=>{
   console.log(req.body)
   let may = req.body.toUpperCase()
   let sinesp =req.body.trim()
   let longi = req.body.length
   res.json({
      mayusculas: may,
      sinespacios: sinesp,
      longitud: longi
   })
})

app.post('/json', (req,res) => {
   console.log(req.body.nombre)
   let cadena = "Hola " +req.body.nombre+""+req.body.apellido+" como estas"
   req.json({saludo:cadena})
})

app.get('/mayusculas/:cadena', (req,res) => {
   console.log(req.params)
   res.send(req.params)
})

app.get('suma', (req,res) => {
   console.log(req.query)
   let suma = parseInt(req.query.x)+parent(req.query.y)
   res.send(
   `La suma es ${suma}`)
})




app.get('/',(req, res)=>{
    res.send("Servidor express contestando a puerto 8083")
 })

app.listen(8083,()=>{console.log('Server funcional')})

app.get('/',(req, res)=>{
   // res.send("Servidor express contestando a puerto 8081")
   res.sendFile('/static/index.html',{root:__dirname})
})

app.use((req, res)=>{
   res.sendFile('/static/NotFound.html',{root:__dirname})
})


