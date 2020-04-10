

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
