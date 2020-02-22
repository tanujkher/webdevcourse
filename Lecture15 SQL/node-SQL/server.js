const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    database: 'mytestdb',
    password: 'mypass'
})

connection.query(
    'SELECT * FROM persons',
    (err, row, col) => {
        if(err){
            console.error(err)
        }
        for(let r of row){
            console.log('---------------')
            for(let c of col){
                console.log(c.name + " : " + r[c.name])
            }
            console.log('---------------')
        }
        connection.close()
    }
)