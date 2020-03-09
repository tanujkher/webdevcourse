const route = require('express').Router()
const db = require('../db')

route.get('/', (req, res) => {
    db.getAllPersons()
    .then((result) => {
        res.send({persons: result})
    })
    .catch((err) => {
        console.error(err)
    })
})

route.post('/', (req, res) => {
    db.addNewPerson(req.body.np.name, req.body.np.age, req.body.np.city)
    .then((data) => {
        console.log('added entry' + data)
    })
})

exports = module.exports = {
    route
}