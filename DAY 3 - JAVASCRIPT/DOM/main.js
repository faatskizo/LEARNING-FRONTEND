document.title = 'MUHAMMAD SYAFAAT 1'
const body = document.body
const btn1 = document.getElementById('btn1')

btn1.textContent = 'KLIK SAYA 1'

btn1.style.color = 'red'
btn1.style.border = 'none'
btn1.style.padding = '8px'
btn1.style.backgroundColor = 'BLUE'
 
const newText1 = document.createElement('p')
newText1.textContent = 'MUHAMMAD SYAFAAT'

function clickButton () {
    btn1.style.color = 'black'
}

function warnaButton () {
    btn1.style.color = 'blue'
    btn1.style.backgroundColor = 'red'
    body.append(newText1)
}

function keluarButton () {
    newText1.style.color = 'yellow'
}

