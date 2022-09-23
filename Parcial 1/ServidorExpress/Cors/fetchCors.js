fetch("http://localhost:8082")
    .then( respuesta => respuesta.text() )
    .then( console.log(datos))