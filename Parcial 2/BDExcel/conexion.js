const sql = require('mssql')

async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('Server=localhost,1433;Database=API;User Id=DESKTOP-LCQ2MB3\israe;Password=;Encrypt=true')
        const result = await sql.query`select * from Amigos`
        console.log(result)
    } catch (err) {
        // ... error checks
    }
}