window.onload = function(){
    let text = document.getElementById('text')
    let list = document.getElementById('list')
    let btn = document.getElementById('btn')

    function addTask(){
        let task = text.value
        if(task != ''){
            let li = document.createElement('li')
            li.innerText += task
            let btnup = document.createElement('button')
            btnup.innerText = "+"
            let btndown = document.createElement('button')
            btndown.innerText = "-"
            let btnstrike = document.createElement('button')
            btnstrike.innerText = "x"
            li.appendChild(btnup)
            li.appendChild(btndown)
            li.appendChild(btnstrike)
            list.appendChild(li)
        }
    }

    btn.onclick = function(){
        addTask()
    }
    text.addEventListener('keyup', function(event){
        if(event.keyCode == 13){
            addTask()
        }
    })
}