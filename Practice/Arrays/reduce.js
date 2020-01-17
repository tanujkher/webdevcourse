let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let a = arr.reduce(function(acm, item){
    return acm + item
})
console.log(a)

//find factorial
let num = 9
let ar1 = []
for(let i = 1; i <= num; i++){
    ar1[i - 1] = i
}
let fac = ar1.reduce(function(acm, item){
    return acm * item
})
console.log(fac)