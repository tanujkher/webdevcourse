const route = require('express').Router()
const { userFromToken } = require('../../middlewares/auth') 
const { authUser, createUser, findUserByToken } = require('../../controllers/users')

route.get('/', userFromToken)

exports = module.exports = route