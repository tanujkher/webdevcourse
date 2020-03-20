const passport = require('passport')
const localStrategy = require('passport-local').Strategy

const { Users } = require('./data/db')

passport.serializeUser((user, done) => {
    done(null, user.username)
})

passport.deserializeUser(async (username, done) => {
    const user = await Users.findOne({
        where: {
            username: username
        }
    })
    if(user){
        return done(null, user)
    }
    return done(new Error('No such user'))
})

passport.use(new localStrategy(async (username, password, done) => {
    const user = await Users.findOne({
        where:{
            username: username
        }
    })
    if(user){
        if(user.password == password){
            return done(null, user)
        }else{
            return done(null, false, {message: 'Invalid Password'})
        }
    }else{
        return done(null, false, {message: 'Invalid Username'})
    }
}))

exports = module.exports = passport