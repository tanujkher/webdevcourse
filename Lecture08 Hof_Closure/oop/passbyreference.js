function increment(a, b){
    a[0] = a[0] + 1
    b[0] = b[0] + 1
}

let a = [10]
let b = [20]

console.log(a[0])
console.log(b[0])

increment(a, b)

console.log(a[0])
console.log(b[0])