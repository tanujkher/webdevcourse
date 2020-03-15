const express = require('express')
const srv = express()
const { db } = require('./data/db')

srv.use(express.json())
srv.use('/api', require('./route/api'))

db.sync().then(() => {
    srv.listen(6095, () => {
        console.log('Server started at http://localhost:6095')
    })
})