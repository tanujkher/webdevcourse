// const express = require('express')
// const router = express.Router
// const route = router()

const route = require('express').Router()

let students = [
    {name : 'ghi', subject : 'Android'},
    {name : 'jkl', subject : 'Machine Learning'},
    {name : 'mno', subject : 'Web Development'},
    {name : 'pqr', subject : 'Android'}
]

route.get('/', (req, res) => res.send(students))
route.post('/', (req, res) => {
    students.push({
        name : req.body.name,
        subject : req.body.subject
    })
    res.send(students)
})
route.get('/:id', (req, res) => res.send(students[req.params.id]))

module.exports = route