const APLHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

function getRandomString(length){
    let buff = []
    while(buff.length < length){
        const charCode = parseInt(Math.random() * (61))
        buff.push(APLHABET.charAt(charCode))
    }
    return buff.join('')
}

module.exports = {
    getRandomString
}