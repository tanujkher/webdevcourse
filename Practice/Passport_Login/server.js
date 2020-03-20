const express = require('express')
const srv = express()
const passport = require('./passport')

const session = require('express-session')

const { db } = require('./data/db')

srv.set('view engine', 'hbs')

srv.use(express.urlencoded({extended: true}))
srv.use(express.json())

srv.use(session({
    secret: 'Some secret string'
}))
srv.use(passport.initialize())
srv.use(passport.session())

srv.use('/public', require('./routes/public'))
srv.use('/private', require('./routes/private'))

srv.use('/', require('./routes/root'))

db.sync().then(() => {
    srv.listen(9122, () => {
        console.log('Server started at http://localhost:9122')
    })
})