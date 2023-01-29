const form = document.querySelector('#form')
const firstName = document.querySelector('#first_name');
const lastName = document.querySelector('#last_name');
const email = document.querySelector('#email');
const telNumber = document.querySelector('#tel_number');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const submitBtn = document.querySelector('.btn');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    validation();
})

function validation() {
    const fNameValue = firstName.value.trim();
    const lNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const telNumberValue = telNumber.value.trim();
    const passwordValue = password.value;
    const password2Value = password2.value;

    // first name validation
    if (fNameValue !== '') {
        setValid(firstName);
    } else {
        setError(firstName, emptyInput());
    }

    // second name validation
    if (lNameValue !== '') {
        setValid(lastName);
    } else {
        setError(lastName, emptyInput());
    }

    // email validation
    if (emailValue === '') {
        setError(email, emptyInput())
    } else if (!isEmail(emailValue)) {
        setError(email, 'Email is not valid.');
    } else {
        setValid(email);
    }

    // tel number validation
    if (telNumberValue === '') {
        setError(telNumber, emptyInput());
    } else if (!isTelNumber(telNumberValue)) {
        setError(telNumber, 'Telephone number is not valid.')
    } else {
        setValid(telNumber);
    }

    // password validation 
    if (passwordValue === '') {
        setError(password, emptyInput())
    } else {
        setValid(password)
    }
    
    if (password2Value === '') {
        setError(password2, emptyInput())
    } else if (password2Value !== passwordValue) {
        setError(password2, 'Passwords does not match.')
    } else {
        setValid(password2)
    }


}

function setValid(input) {
    input.classList.remove('error')
    input.classList.add('valid');

    let errorMessage = input.nextElementSibling;
    errorMessage.classList.add('hidden');
}

function setError(input, message) {
        input.classList.add('error');


    let errorMessage = input.nextElementSibling;
    errorMessage.innerText = message;
    errorMessage.classList.remove('hidden');
}

function emptyInput() {
    return `Cannot be empty.`;
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isTelNumber (telNumber) {
    return /d{10}|\d{9}/.test(telNumber)
}