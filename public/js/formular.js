document.addEventListener("DOMContentLoaded", function () {
    const formElement = document.getElementById("formular");
    const URL_REGISTER = 'http://localhost:3000/formular';

    formElement.addEventListener("submit", (e) => {
        e.preventDefault();
        let fullName = document.getElementById("fullName").value;
        let username = document.getElementById("username").value;
        let email = document.getElementById("email").value;
        let phoneNumber = document.getElementById("phoneNumber").value;
        let studyLevel = document.getElementById("studyLevel").value;
        let selectedCourses = [];
        document.querySelectorAll('input[name="cursuri"]:checked').forEach(function (checkbox) {
            selectedCourses.push(checkbox.value);
        });

        let register = {
            fullName: fullName,
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            studyLevel: studyLevel,
            courses: selectedCourses
        };
        console.log(register);
        fetch(URL_REGISTER, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(register),
        })
            .then(response => response.json())
            .then(data => {
                formElement.reset();
                alert(data.message);
            })
            .catch(error => {
                console.error(error);
            });
    });
});
