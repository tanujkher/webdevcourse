const sequelize = require('sequelize')

const db = new sequelize(
    'userdb',
    'userdb',
    'userdb',
    {
        dialect: 'sqlite',
        host: 'localhost',
        storage: __dirname + '/data.db'     
    }
)

const Users = db.define('users', {
    username: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    firstName: sequelize.STRING,
    lastName: sequelize.STRING
})

exports = module.exports = {
    db,
    Users
}