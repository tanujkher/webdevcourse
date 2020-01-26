const fs = require('fs')

let content = 'Some new content'

fs.writeFile('mytext.txt', content, (err) => {
    if(err) throw err
    
    console.log('Successful')
})