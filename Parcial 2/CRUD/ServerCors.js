const { response } = require("express");
const xp = require("express")
const sql = require("mysql2")
const cors = require("cors")

var pool = sql.createPool({
    host: "localhost",
    database: "api",
    user: "root",
    password: ""
  });

const app = xp()

app.use(cors({origin:'*'}))
app.use(xp.json())
app.use(xp.text())

app.get('/',function(req,res) {
    console.log(req.body)
    if(req.body.Numero == undefined)
    {
        pool.query('SELECT * FROM amigos',function(err,response,fields){
            res.send(JSON.stringify(response))
        })
    }
    else{
        pool.query('SELECT * FROM amigos WHERE Numero =' + req.body.Numero, function(err,response,fields){
            res.send(JSON.stringify(response))
        })
    }
})

app.post('/',function(req,res){
    console.log(req.body)
    let Nombre = req.body.Nombre
    let Apodo = req.body.Apodo
    let Numero = req.body.Numero
    pool.query(`INSERT INTO amigos(Numero,Nombre,Apodo) VALUES('${Numero}','${Nombre}','${Apodo}')`,function(err,response,fields){
        res.send("Se registraron los datos")
    })
})

app.delete('/',function(req,res){
    let Numero = req.body.Numero 
    pool.query(`DELETE FROM amigos WHERE Numero = '${Numero}'`,function(err,response,fields){
        res.send(`El registro numero: ${Numero} se a eliminado`)
    })
})

app.patch('/',function(req,res){
    let Numero = req.body.Numero
    Nombre = req.body.Nombre
    Apodo = req.body.Apodo
    pool.query(`SELECT * FROM amigos WHERE Numero = '${req.body.Numero}'`,function(err,response,fields){
        Nombre = response.Nombre
        Apodo = response.Apodo
    })

    pool.query(`UPDATE amigos SET Nombre='${Nombre}',Apodo='${Apodo}' WHERE Numero = '${Numero}'`,function(err,response,fields){
        res.send(`El usuario con el numero ${Numero} se a actualizado`)
    })
})

app.listen(1235,()=>{console.log('Server funcional')})