const express = require('express')
const srv = express();

srv.set('view engine', 'hbs')

srv.use(express.json())
srv.use(express.urlencoded({extended : true}))

const todo = require('./routes/todo')
srv.use('/todos', todo)

srv.listen(2345)