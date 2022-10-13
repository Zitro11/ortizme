var sql = require('mysql')

var con = sql.createConnection({
    host : "localhost",
    user: "root",
    password : "",
    database: "api"
});

con.connect(function(err){
    if(err) throw err;
    console.log("conected!");

    miQuery = 'SELECT * FROM amigos'

    con.query(miQuery, function (err, result){
        if(err) throw err;
        console.log("result: " + result);
    });
});

