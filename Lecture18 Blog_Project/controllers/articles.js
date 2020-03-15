const { Users, Articles } = require('../data/db')
const slugify = require('../utils/string').slugify

async function getAllArticles(){
    const articles = await articles.findAll({
        attributes: [
            'slug', 'title', 'description', 
            'body', 'createdAt', 'updatedAt'
        ],
        include: [{
            attributes: ['username', 'bio', 'image'],
            model: Users,
            as: 'author'
        }]
    })

    return ({
        articles,
        articleCount: articles.length
    })
}

async function createArticles(title, description, body, authorUsername){
    if(!title){
        return new Error('title missing')
    }
    if(!body){
        return new Error('body missing')
    }
    const newArticle = await Articles.create({
        slug: slugify(title),
        title,
        description,
        body,
        authorUsername
    })
    const article = await Articles.findOne({
        attributes: [
            'slug', 'title', 'description',
            'body', 'createdAt', 'updatedAt'
        ],
        include: [{
            attributes: ['username', 'bio', 'image'],
            model: Users,
            as: 'author'
        }]
    })
    return article
}

module.exports = {
    createArticles,
    getAllArticles
}