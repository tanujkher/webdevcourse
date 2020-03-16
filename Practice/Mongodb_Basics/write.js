const { MongoClient } = require('mongodb')

const MONGO_URL = 'mongodb://localhost:27017'
const DB_NAME = 'tododb';

async function writeTask(todo){
    const client = await MongoClient.connect(MONGO_URL)
    const tododb = await client.db(DB_NAME)
    const todos = await tododb.collection('todos')
    // const todo = {
    //     task: 'an important task',
    //     priority: '2'
    // }
    const result = await todos.insertOne(todo)
    console.log(result)
}

async function writeTasks(){
    const client = await MongoClient.connect(MONGO_URL)
    const tododb = await client.db(DB_NAME)
    const todos = await tododb.collection('todos')
    // const todo = {
    //     task: 'an important task',
    //     priority: '2'
    // }
    const result = await todos.insertMany([
        {task: 'task 1', priority: 4, owner: 'manager'},
        {task: 'task 2', priority: 5, owner: 'employee'}
    ])
    console.log(result)
}

exports = module.exports = {
    writeTasks, writeTask
}
// node -> const r = require('write.js') -> use writeTask