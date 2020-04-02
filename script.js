const from = document.querySelector('#form')
const email = document.querySelector('.email')
const pass = document.querySelector('.pass')

form.addEventListener('submit', function (a) {
    a.preventDefault()
    inputValidation()
})


function inputValidation() {

    let emailInput = email.children[1].value
    let passInput = pass.children[1].value



    if (emailInput === '') {
        email.children[2].textContent = 'enter something here'
        email.children[2].classList.add('err')
        console.log( email.children[2])
    }
    else
        email.children[2].classList.remove('err')

    if (passInput === '') {
        pass.children[2].textContent = 'enter a password'
        pass.children[2].classList.add('err')
    }
    else
        pass.children[2].classList.remove('err')



}


