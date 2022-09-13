const http=require ('http');

const servidor=http.createServer ((req,res)=> {
    res.end ('Servidor http de node respondiendo');
});

servidor.listen(8080,(console.log('Servidor coriendo y escuchando en 8080')));

//instalar npm init-y, express