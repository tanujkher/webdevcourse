const fs = require('fs').promises

fs.readFile(__dirname + '/input_1.txt')
    .then((data) => {
        console.log(data.toString())
    })
    .catch((err) => {
        throw err
    })