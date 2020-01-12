window.onload = function () {
    let name = document.getElementById('name')
    let btn = document.getElementById('btn')
    let list = document.getElementById('list')
    function addnewtask(){
        let li = document.createElement('li')
        li.innerText = name.value
        list.appendChild(li)
    }
    btn.onclick = function () {
        addnewtask()
    }
    name.addEventListener('keyup',function(event){
        if (event.keyCode == 13) {
            addnewtask()
        }
    })
}