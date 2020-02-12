const express = require('express')
const srv = express()

const db = require('./db')

srv.use(express.json())
srv.use(express.urlencoded({extended : true}))

srv.set('view engine', 'hbs')

srv.get('/', (req, res) => {
    db.getAllPersons()
    .then((person) => {
        res.render('persons', {persons: person})
    })
    .catch((err) => {
        console.error(err)
    })
})

srv.get('/add', (req, res) => {
    res.render('persons_add')
})

srv.post('/add', (req, res) => {
    db.addNewPerson(req.body.name, req.body.age, req.body.city)
    .then((result_prompt) => {
        res.redirect('/')
    })
    .catch((err) => {
        console.error(err)
    })
})

srv.listen(2102, () => {
    console.log('Server started at http://localhost:2102/')
})