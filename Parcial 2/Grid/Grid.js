//grid.js en google

//documentacion

//copiar el html y el js

//server-side setup

//app.use(cors({origin:'http://127.0.0.1:5500'}))


const grid = new gridjs.Grid({
  columns:['Numero', 'Nombre', 'Apodo'],
  server: {
    url: 'http://localhost:1235/',
    then: data => data.map(amigos => [amigos.Numero,amigos.Nombre,amigos.Apodo])
  }
}).render(document.getElementById("wrapper"));