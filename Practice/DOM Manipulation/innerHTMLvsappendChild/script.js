window.onload = function(){
    let btn = document.getElementById('btn')
    let num = document.getElementById('num')
    let list = document.getElementById('list')

    btn.onclick = function(){
        let N = num.value
        let start = new Date().getTime()
        for (let i = 1; i <= N; i++) {
            // list.innerHTML = list.innerHTML + '<li>' + i + '</li>'
            let li = document.createElement('li')
            li.innerText = i
            list.appendChild(li)
        }
        let end = new Date().getTime()
        console.log(end - start)
    }
}