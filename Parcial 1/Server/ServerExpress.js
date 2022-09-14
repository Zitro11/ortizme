const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Servidor Express contestando')
})

app.listen(8080,()=>{console.log('Servidor corriendo y escuchando en puerto 8080')})