const fs = require('fs')
const os = require('os')

let arr = []

fs.readFile(__dirname + '/input_1.txt', (err, data) => {
    if(err) throw err
    arr = arr.concat(data.toString().split(os.EOL))
    fs.readFile(__dirname + '/input_2.txt', (err, data) => {
        if(err) throw err
        arr = arr.concat(data.toString().split(os.EOL))
        fs.readFile(__dirname + '/input_3.txt', (err, data) => {
            if(err) throw err
            arr = arr.concat(data.toString().split(os.EOL))
            arr.sort(function(a, b){
                return a - b
            })
            let content = arr.join('\n')
            fs.writeFile(__dirname + '/output.txt', content, (err) => {
                if(err) throw err
            })
        })
    })
})