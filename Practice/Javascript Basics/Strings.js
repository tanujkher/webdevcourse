let str = "this is tanuj's string"
let str1 = 'this is tanuj\'s string'

console.log(str)
console.log(str1)

let str2 = 'tanuj'
let str3 = `hi ${str2}`

console.log(str3)

let longStr = 'this is \n a very long \n string'

console.log(longStr)

// length of string
console.log('hello'.length)

//searching
let s = 'this is a long string'
console.log(s.indexOf('is'))
console.log(s.indexOf('is', 3))

let mainStr = 'this-is-a-long-string'
console.log(mainStr.slice(3, 8))
console.log(mainStr.substring(4, 9))
console.log(mainStr.substr(3, 5) + 'same as one line above')
console.log(mainStr.slice(-18, -13))//from small to large
// console.log(mainstr.substring(-4, -9)) not possible
console.log(mainStr.substr(-18, 5))//number of char value is always positive ie 5 in this context