const express = require('express')
const srv = express()

srv.get('/', (req, res) => {
    res.send(`
    <html>
        <body>
            <h1>Hello</h1>
            <h2>This is a server</h2>
            <img src="/logo.jpg"> 
        </body>
    </html>
    `)
})

srv.get('/logo.jpg', (req, res) => {
    res.sendFile(__dirname + '/googlelogo.png')
})

srv.get('/text', (req, res) => {
    res.send('This is a server')
})

srv.listen(3333, () => {
    console.log('Server started')
})