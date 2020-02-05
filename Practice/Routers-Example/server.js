const express = require('express')
const srv = express()

const teacherRoute = require('./routes/teacher')
const studentRoute = require('./routes/student')

srv.use(express.json())
srv.use(express.urlencoded({extended : true}))

srv.use('/teacher', teacherRoute)
srv.use('/student', studentRoute)

srv.listen(2233)