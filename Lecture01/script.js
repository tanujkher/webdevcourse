let btn1 = document.getElementById('btn1')
let var1 = document.getElementById('var1')
let var2 = document.getElementById('var2')

btn1.onclick = function(){
    let a = parseInt(var1.value)
    let b = parseInt(var2.value)
    if(isNaN(a) || isNaN(b)){
        if(isNaN(a) && isNaN(b)){
            alert("Invalid number 1 & 2")
            return
        }
        else if(isNaN(a)){
            alert("Invalid number 1")
            return
        }
        else if(isNaN(b)){
            alert("Invalid number 2")
            return
        }
    }
    let c = a + b
    alert('Sum is ' + c)
}