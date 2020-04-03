const from = document.querySelector('#form')
const username = document.querySelector('.username')
const email = document.querySelector('.email')
const pass = document.querySelector('.pass')
const pass0 = document.querySelector('.pass0')

form.addEventListener('submit', function (a) {
    a.preventDefault()
    inputValidation()
})

function inputValidation() {

    let usernameInput = username.children[1].value
    let emailInput = email.children[1].value
    let passInput = pass.children[1].value
    let pass0Input = pass0.children[1].value

    usernameCheck(usernameInput)
    emailCheck(emailInput)
    passwordCheck(passInput)
    confirmCheck(pass0Input)
}
    
//--- username 

usernameCheck = (inputValue) => {

    let space = false

    for (let i = 0; i < inputValue.length; i++) {
        if (inputValue.charAt(i) === ' ') {
            space = true
            break;
        }
    }

    if (inputValue === '' || space) {
        username.children[2].textContent = 'enter a username'
        username.children[2].classList.add('err')
    }
    else
        username.children[2].classList.remove('err')
}


//--- email //still
emailCheck =(inputValue)=>{
    if (inputValue === '') {
        email.children[2].textContent = 'enter something here'
        email.children[2].classList.add('err')
    }
    else
        email.children[2].classList.remove('err')

}
//--- password 
passwordCheck = (inputValue) => {
    if (inputValue === '') {
        pass.children[2].textContent = 'enter a password'
        pass.children[2].classList.add('err')
    }
    else if (inputValue.length < 8) {
        pass.children[2].textContent = 'password must be greather than 7'
        pass.children[2].classList.add('err')
    }
    else
        pass.children[2].classList.remove('err')
}

//--- password Confirmation

confirmCheck = (inputValue) => {
    if (inputValue !== pass.children[1].value) {
        pass0.children[2].textContent = 'confirm your password'
        pass0.children[2].classList.add('err')
    }
    else
        pass0.children[2].classList.remove('err')

}