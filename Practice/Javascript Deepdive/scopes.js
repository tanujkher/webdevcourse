const myVar = 10
function alpha(){
    const myVar = 21
    if(true){
        const myVar = 31
        console.log(myVar)//in case of var 31 : in case of let and const 31
    }
    console.log(myVar)//in case of var 31 : in case of let and const 21
}

alpha()
//hence let and const block scope, var function scope