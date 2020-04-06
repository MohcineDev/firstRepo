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

    if (usernameCheck(usernameInput) && emailCheck(emailInput) && passwordCheck(passInput) && confirmCheck(pass0Input)) {
        submitHandler()
    }
    // usernameCheck(usernameInput)

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
        return false
    }
    else if (inputValue.length < 6) {
        username.children[2].textContent = 'must be at least 6 characters'
        username.children[2].classList.add('err')
        return false
    }
    else {
        username.children[2].classList.remove('err')
        return true
    }
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

//--- password Confirmation
confirmCheck = (inputValue) => {
    if (inputValue !== pass.children[1].value) {
        pass0.children[2].textContent = 'confirm your password'
        pass0.children[2].classList.add('err')
        return false
    }
    else {
        pass0.children[2].classList.remove('err')
        return true
    }

}

// console.log("Register")

// window.onload = function(){
//     const submit = document.getElementById('submit');
//     // let message = '';
//     submit.addEventListener('click', this.submitHandler)
// }

function setMessage(message) {
    document.getElementById('messagetag').textContent = message
    document.getElementById('messagetag').style.visibility = 'visible'

    // pass.children[2].textContent = message
    // messageTag.value = message;
}

function submitHandler() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmpassword = document.getElementById('confirmpassword');

    event.preventDefault();
    // axios.post("http://localhost:5000/register",
    axios.post("https://yourjourneydocumented.herokuapp.com/register",
        {
            username: username.value,
            email: email.value,
            password: password.value,
            confirmpassword: confirmpassword.value
        }
    )
        .then(
            response => {
                console.log(response.data)
                setMessage(response.data.message)
            }
        )
        .catch(
            error => {
                // console.log(response.data)
                console.log(error.response.data.message)
                setMessage(error.response.data.message)
            }
        )
    console.log("clicked..")
}

//----dark / light
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

    //or just use this easy but without reload
    // document.body.classList.toggle('dark')

})
