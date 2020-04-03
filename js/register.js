// console.log("Register")

window.onload = function(){
    const submit = document.getElementById('submit');
    // let message = '';
    submit.addEventListener('click', this.submitHandler)
}

function setMessage(message){
    document.getElementById('messagetag').textContent = message
    // messageTag.value = message;
}

function submitHandler() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmpassword = document.getElementById('confirmpassword');

    event.preventDefault();
    // axios.post("https://dashboard.heroku.com/apps/yourjourneydocumented/register")
    axios.post("http://localhost:5000/register",
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
