let arr = [1, 2, 3, 4, 5]
let b = arr.map(function(item){
    return item * item
})
console.log(b)
let c = arr.map(function(item){
    return 100 - item
})
console.log(c)