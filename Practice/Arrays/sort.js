let arr = [6, 5, 4, 1, 3, 2, 7]
console.log(arr.sort())// looks fine here but when
arr[7] = 14
arr[8] = 26
arr[9] = 55
console.log(arr)// new array
console.log(arr.sort())// now look at the result
//sorted lexicographically as it treats everything as string and is a higher order function
function compare(a, b){
    return a - b
}
console.log(arr.sort(function(a, b){
    console.log(arr)
    console.log(a + " " + b)
    return a - b
}))
console.log(arr.sort(compare))// passing the comparator logic
// sorting by units digit
console.log("---------sort by units digit---------")
console.log(arr.sort(function(a, b){
    return (a % 10) - (b % 10);
}))