const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'myuser',
    password: 'mypass'
})

function getAllPersons(){
    return new Promise((resolve, reject) => {
        connection.query(
            'SELECT * FROM persons',
            (err, result) => {
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            }
        )
    })
}

function addNewPerson(name, age, city){
    return new Promise((resolve, reject) => {
        connection.query(
            `INSERT INTO persons (name, age, city) VALUES (?, ?, ?)`,
            [name, age, city],
            (err, result) => {
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            }
        )
    })
}

exports = module.exports = {
    getAllPersons, addNewPerson
}