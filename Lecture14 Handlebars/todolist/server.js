const express = require('express')
const srv = express()

let todos = [
    {name: 'Task one', status: true},
    {name: 'Another task', status: false},
    {name: 'Third task', status: true},
    {name: 'Last task', status: false}
]

srv.use(express.json())
srv.use(express.urlencoded({extended: true}))

srv.set('view engine', 'hbs')

srv.get('/', (req, res) => {
    res.render('todo', {todos: todos, title: 'todo list'})
})

srv.post('/add', (req, res) => {
    console.log(req.body)
    todos.push({name: req.body.Task, status: req.body.completed === 'on'})
    console.log(todos)
    res.render('todo', {todos: todos, title: 'todo list'})
})

srv.listen('5939', () => {
    console.log('Server started at http://localhost:5939')
})