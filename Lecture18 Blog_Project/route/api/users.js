const route = require('express').Router()
const { authUser, createUser } = require('../../controllers/users')

route.post('/', async (req, res) => {
    let u = req.body.user 
    const user = await createUser(
        u.username,
        u.email,
        u.bio,
        u.password,
        u.image
    )
    res.send(user)
})

module.exports = route