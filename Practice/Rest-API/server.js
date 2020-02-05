const express = require('express')
const srv = express()

const todoList = require('./routes/todolist')

srv.use(express.json())
srv.use(express.urlencoded({extended : true}))
srv.use('/todo', todoList)

srv.listen(4325)