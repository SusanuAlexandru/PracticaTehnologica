document.addEventListener("DOMContentLoaded", function () {
    const formElement = document.getElementById("form_login");
    const URL_LOGIN_FORM = 'http://localhost:3000';
    
    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        let user = {
            "username": e.target.username.value,
            "password": e.target.password.value,
        }
        fetch(`${URL_LOGIN_FORM}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        .then(response => {
            window.location.href = '/admin';
        })
        .catch(error => {
            console.error(error);
        });
    });
});