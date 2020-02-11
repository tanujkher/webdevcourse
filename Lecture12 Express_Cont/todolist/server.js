const express = require('express')
const srv = express()

const fs = require('fs').promises
const os = require('os')

let todos = []

srv.get('/', (req, res) => {
  async function filecopy(){
    let data = await fs.readFile(__dirname + '/content.txt')
    todos = data.split(os.EOL)
    console.log(todos)
  }
  filecopy()
  let list = ''
  for(let i = 0; i <= todos.length - 1; i++){
    list = list + '<li>' + todos[i] + `<a href="/delete?id=${i}">X</a>` + '</li>'
  }

  res.send(`
  <html>
    <body>
      <form action='/add'>
        <input name="task"></input>
        <input type="submit"></input>
      </form>
      <ol>
        ${list}
      </ol>
    </body>
  </html>
  `)
})

async function addremdata(){
  let promise = fs.writeFile(__dirname + '/content.txt', todos.join(os.EOL))
  await promise.then(() => {
    console.log('Added')
  })
}

srv.get('/add', (req, res) => {
  if(req.query.task){
    todos.push(req.query.task)
    addremdata()
    res.redirect('/')
  }else{
    res.send('Enter a task')
  }
})

srv.get('/delete', (req, res) => {
  if(req.query.id >= 0 && req.query.id <= todos.length - 1){
    todos.splice(req.query.id, 1)
    addremdata()
    res.redirect('/')
  }else{
    res.send('Index not available')
  }
})

srv.listen(5939, () => {
    console.log('Server started') 
})