const express = require('express')
const srv = express()

srv.use(express.json())
srv.use('/api', require('./route/api'))

srv.listen(6095, () => {
    console.log('Server started at http://localhost:6095')
})