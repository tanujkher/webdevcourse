const fs = require('fs')

let content = 'Some new content'

fs.writeFile('/home/tanuj/Desktop/webdevcourse/Lecture10 NodeJS/file-ops(fs)/mytext.txt', content, (err) => {
    if(err) throw err
    
    console.log('Successful')
})