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
    },
    image: {
        type: sequelize.STRING
    }
})

const Articles = db.define('article', {
    slug: {
        type: sequelize.STRING(100),
        primaryKey: true
    },
    title: {
        type: sequelize.STRING,
        allowNull: false
    },
    description: {
        type: sequelize.STRING
    },
    body: {
        type: sequelize.TEXT
    }
})

Articles.belongsTo(Users, {as: 'author'})
Users.hasMany(Articles, {as: 'author'})

exports = module.exports = {
    db,
    Users,
    Articles
}