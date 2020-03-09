const route = require('express').Router()

const db = require('../db')

route.get('/', (req, res) => {
    db.getAllPersons()
    .then((person) => {
        res.render('persons', {persons: person})
    })
    .catch((err) => {
        console.error(err)
    })
})



route.get('/add', (req, res) => {
    res.render('persons_add')
})

route.post('/add', (req, res) => {
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then((result_prompt) => {
        res.redirect('/')
    })
    .catch((err) => {
        console.error(err)
    })
})


exports = module.exports = {
    route
}