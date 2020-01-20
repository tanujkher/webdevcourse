class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name, age)
        this.grade = grade
    }
}

let p = new Person('John', 20)
let s = new Student('Jane', 20, 'A')

let a = 123
let b = 'fhj'
let c = true
let d = {x: 10}
let e = [1,4,6]
let f = function () { return 10 }

console.log('null < object < function, array, number, string, boolean')
console.log(d.__proto__ == b.__proto__.__proto__)
// function Book(pages, title){
//     this.pages = pages
//     this.title = title
// }

// function Novel(pages, title, author){
//     Book.call(this, pages, title)
//     this.author = author
// }

// Novel.prototype = Object.create(Book)

// let b = new Book(15, 'Lets C')
// let n = new Novel(20, 'Oliver Twist', 'Charles Dickens')