const sequelize = require('sequelize')

const db = new sequelize('realworld', 'conduit', 'conduit', {
    host: 'localhost',
    dialect: 'sqlite',
    storage: __dirname + '/blog.db'
})

const Users = db.define('user', {
    email: {
        type: sequelize.STRING,
        unique: true,
        allowNull: false
    },
    username: {
        type: sequelize.STRING,
        primaryKey: true
    },
    password: {
        type: sequelize.STRING,
        allowNull: false
    },
    token: {
        type: sequelize.STRING(32),
        allowNull: false
    },
    bio: {
        type: sequelize.TEXT
    }
})