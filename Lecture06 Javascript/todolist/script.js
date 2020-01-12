window.onload = function () {
    let name = document.getElementById('name')
    let btn = document.getElementById('btn')
    let list = document.getElementById('list')
    btn.onclick = function () {
        let li = document.createElement('li')
        li.innerText = name.value;
        list.appendChild(li)
    }
}