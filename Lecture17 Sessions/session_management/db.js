const Sequelize = require('sequelize')

const db = new Sequelize({
    dialect: 'mysql',
    username: 'myuser',
    database: 'mytestdb',
    password: 'mypass'
})

const User = db.define('user', {
    username: {
        type: Sequelize.STRING(30),
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING(75),
        unique: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = {
    db, User
}