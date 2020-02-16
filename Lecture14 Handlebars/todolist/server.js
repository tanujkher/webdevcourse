const express = require('express')
const srv = express()

let todos = [
    {name: 'Task one', status: true},
    {name: 'Another task', status: false},
    {name: 'Third task', status: true},
    {name: 'Last task', status: false},
]

srv.set('view engine', 'hbs')

srv.get('/', (req, res) => {
    res.render('todo', {todos: todos, title: 'todo list'})
})

srv.listen('5939', () => {
    console.log('Server started at http://localhost:5939')
})