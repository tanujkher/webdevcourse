const express = require('express')
const srv = express()

srv.get('/:name/:greeting', (req, res) => {
    console.log(req.params)
    res.send(`${req.params.greeting} ${req.params.name}`)
})

srv.get('/greet', (req, res) => {
    console.log(req.query)
    let name = 'Guest'
    let greet = 'Hello'
    if(req.query.name){
        name = req.query.name
    }
    if(req.query.greet){
        greet = req.query.greet
    }
    res.send(`${greet} ${name}`)
})

srv.listen(3434, () => {
    console.log('Server started')
})