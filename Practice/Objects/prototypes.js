let p = {
    a : 10
}
let q = {
    b : 20,
    __proto__ : p
}
let r = {
    c : 30,
    __proto__ : q
}

console.log(r.a)
console.log(r.b)
console.log(r.c)