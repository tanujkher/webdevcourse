const srv = require('express')()

const teacherRoute = require('./routes/teacher')
const studentRoute = require('./routes/student')

srv.use('/teacher', teacherRoute)
srv.use('/student', studentRoute)

srv.listen(2233)