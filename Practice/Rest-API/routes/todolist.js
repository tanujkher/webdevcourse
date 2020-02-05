const route = require('express').Router()

const todo = [
    {task : 'Make a Rest API', status : 'Not Done'},
    {task : 'Watch Express routing video', status : 'Not Done'}
]

route.get('/', (req, res) => {
    res.send(todo)
})

route.post('/', (req, res) => {
    todo.push(
        {task : req.body.task, status : req.body.status}
    )
    res.send(todo)
})

route.get('/:id', (req, res) => {
    res.send(todo[req.params.id])
})

route.patch('/:id', (req, res) => {
    todo[req.params.id] = {task : req.body.task, status : req.body.status}
    res.send(todo)
})

route.delete('/:id', (req, res) => {
    todo.splice(req.params.id, 1)
    res.send(todo)
})

module.exports = route