const express = require('express')
const srv = express()

const SERVER_PORT = 8728 || process.env.PORT

srv.use('/', express.static(__dirname + '/public'))

srv.listen(SERVER_PORT, () => {
    console.log(`Server started at http://localhost:${SERVER_PORT}`)
})