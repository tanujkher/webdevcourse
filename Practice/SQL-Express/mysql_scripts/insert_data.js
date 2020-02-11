const mysql = require('mysql2')

const insert = {
    name: process.argv[2],
    age: parseInt(process.argv[3]),
    city: process.argv[4],
}

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'myuser',
    password: 'mypass',
    database: 'mytestdb'
})

connection.query(
    `INSERT INTO persons (name, age, city) VALUES (
        '${insert.name}',
        ${insert.age},
        '${insert.city}'
    )`,
    (err, result) => {
        if(err){
            console.error(err)
        }else{
            console.log(result)
            console.log('Data added')
        }
        connection.close()
    }
)
