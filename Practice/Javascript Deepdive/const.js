const a = 10
// a++ not possible
console.log(a)
//But possible in case of objects addition and array push
const arr = [1, 2, 3]
arr[3] = 5
console.log(arr)

const obj = {
    x : 10,
    y : 'abc',
    z : [1, 2, 3]
}
obj.x++
obj.z[3] = 10
console.log(obj)
//But obj = newObj not possible

let newObj = {
    p : 11,
    q : 'def',
    r : [10, 20, 30]
}
let copyObj = {
    g : 12
}
copyObj = newObj//although with objects and arrays created using let and var its possible
// obj = newObj not possible