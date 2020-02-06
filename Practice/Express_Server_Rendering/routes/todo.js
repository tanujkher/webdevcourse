const route = require('express').Router()

const todo = []

route.get('/', (req, res) => {
    res.render('todos', {todo})
})

route.post('/', (req, res) => {
    todo.push({task : req.body.newtodo})
    res.redirect('/todos')
})

module.exports = route