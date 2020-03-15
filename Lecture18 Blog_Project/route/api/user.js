const route = require('express').Router()
const { userFromToken } = require('../../middlewares/auth') 
const { authUser, createUser, findUserByToken } = require('../../controllers/users')

route.get('/', userFromToken, (req, res) => {
    return res.send(req.user)
})

module.exports = route