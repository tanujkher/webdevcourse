const { MongoClient } = require('mongodb')

const MONGO_URL = 'mongodb://localhost:27017'
const DB_NAME = 'tododb'

async function read(){
    const client = await MongoClient.connect(MONGO_URL)
    const tododb = await client.db(DB_NAME) 
    const todos = await tododb.collection('todos')
    const result = await todos.find({}).toArray()
    result.forEach(todo => {
        console.log(JSON.stringify(todo))
    });
}

async function readp1_o(){
    const client = await MongoClient.connect(MONGO_URL)
    const tododb = await client.db(DB_NAME) 
    const todos = await tododb.collection('todos')
    const result = await todos.find({
        $and: [
            {priority: {$gte: 1}},
            {owner: 'manager'}
        ]
        // convert priority from string to number
    }).toArray()
    result.forEach(todo => {
        console.log(JSON.stringify(todo))
    });
}

exports = module.exports = {
    read, readp1_o
}