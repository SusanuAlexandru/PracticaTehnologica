document.addEventListener("DOMContentLoaded", function () {
    const formElement = document.getElementById("form_register");
    const URL_LOGIN_FORM = 'http://localhost:3000';
    
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        let user = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "password": e.target.password.value,
        }
        fetch(`${URL_LOGIN_FORM}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => {
            window.location.href = '/login';
        })
        .catch(error => {
            console.error(error);
        });
    });
});