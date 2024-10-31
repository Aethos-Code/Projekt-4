const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.getElementById('form');
const inputs = [
    { element: document.getElementById('username'), errorMessage: 'Brugernavn er påkrævet' },
    { element: document.getElementById('email'), errorMessage: 'Email er påkrævet', validate: isValidEmail, invalidMessage: 'Angiv en gyldig email adresse' },
    { element: document.getElementById('password'), errorMessage: 'Adgangskode er påkrævet', minLength: 8, lengthMessage: 'Adgangskoden skal bestå af mindst 8 bogstaver' },
    { element: document.getElementById('password2'), errorMessage: 'Bekræft venligst din adgangskode', matchElement: document.getElementById('password'), mismatchMessage: 'Adgangskoden matcher ikke' }
];

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};


const validateInputs = () => {
    inputs.forEach(input => {
        const value = input.element.value.trim();

        if (value === '') {
            setError(input.element, input.errorMessage);
        } else if (input.minLength && value.length < input.minLength) {
            setError(input.element, input.lengthMessage);
        } else if (input.validate && !input.validate(value)) {
            setError(input.element, input.invalidMessage);
        } else if (input.matchElement && value !== input.matchElement.value) {
            setError(input.element, input.mismatchMessage);
        } else {
            setSuccess(input.element);
        }
    });
};
