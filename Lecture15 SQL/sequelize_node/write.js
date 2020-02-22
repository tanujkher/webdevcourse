const Sequelize = require('sequelize')
const util = require('util')

const db = new Sequelize({
    host: 'localhost',
    username: 'myuser',
    password: 'mypass',
    database: 'mytestdb',
    dialect: 'mysql'
})

const Users = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        unique: true
    }
})

async function dbops(){
    await db.authenticate()
    await db.sync()
    const user = await Users.create({
        id: 3, name: 'Shawn', email: 'shawn@gmail.com'
    })
    await (util.promisify(setTimeout))(5000)
    user.name = user.name.toUpperCase()
    user.save()
}

dbops()