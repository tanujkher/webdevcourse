const { Users } = require('../data/db').Users
const getRandomString = require('../utils/random').getRandomString

async function createUser(username, email, bio, password, image){
    const user = await Users.create({
        username,
        email,
        password,
        token: getRandomString(32),
        bio,
        image
    })
    return user
}

async function authUser(username, password){
    const user = await Users.findOne({
        where: { username }
    })
    if(!user){
        return { body: [ 'No user with that username' ]}
    }
    if(user.password != password){
        return { body: [ 'Password doesn\'t match' ]}
    }
    return user
}

async function findUserByToken(token){
    const user = await Users.findOne({
        where: { token }
    })
    if(!user){
        return { body: [ 'Invalid token' ]}
    }
    return user
}

module.exports = {
    createUser,
    authUser,
    findUserByToken
}