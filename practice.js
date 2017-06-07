const personInfo = document.querySelector('#personInfo')

const output = document.querySelector('#output')

function eventSubmit (ev) {
    ev.preventDefault()
    const f =ev.target
    
    const personName = document.querySelector('personName')
    const personAge=document.querySelector('personAge')
    const favColor =document.querySelector('favColor')

    output.textContent = 'Your name is ' + f.personName.value + ', you are ' + f.personAge.value + ' years old, and your favorite color is ' + f.favColor.value
}

personInfo.addEventListener('submit', eventSubmit)