const mysql = require('mysql2')

const pool = mysql.createPool(
    {
        host: 'localhost',
        user: 'root',
        database: 'node_app',
        password: 'admin123'
    }
)

module.exports=pool.promise()


//promise allow us to work with the async code it is alternative to the callback functions it allow us to write the structural code in better way
