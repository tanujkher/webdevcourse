const route = require('express').Router()
const { userFromToken } = require('../../middlewares/auth') 
const { getAllArticles, createArticles } = require('../../controllers/articles')
const { findUserByToken } = require('../../controllers/users')

route.get('/', async (req, res) => {
    const articles = await getAllArticles()
    res.send(articles)
})

route.post('/', async (req, res) => {
    let a = req.body.article
    const newArticle = await createArticles(
        a.title,
        a.description,
        a.body,
        req.user.username
        )
        res.send(newArticle)
    })
    
exports = module.exports = route