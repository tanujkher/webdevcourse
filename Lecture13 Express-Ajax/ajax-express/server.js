const express = require('express')
const srv = express()

srv.use('/', express.static('./public'))

srv.listen(2345, () => {
    console.log('Server started at http://localhost:2345')
})