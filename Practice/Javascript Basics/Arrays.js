let arr = [1, 2, 3]
for(let i = 0; i < arr.length; i++){
    console.log(arr[i])
}

//heterogenous array
let harr = [1, 'abc', [2, 3]]
console.log(harr)

//for-of-loop
for(let val of harr){
    console.log(val)
}

//for-in-loop
for(let index in harr){
    console.log(harr[index])
}

//implementing stacks and queue using different stack operations
//stack
let fruits = ['mango', 'apple']
fruits.push('kiwi')
console.log(fruits)
console.log(fruits.pop())
console.log(fruits)
//queue
console.log(fruits)
fruits.unshift('melon')//enqueue
console.log(fruits)
console.log(fruits.pop())//dequeue

//changing data in an array
let carr = [1, 2, 3, 4, 5, 6, 7]
console.log(carr.slice(4, 6))
console.log(carr)//indicating slice is a non destructive function

// console.log(carr.splice(4))// the removed part SYNTAX : (index after which remove) || (index after remove, number of remove elements)
// console.log(carr)//removed the values after index 4 indicating its a destructive function

// console.log(carr.splice(3, 3, 40, 50, 60))//SYNTAX : (number, deleteCount, elements to be inserted inplace of the deleted ones)
// console.log(carr)

console.log(carr.concat([8, 9, 10]))// adds at end
console.log(carr)//indicating non destructive nature