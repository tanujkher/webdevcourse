const express = require('express')
const srv = express()

srv.use(express.json())
srv.use(express.urlencoded({extended : true}))

const todo = require('./routes/todo')
srv.use('/todo', todo)

srv.use('/public', express.static(__dirname + '/public'))

srv.listen(5939)