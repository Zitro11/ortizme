const express = require('express')
const cors = require('cors')
const app = express()
const cadena = require('./cadena')
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

//26/09/2022

app.post('/texto', (req, res)=>
{
   console.log(req.body)
   let may = cadena.pasarMayusculas(req.body);
   let sinesp = cadena.quitarEspacios(req.body);
   let longi = cadena.obtenerLongitud(req.body);
   res.json({mayusculas:may,
            sinespacios:sinesp,
            longitud:longi})
}
)

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



