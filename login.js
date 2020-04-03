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

    emailCheck(emailInput)
    passwordCheck(passInput)
}
 
//--- email //still
emailCheck = (inputValue) => {
    if (inputValue === '') {
        email.children[2].textContent = 'enter something here'
        email.children[2].classList.add('err')
        return false
    }
    else {
        email.children[2].classList.remove('err')
        return true
    }

}
//--- password 
passwordCheck = (inputValue) => {
    if (inputValue === '') {
        pass.children[2].textContent = 'enter a password'
        pass.children[2].classList.add('err')
        return false
    }
    else if (inputValue.length < 8) {
        pass.children[2].textContent = 'password must be greather than 7'
        pass.children[2].classList.add('err')
        return false
    }
    else {
        pass.children[2].classList.remove('err')
        return true
    }
}

//----dark light
document.body.classList.add(localStorage.getItem('classList'))
const dark = document.querySelector('#dark')

dark.addEventListener('click', () => {

    if (localStorage.getItem('classList') == 'light') {
        document.body.classList.add('dark')
        localStorage.setItem('classList', 'dark')
    }
    else {
        document.body.classList.remove('dark')
        localStorage.setItem('classList', 'light')
    }
})

