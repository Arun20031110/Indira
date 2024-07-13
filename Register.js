const forms = document.querySelectorAll(".form"); // Assuming .form is the class for the form element
const names = document.querySelectorAll(".name");
const phones = document.querySelectorAll(".phone");
const emails = document.querySelectorAll(".email");
const passwords = document.querySelectorAll(".pw");

forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        checkInput();
    });
});

function checkInput() {
    names.forEach(name => {
        const username = name.value.trim();
        if (username === '') {
            setError(name, "Please enter your name");
        } else {
            setSuccess(name);
        }
    });

    phones.forEach(phone => {
        const phonenumber = phone.value.trim();
        if (phonenumber === '') {
            setError(phone, "Please enter your phone number");
        } else {
            setSuccess(phone);
        }
    });

    emails.forEach(email => {
        const emailaddress = email.value.trim();
        if (emailaddress === '') {
            setError(email, "Please enter your email");
        } else if (!isEmail(emailaddress)) {
            setError(email, "Please enter a valid email");
        } else {
            setSuccess(email);
        }
    });

    passwords.forEach(password => {
        const pw = password.value.trim();
        if (pw === '') {
            setError(password, "Please enter your password");
        } else {
            setSuccess(password);
        }
    });
}

function setError(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "page error";
    small.innerText = message;
}

function setSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "page success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
