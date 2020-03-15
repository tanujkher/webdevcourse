const route = require('express').Router()

route.use('/articles', require('./articles'))
route.use('/profiles', require('./profiles'))
route.use('/users', require('./users'))
route.use('/user', require('./user'))

exports = module.exports = route