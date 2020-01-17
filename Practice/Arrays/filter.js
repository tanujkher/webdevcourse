let arr = [1, 2, 3, 4, 5, 6, 7]
let a = arr.filter(function(item){
    return item % 3 === 0
})
console.log(a)

let menu = ["Paneer Tikka", "Chicken Tandoor", "Onion Ring", "Egg Curry", "Garlic Naan"]
let vegMenu = menu.filter(function(food){
    if(food.toLowerCase().indexOf("chicken") !== -1) return false
    if(food.toLowerCase().indexOf("egg") !== -1) return false
    return true
})
let witoutOnionGarlic = vegMenu.filter(function(food){
    if(food.toLowerCase().indexOf("garlic") !== -1) return false
    if(food.toLowerCase().indexOf("onion") !== -1) return false
    return true
})
console.log("Menu : " + menu)
console.log("Veg Menu : " + vegMenu)
console.log("Without Onion and Garlic : " + witoutOnionGarlic)