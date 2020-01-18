window.onload = function(){
    let text = document.getElementById('text')
    let list = document.getElementById('list')
    let btn = document.getElementById('btn')

    // list.innerHTML = localStorage.getItem('a')
    
    function addTask(){
        let task = text.value
        if(task != ''){
            let li = document.createElement('li')
            li.innerText += task
            let btnup = document.createElement('button')
            btnup.innerText = '+'
            let btndown = document.createElement('button')
            btndown.innerText = '-'
            let btnstrike = document.createElement('button')
            btnstrike.innerText = 'x'
            li.appendChild(btnup)
            li.appendChild(btndown)
            li.appendChild(btnstrike)
            li.className = 'list-item'
            list.appendChild(li)
            document.getElementById('text').value = ''
            // localStorage.setItem('a', list.innerHTML)
            btnstrike.onclick = function(){
                var li = this.parentElement
                li.className = 'done'
            }
            btnup.onclick = function(){
                var li = this.parentElement
                li.className = 'move up'
                var s1 = 0
                let plist = document.getElementsByTagName('li')
                for (let i = 0; i < plist.length; i++) {
                    if(plist[i].className === 'move up'){
                        s1 = i
                        break
                    }
                }
                if(s1 === 0){
                    plist[0].className = 'list-item'
                }else{
                    list.insertBefore(plist[s1], plist[s1 - 1])
                    plist[s1].className = 'list-item'
                    plist[s1 - 1].className = 'list-item'
                }
            }
            btndown.onclick = function(){
                var li = this.parentElement
                li.className = 'move down'
                var s1 = 0
                let plist = document.getElementsByTagName('li')
                for (let i = 0; i < plist.length; i++) {
                    if(plist[i].className === 'move down'){
                        s1 = i
                        break
                    }
                }
                if(s1 === plist.length - 1){
                    plist[s1].className = 'list-item'
                }else{
                    list.insertBefore(plist[s1 + 1], plist[s1])
                    plist[s1].className = 'list-item'
                    plist[s1 + 1].className = 'list-item'
                }
            }
        }
    }

    let clearBtn = document.getElementById('clearBtn')
    clearBtn.onclick = function(){
        let plist = document.getElementsByTagName('li')
        let arr = []
        let j = 0
        for (let i = 0; i < plist.length; i++) {
            if(plist[i].className === 'done'){
                arr[j] = i
                j++
            }
        }
        for(let i = arr.length - 1; i >= 0; i--){
            list.removeChild(plist[arr[i]])
        }
        console.log(arr)
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