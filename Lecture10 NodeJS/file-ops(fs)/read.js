const fs = require('fs')

fs.readFile('/home/tanuj/Desktop/webdevcourse/Lecture10 NodeJS/file-ops(fs)/mytext.txt', (err, data) => {
    if(err) throw err

    console.log(data.toString())
})