if(typeof window === 'undefined'){
    var {add, subtract} = require('./lib')
}

console.log(add(10, 20))
console.log(subtract(100, 20))