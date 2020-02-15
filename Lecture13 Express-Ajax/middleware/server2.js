const express = require('express')
const app = express()

function decrypt(str) {
    let nstr = ''
    for(let i = 0; i <= str.length - 1; i++){
        let a = str[i].charCodeAt(0);
        nstr = nstr + String.fromCharCode(a - 1)
    }
    return nstr
}

app.use((req, res, next) => {
    for (let q in req.query) {
        req.query[q] = decrypt(req.query[q])
    }
    next()
})

app.use((req, res, next) => {
    if (!req.query.name)  {
        req.query.name = 'Guest'
    }
    if (!req.query.city)  {
        req.query.city = 'Delhi'
    }
    next()
})

// http://localhost:3434/hello?name=Sbn&&city=Efmij

app.get('/hello', (req, res) => {
    res.send('Hello ' + req.query.name + '. You are from ' + req.query.city)
})

app.get('/bye', (req, res) => {
    res.send('Goodbye ' + req.query.name + '. You are from ' + req.query.city)
})

app.listen(3434, () => {
    console.log('started')
})