const express = require('express')
const srv = express()

const fs = require('fs')
const os = require('os')

let todos = []

function read(){
  return new Promise((resolve, reject) => {
    fs.readFile(__dirname + '/content.txt', (err, data) => {
      if(err){
        reject(err)
      }else{
        resolve(data)
      }
    })
  })
}

srv.get('/', (req, res) => {
  read()
  .then((data) => {
    if(data.toString()){
      todos = data.toString().split(os.EOL)
    }
    let list = ''
    for(let i = 0; i <= todos.length - 1; i++){
      list = list + '<li>' + todos[i] + ` <a href="/delete?id=${i}">X</a>` + '</li>'
    }
    res.send(`
    <html>
      <body>
        <form action="/add">
          <input name="task">
          <input type="submit">
        </form>
        <ol>
          ${list}
        </ol>
      </body>
    </html>
    `)
  })
  .catch((err) => {
    console.error(err)
  })
})

function write(data){
  return new Promise((resolve, reject) => {
    fs.writeFile(__dirname + '/content.txt', data, (err) => {
      if(err){
        reject(err)
      }else{
        resolve()
      }
    })
  })
}

srv.get('/add', (req, res) => {
  todos.push(req.query.task)
  let content = todos.join(os.EOL)
  write(content)
  .then(() => {
    res.redirect('/')
  })
  .catch((err) => {
    console.error(err)
  })
})

srv.get('/delete', (req, res) => {
  todos.splice(req.query.id, 1)
  let content = todos.join(os.EOL)
  write(content)
  .then(() => {
    res.redirect('/')
  })
  .catch((err) => {
    console.error(err)
  })
})

srv.listen(5939, () => {
    console.log('Server started at http://localhost:5939/') 
})