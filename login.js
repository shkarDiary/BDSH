let messageError = document.getElementById("error")
const password = document.getElementById("password")
const email = document.getElementById("email")
const form = document.getElementById("form")
let pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
form.addEventListener('submit', (e) => {
    if (!email.value.match(pattern)) {
        messageError.innerHTML = "email is not valid"
    } else {
        messageError.innerText = null;
    }
    if (password.value.length < 6) {
        messageError.innerHTML = "password must be long than 6"
    }
    e.preventDefault()
})