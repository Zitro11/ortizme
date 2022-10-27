const grid = new gridjs.Grid({
  columns:['Numero', 'Nombre', 'Apodo'],
  server: {
    url: 'http://localhost:1235/',
    then: data => data.map(amigos => [amigos.Numero,amigos.Nombre,amigos.Apodo])
  }
}).render(document.getElementById("wrapper"));