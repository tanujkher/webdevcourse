const route = require('express').Router()

const User = require('../../db').User

route.get('/', (req, res) => {
    // if someone sends a get request here we have to send the list of all users
    User.findAll()
    .then((users) => {
        res.status(200).send(users)
    })
    .catch((err) => {
        res.status(500).send({
            error: 'Couldn\'t retrieve users'
        })
    })
})

route.post('/', (req, res) => {
    // if request has name then add user
    User.create({
        name: req.body.name
    }).then((user) => {
        res.status(201).send(user)
    }).catch((err) => {
        res.status(501).send({error: 'Couldn\'t send add new user'})
    })
})

exports = module.exports = route