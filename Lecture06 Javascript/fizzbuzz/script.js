// window.onload = function () {
//     let btn = document.getElementById('btn')
//     let list = document.getElementById('list')
//     btn.onclick = function () {
//         let no = document.getElementById('no')
//         for (let i = 1; i <= parseInt(no.value); i++) {
//             let li = document.createElement('li');
//             if (i % 3 == 0) {
//                 li.innerText += 'fizz'
//             }
//             if (i % 5 == 0) {
//                 li.innerText += 'buzz'
//             }
//             if (li.innerHTML == '') {
//                 li.innerText += i
//             }
//             list.appendChild(li)
//         }
//     }
// }
window.onload = function () {
    let btn = document.getElementById('btn')
    let list = document.getElementById('list')
    btn.onclick = function () {
        let no = document.getElementById('no')
        for (let i = 1; i <= parseInt(no.value); i++) {
            let str = ""
            if (i % 3 == 0) {
                str += 'fizz'
            }
            if (i % 5 == 0) {
                str += 'buzz'
            }
            if (str == '') {
                str = i
            }
            let li = document.createElement('li')
            li.innerText = str
            list.appendChild(li)
        }
    }
}